import React, {
  useState,
  useRef,
  useCallback,
  useEffect,
  useMemo,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import ProfessionalSkills from "./ProfessionalSkills";
import PersonalSkills from "./PersonalSkills";
import { PiGuitarFill } from "react-icons/pi";
import { FaUserSecret } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

const skillLevels = {
  Beginner: 20,
  Intermediate: 50,
  Advanced: 75,
  Expert: 100,
};

const SkillsAndHobbies = () => {
  const { t } = useTranslation();
  const [filter, setFilter] = useState("");
  const [visibleSkills, setVisibleSkills] = useState([]);
  const [selectedTab, setSelectedTab] = useState("professional");
  const observerRef = useRef();
  const lastScrollY = useRef(0);
  const [scrollDirection, setScrollDirection] = useState("down");

  const skillsToShowInitially = 6;
  const loadMoreSkillsCount = 6;

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const combineAndFilterSkills = useCallback(() => {
    const combinedSkills =
      selectedTab === "professional" ? ProfessionalSkills : PersonalSkills;
    return combinedSkills.filter((skill) =>
      skill.name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [filter, selectedTab]);

  const filteredSkills = useMemo(
    () => combineAndFilterSkills(),
    [combineAndFilterSkills]
  );

  useEffect(() => {
    setVisibleSkills(filteredSkills.slice(0, skillsToShowInitially));
  }, [filteredSkills, skillsToShowInitially]);

  const loadMoreSkills = useCallback(() => {
    setVisibleSkills((prevVisibleSkills) => [
      ...prevVisibleSkills,
      ...filteredSkills.slice(
        prevVisibleSkills.length,
        prevVisibleSkills.length + loadMoreSkillsCount
      ),
    ]);
  }, [filteredSkills, loadMoreSkillsCount]);

  const unloadSkills = useCallback(() => {
    setVisibleSkills((prevVisibleSkills) => {
      if (prevVisibleSkills.length <= skillsToShowInitially)
        return prevVisibleSkills;
      const remainingSkills = prevVisibleSkills.slice(loadMoreSkillsCount);
      return remainingSkills;
    });
  }, [loadMoreSkillsCount, skillsToShowInitially]);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY.current) {
      setScrollDirection("down");
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 50
      ) {
        loadMoreSkills();
      }
    } else {
      setScrollDirection("up");
      if (window.scrollY < 50) {
        unloadSkills();
      }
    }
    lastScrollY.current = currentScrollY;
  }, [loadMoreSkills, unloadSkills]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <SkillsContainer>
      <StickyHeader>
        <TitleContainer>
          <span className="green">{t("Characteristics")}</span>
          <h1>{t("My Properties in both personal and professional aspect")}</h1>
        </TitleContainer>
        <Tabs>
          <Tab
            onClick={() => setSelectedTab("professional")}
            active={selectedTab === "professional"}
          >
            <FaUserSecret />
            {t("Professional")}
          </Tab>
          <Tab
            onClick={() => setSelectedTab("personal")}
            active={selectedTab === "personal"}
          >
            <PiGuitarFill />
            {t("Personal")}
          </Tab>
        </Tabs>
        <SearchBar
          type="text"
          placeholder={t("Search skills...")}
          value={filter}
          onChange={handleFilterChange}
        />
      </StickyHeader>
      <SkillsGrid>
        <AnimatePresence>
          {visibleSkills.length > 0 ? (
            visibleSkills.map((skill, index) => (
              <SkillCard
                key={index}
                initial={{
                  opacity: 0,
                  y: scrollDirection === "down" ? 50 : -50,
                }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: scrollDirection === "down" ? -50 : 50 }}
                transition={{ duration: 0.5 }}
              >
                <SkillIcon>
                  <skill.icon />
                </SkillIcon>
                <SkillDetails>
                  <h3>{t(skill.name)}</h3>
                  <SkillLevel level={skillLevels[skill.level]} />
                  <p>{t(skill.description)}</p>
                </SkillDetails>
              </SkillCard>
            ))
          ) : (
            <NoSkillsFound>{t("No skills found")}</NoSkillsFound>
          )}
        </AnimatePresence>
      </SkillsGrid>
      <div ref={observerRef} />
    </SkillsContainer>
  );
};

export default SkillsAndHobbies;

const SkillsContainer = styled.div`
  width: 60%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 6rem 0;
  @media (max-width: 840px) {
    width: 60%;
  }
`;

const StickyHeader = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  background: none;
  z-index: 10;
  padding: 1rem 0;
`;

const Tabs = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
  padding: 0.5rem;
`;

const Tab = styled.button`
  border: none;
  border-radius: 10px 10px 10px 10px;
  background: ${(props) =>
    props.active
      ? "#01be96"
      : "none"}; /* Change these colors to your desired background colors */
  color: ${(props) =>
    props.active
      ? "#fff"
      : "#fff"}; /* White for default and green for active */
  padding: 0.6rem 0.6rem;
  margin: 0.5rem;
  font-size: 1.2rem;
  cursor: pointer;
  border: ${(props) => (props.active ? "1px solid #01be96" : "1px solid #fff")};
  animation: ${(props) =>
    props.active ? "wave1 3s infinite alternate" : "none"};
  &:focus {
    outline: none;
  }
`;

const SearchBar = styled.input`
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  margin-bottom: 2rem;
  background: #f0f0f0; /* Change this to your desired background color */
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 2rem;
`;

const SkillCard = styled(motion.div)`
  background: transparent; /* حذف پس‌زمینه */
  padding: 1.5rem;
  border: 2px solid #01be96; /* حاشیه سبز رنگ */
  border-radius: 10%;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1); /* سایه اطراف کادر */
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const SkillIcon = styled.div`
  font-size: 3rem;
  color: #fff; /* رنگ سبز برای آیکون‌ها */
  margin-bottom: 1rem;
`;

const SkillDetails = styled.div`
  h3 {
    margin: 0;
    font-size: 1.2rem;
    color: #fff; /* تغییر رنگ عنوان به سبز */
  }

  p {
    font-size: 0.9rem;
    color: #555;
  }
`;

const SkillLevel = styled.div`
  width: 100%;
  background: #eee;
  height: 10px;
  border-radius: 5px;
  margin: 1rem 0;
  &::after {
    content: "";
    display: block;
    height: 100%;
    background: #01be96;
    border-radius: 5px;
    width: ${(props) => props.level}%;
  }
`;

const NoSkillsFound = styled.p`
  grid-column: 1 / -1;
  text-align: center;
  font-size: 1.2rem;
  color: #666;
`;

const TitleContainer = styled.div`
  text-align: center;
  margin-bottom: 1rem;
  padding: 10px;
  span {
    font-weight: 700;
    text-transform: uppercase;
    color: #01be96;
  }
  h1 {
    padding-top: 1rem;
    text-transform: capitalize;
    color: #fff;
  }
`;

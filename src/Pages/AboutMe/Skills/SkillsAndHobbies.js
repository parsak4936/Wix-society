import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import ProfessionalSkills from "./ProfessionalSkills";
import PersonalSkills from "./PersonalSkills";
import { PiGuitarFill } from "react-icons/pi";
import { FaUserSecret } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

const INITIAL = 8;

const SkillsAndHobbies = () => {
  const { t } = useTranslation();
  const [filter, setFilter] = useState("");
  const [selectedTab, setSelectedTab] = useState("professional");
  const [showAll, setShowAll] = useState(false);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
    setShowAll(false);
  };

  const handleTab = (tab) => {
    setSelectedTab(tab);
    setShowAll(false);
  };

  const filteredSkills = useMemo(() => {
    const list =
      selectedTab === "professional" ? ProfessionalSkills : PersonalSkills;
    return list.filter((skill) =>
      skill.name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [filter, selectedTab]);

  const visibleSkills = showAll
    ? filteredSkills
    : filteredSkills.slice(0, INITIAL);
  const hasMore = filteredSkills.length > INITIAL;

  return (
    <SkillsContainer>
      <StickyHeader>
        <TitleContainer>
          <span className="green">{t("Characteristics")}</span>
          <h1>{t("My Properties in both personal and professional aspect")}</h1>
        </TitleContainer>
        <Tabs>
          <Tab
            onClick={() => handleTab("professional")}
            active={selectedTab === "professional"}
          >
            <FaUserSecret />
            {t("Professional")}
          </Tab>
          <Tab
            onClick={() => handleTab("personal")}
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
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, delay: (index % INITIAL) * 0.03 }}
              >
                <SkillDetails>
                  <h3>{t(skill.name)}</h3>
                </SkillDetails>
              </SkillCard>
            ))
          ) : (
            <NoSkillsFound>{t("No skills found")}</NoSkillsFound>
          )}
        </AnimatePresence>
      </SkillsGrid>
      {hasMore && (
        <ButtonWrap>
          <ShowMoreButton onClick={() => setShowAll((v) => !v)}>
            {showAll
              ? t("Show less")
              : `${t("Show all")} (${filteredSkills.length})`}
          </ShowMoreButton>
        </ButtonWrap>
      )}
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
  padding: 0.2rem 0;
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
  background: ${(props) => (props.active ? "#018367" : "none")};
  color: ${(props) => (props.active ? "#fff" : "#fff")};
  padding: 0.2rem 0.6rem;
  margin: 0.5rem;
  font-size: 1.2rem;
  cursor: pointer;
  border: ${(props) => (props.active ? "1px solid #018367" : "1px solid #fff")};
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
  background: #f0f0f0;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 2rem;
`;

const SkillCard = styled(motion.div)`
  background: transparent;
  padding: 0.8rem;
  border: 2px solid #018367;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const SkillDetails = styled.div`
  h3 {
    margin: 0;
    font-size: 1.2rem;
    color: #fff;
  }

  p {
    font-size: 0.9rem;
    color: #555;
  }
`;

const NoSkillsFound = styled.p`
  grid-column: 1 / -1;
  text-align: center;
  font-size: 1.2rem;
  color: #666;
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

const ShowMoreButton = styled.button`
  background: #018367;
  color: #fff;
  border: none;
  padding: 0.6rem 1.6rem;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s, transform 0.2s;
  &:hover {
    background: #00a37a;
    transform: translateY(-2px);
  }
`;

const TitleContainer = styled.div`
  text-align: center;
  margin-bottom: 1rem;
  padding: 10px;
  span {
    font-weight: 700;
    text-transform: uppercase;
    color: #018367;
  }
  h1 {
    padding-top: 1rem;
    text-transform: capitalize;
    color: #fff;
  }
`;

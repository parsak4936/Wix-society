import React, { useState, useEffect, useCallback, useMemo } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import Unime from "../../../Assets/Education/Unime.png";
import IASBS from "../../../Assets/Education/IASBS.png";
import ZNU from "../../../Assets/Education/ZNU.png";
import sadra from "../../../Assets/Education/sadra.jpg";
import Maktab from "../../../Assets/Education/Maktab.jpg";
import Rahnama from "../../../Assets/Education/Rahnama.jpg";

const Education = ({ searchQuery, sortOrder }) => {
  const { t } = useTranslation();
  const [visibleItems, setVisibleItems] = useState([]);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [loadedImages, setLoadedImages] = useState({});

  const EducationData = useMemo(
    () => [
      {
        id: 1,
        avatar: Unime,
        address: t("Piazza Pugliatti, 1 - 98122 Messina"),
        website: "https://www.unime.it/",
        year: "2019-2020",
        finishedyear: "2025",
        title: t("Master of Data Science"),
        school: t("University of Messina"),
        grade: t(" -/100"),
        details: t(
          "My new adventure in ME, Italy, as a student of data science. I am not sure what will happen, but I am loving it!"
        ),
      },
      {
        id: 2,
        avatar: IASBS,
        address: t("PG44+3C8، زنجان"),
        website: "https://iasbs.ac.ir/",
        year: "2019-2020",
        finishedyear: "2023",

        title: t("Master of AI Engineering"),
        school: t("IASBS"),
        grade: t("-/100"),
        details: t(
          "I withdrew from this university due to moving abroad to work on my senior thesis and research on communication and ethical frameworks in artificial intelligence communities."
        ),
      },
      {
        id: 3,
        avatar: ZNU,
        address: t("M9PX+FX7, Zanjan, Zanjan Province, Iran"),
        website: "www.znu.ac.ir",
        year: "2019-2020",
        finishedyear: "2023",

        thesis: t("Thesis: Smart Door Access System (19.25/20)"),
        title: t("Bachelor of Computer Engineering"),
        school: t("ZNU"),
        grade: t("14.44/20"),
        details: "",
      },
      {
        id: 4,
        avatar: sadra,
        address: t("72J6+RCP District 2, Qazvin, Qazvin Province"),
        year: "2019-2020",
        finishedyear: "2017",

        title: t("Pre-University of Mathematics Science"),
        school: t("Sadra Highschool"),
        grade: t("16.73/20"),
        details: "",
      },
      {
        id: 5,
        avatar: sadra,
        address: t("72J6+RCP District 2, Qazvin, Qazvin Province"),
        year: "2019-2020",
        finishedyear: "2016",

        title: t("Mathematics and Physics Diploma"),
        school: t("Sadra Highschool"),
        grade: t("18.24/20"),
      },
      {
        id: 6,
        avatar: Maktab,
        address: t(
          "تهران - خیابان آیت‌الله کاشانی - بلوار اباذر - نبش کوچه شرافتی (هفتم) - پلاک ۲۹ - طبقه 5 - واحد 9"
        ),
        website: "https://maktabkhooneh.org/",
        certification: "https://bit.ly/3nuKrEV",
        finishedyear: "2021",
        year: "2019-2020",

        title: t("Mindfullness Skills instructed by Ms. Mandana Alemi"),
        school: t("Maktabkhooneh"),
        grade: t("70/100"),
      },
      {
        id: 7,
        avatar: Maktab,
        address: t(
          "تهران - خیابان آیت‌الله کاشانی - بلوار اباذر - نبش کوچه شرافتی (هفتم) - پلاک ۲۹ - طبقه 5 - واحد 9"
        ),
        website: "https://maktabkhooneh.org/",
        certification: "http://bit.ly/3ZbYDkc",
        finishedyear: "2021",
        year: "2019-2020",

        title: t("Advanced Python Programming instructed by Mr. Jadi Mirmirani"),
        school: t("Maktabkhooneh"),
        grade: t("88.7/100"),
      },
      {
        id: 8,
        avatar: Maktab,
        certification: "https://bit.ly/3nuKrEV",
        address: t(
          "تهران - خیابان آیت‌الله کاشانی - بلوار اباذر - نبش کوچه شرافتی (هفتم) - پلاک ۲۹ - طبقه 5 - واحد 9"
        ),
        website: "https://maktabkhooneh.org/",
        thesis: t("Thesis: ---"),
        title: t("Commercial Networking instructed by Ms. Sara Nazari"),
        school: t("Maktabkhonneh"),
        finishedyear: "2021",
        year: "2019-2020",

        grade: t("100/100"),
      },
      {
        id: 9,
        address: t(
          "Tehran Province, Tehran, Floor -1, Chaarbaagh Building, Beheshti St, Iran"
        ),
        avatar: Rahnama,
        website: "https://www.rahnemacollege.com/",
        certification: "http://bit.ly/3XZ5NYD",
        finishedyear: "2021",
        year: "2019-2020",

        title: t("Junior UX Designer"),
        school: t("Rahnama Colledge"),
      },
    ],
    [t]
  );

  const filteredData = useMemo(() => {
    let data = EducationData.filter(
      (item) =>
        t(item.title).toLowerCase().includes(searchQuery.toLowerCase()) ||
        t(item.summary).toLowerCase().includes(searchQuery.toLowerCase())
    );
  
    if (sortOrder === 'newest') {
      data = data.sort((a, b) => parseInt(b.finishedyear) - parseInt(a.finishedyear));
    } else if (sortOrder === 'oldest') {
      data = data.sort((a, b) => parseInt(a.finishedyear) - parseInt(b.finishedyear));
    }
  
    return data;
  }, [searchQuery, sortOrder, t, EducationData]);
  
  useEffect(() => {
    setVisibleItems(filteredData.slice(0, 6));
  }, [filteredData]);
  
  const loadMoreItems = useCallback(() => {
    setVisibleItems((prevItems) => {
      const nextItems = EducationData.slice(prevItems.length, prevItems.length + 6);
      const uniqueItems = nextItems.filter(item => !prevItems.some(prevItem => prevItem.id === item.id));
      return [...prevItems, ...uniqueItems];
    });
  }, [EducationData]);
  
  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    console.log("ScrollY:", currentScrollY, "lastScrollY:", lastScrollY);
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
      console.log("Loading more items...");
      loadMoreItems();
    }
    setLastScrollY(currentScrollY);
  }, [lastScrollY, loadMoreItems]);
  
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);
  
 
 
  const handleImageLoad = (id) => {
    setLoadedImages(prevState => ({ ...prevState, [id]: true }));
  };
  
  return (
    <EducationContainer>
      {visibleItems.map((item, index) => (
        
        <Card
          key={item.id}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
        
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
               {!loadedImages[item.id] && <ImagePlaceholder />}
          <Info   onLoad={() => handleImageLoad(item.id)}>
            <TitleContainer>
              <Image src={item.avatar} alt={t(item.title)} />
              <Title>{t(item.title)}</Title>
            </TitleContainer>
            <School>{t(item.school)}</School>
            <Year>{item.year}</Year>
            <Grade>{item.grade}</Grade>
            <Divider />
            <Details>{t(item.details)}</Details>
            <Address>{t(item.address)}</Address>
            <ButtonContainer>
              {item.website && (
                <Button
                  href={item.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("Website")}
                </Button>
              )}
              {item.certification && (
                <Button
                  href={item.certification}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("Certification")}
                </Button>
              )}
            </ButtonContainer>
          </Info>
        </Card>
      ))}
    </EducationContainer>
  );
};

export default Education;

const EducationContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Card = styled(motion.div)`
  background: #1c1c1c;
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  margin: 10px;
  flex: 1 1 calc(33% - 40px);
  padding: 0;
     animation: wave1 3s infinite alternate, wave3 5s infinite alternate;
  color: #fff;

  @media (max-width: 768px) {
    max-width: 90%;
    flex: none;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
`;

const Info = styled.div`
  padding: 20px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
`;

const School = styled.p`
  font-size: 1rem;
  color: #fff;
  margin-bottom: 10px;
`;

const Year = styled.p`
  font-size: 1rem;
  color: #888;
  margin-bottom: 10px;
`;

const Grade = styled.p`
  font-size: 1rem;
  color: #888;
  margin-bottom: 10px;
`;

const Details = styled.p`
  font-size: 1rem;
  color: #fff;
  margin-bottom: 10px;
`;

const Address = styled.p`
  font-size: 1rem;
  color: #fff;
  margin-bottom: 10px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: auto; /* Add this line */
`;

const Button = styled.a`
  background: #01be96;
  color: #fff;
  padding: 10px;
  text-decoration: none;
  border-radius: 5px;
  text-align: center;
  flex: 1;

  &:hover {
    background: #019c7a;
  }
`;
const Divider = styled.div`
  height: 1px;
  background: #01be96;
  margin: 10px 0;
`;
const ImagePlaceholder = styled.div`
  width: 100%;
  height: 100%;
  background-color: #333;
  background-image: linear-gradient(90deg, #333 0px, #444 40px, #333 80px);
  background-size: 200% 100%;
   position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`;
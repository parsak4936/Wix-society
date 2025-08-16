import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

// Images
import Unime from "../../../Assets/Education/Unime.webp";
import IASBS from "../../../Assets/Education/IASBS.webp";
import ZNU from "../../../Assets/Education/ZNU.webp";
import sadra from "../../../Assets/Education/sadra.webp";
import Maktab from "../../../Assets/Education/Maktab.webp";
import Rahnama from "../../../Assets/Education/Rahnama.webp";

const Education = () => {
  const { t } = useTranslation();
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
        title: "Master of Data Science",
        school: "University of Messina",
        grade: "-/100",
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
        title: "Master of AI Engineering",
        school: "IASBS",
        grade: "-/100",
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
        title: "Bachelor of Computer Engineering",
        school: "ZNU",
        grade: "14.44/20",
        details: "",
      },
      {
        id: 4,
        avatar: sadra,
        address: t("72J6+RCP District 2, Qazvin, Qazvin Province"),
        year: "2019-2020",
        finishedyear: "2017",
        title: "Pre-University of Mathematics Science",
        school: "Sadra Highschool",
        grade: "16.73/20",
        details: "",
      },
      {
        id: 5,
        avatar: sadra,
        address: t("72J6+RCP District 2, Qazvin, Qazvin Province"),
        year: "2019-2020",
        finishedyear: "2016",
        title: "Mathematics and Physics Diploma",
        school: "Sadra Highschool",
        grade: "18.24/20",
      },
      {
        id: 6,
        avatar: Maktab,
        address: t("تهران - خیابان آیت‌الله کاشانی - بلوار اباذر"),
        website: "https://maktabkhooneh.org/",
        certification: "https://bit.ly/3nuKrEV",
        finishedyear: "2021",
        year: "2019-2020",
        title: "Mindfullness Skills",
        school: "Maktabkhooneh",
        grade: "70/100",
      },
      {
        id: 7,
        avatar: Maktab,
        address: t("تهران - خیابان آیت‌الله کاشانی - بلوار اباذر"),
        website: "https://maktabkhooneh.org/",
        certification: "http://bit.ly/3ZbYDkc",
        finishedyear: "2021",
        year: "2019-2020",
        title: "Advanced Python Programming",
        school: "Maktabkhooneh",
        grade: "88.7/100",
      },
      {
        id: 8,
        avatar: Maktab,
        certification: "https://bit.ly/3nuKrEV",
        address: t("تهران - خیابان آیت‌الله کاشانی - بلوار اباذر"),
        website: "https://maktabkhooneh.org/",
        title: "Commercial Networking",
        school: "Maktabkhonneh",
        finishedyear: "2021",
        year: "2019-2020",
        grade: "100/100",
      },
      {
        id: 9,
        address: t("Tehran Province, Tehran, Floor -1, Beheshti St, Iran"),
        avatar: Rahnama,
        website: "https://www.rahnemacollege.com/",
        certification: "http://bit.ly/3XZ5NYD",
        finishedyear: "2021",
        year: "2019-2020",
        title: "Junior UX Designer",
        school: "Rahnama Colledge",
      },
    ],
    [t]
  );

  const handleImageLoad = (id) => {
    setLoadedImages((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <EducationContainer>
      {EducationData.map((item, index) => (
        <Card
          key={item.id}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          {!loadedImages[item.id] && <ImagePlaceholder />}
          <Image
            src={item.avatar}
            alt={item.title}
            onLoad={() => handleImageLoad(item.id)}
          />
          <Info>
            <Title>{item.title}</Title>
            <School>{item.school}</School>
            <Year>
              {item.year} - {item.finishedyear}
            </Year>
            {item.grade && <Grade>{item.grade}</Grade>}
            <Divider />
            {item.details && <Details>{item.details}</Details>}
            <Address>{item.address}</Address>
            <ButtonContainer>
              {item.website && (
                <Button href={item.website} target="_blank">
                  {t("Website")}
                </Button>
              )}
              {item.certification && (
                <Button href={item.certification} target="_blank">
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

/* ============ STYLES ============ */

const EducationContainer = styled.div`
  display: grid;
  grid-template-columns: repeat( auto-fit, minmax(280px, 1fr) ); 
  /* minmax smaller so cards shrink more */
  gap: 20px;
  padding: 40px;
  width: 100%;
  box-sizing: border-box;

  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr); /* desktop: 3 cards */
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr); /* tablet: 2 cards */
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr; /* mobile: 1 card */
  }
`;

const Card = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-8px);
  }
`;


const Image = styled.img`
margin-top: 10px; /* smaller margin */
  width: 100%;
  height: auto;
  max-height: 80px;  // or 150px for smaller cards
  object-fit: contain; // prevents cropping
`;


const ImagePlaceholder = styled.div`
  width: 100%;
  height: 150px; /* match image */
  background: #ccc;
  border-bottom: 2px solid #018367;
`;

const Info = styled.div`
  padding: 12px; /* smaller padding */
  color: #fff;
`;

const Title = styled.h2`
  font-size: 1.1rem; /* slightly smaller */
  margin: 8px 0;
`;

const School = styled.h3`
  font-size: 0.95rem;
  color: #ddd;
`;

const Year = styled.p`
  font-size: 0.85rem;
`;

const Grade = styled.p`
  font-size: 0.85rem;
`;

const Divider = styled.hr`
  margin: 10px 0;
  border: 0;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
`;

const Details = styled.p`
  font-size: 0.85rem;
  line-height: 1.3;
`;

const Address = styled.p`
  font-size: 0.75rem;
  color: #aaa;
  margin-top: 8px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 10px;
`;

const Button = styled.a`
  padding: 8px 14px;
  border-radius: 8px;
  background: #018367;
  color: #fff;
  text-decoration: none;
  font-size: 0.85rem;
  transition: background 0.3s;
  &:hover {
    background: #00a37a;
  }
`;

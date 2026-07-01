import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";

// Education images
import Unime from "../../../Assets/Education/Unime.webp";
import IASBS from "../../../Assets/Education/IASBS.webp";
import ZNU from "../../../Assets/Education/ZNU.webp";
import sadra from "../../../Assets/Education/sadra.webp";
import Maktab from "../../../Assets/Education/Maktab.webp";
import Rahnama from "../../../Assets/Education/Rahnama.webp";
import FCRLab from "../../../Assets/Education/FCRLab.webp";

// Work images (reusing project / brand assets until real logos are added)
import BiofeedbackImg from "../../../Assets/Portfolio/projects/Biofeedback.webp";
import TarazImg from "../../../Assets/Portfolio/projects/Taraz.webp";
import DoorImg from "../../../Assets/Portfolio/projects/Door.webp";
import WixloopImg from "../../../Assets/Portfolio/projects/Wixloop.webp";
import BetterWixLogo from "../../../Assets/Logo/Logo1.webp";

const Education = () => {
  const { t } = useTranslation();
  const [loadedImages, setLoadedImages] = useState({});
  const [filter, setFilter] = useState(""); // "" = all, "work", "education"

  const WorkData = useMemo(
    () => [
      {
        id: "w1",
        type: "work",
        avatar: BiofeedbackImg,
        title: t("Research Fellow — SMASH Project"),
        school: t("NISC Lab, University of Messina"),
        year: "2025",
        finishedyear: "Present",
        details: t(
          "Selected for the competitive SMASH research scholarship in Prof. Giorgio Grasso's NISC Lab. I built a modular biofeedback system for VR exposure therapy — completing in three weeks a configuration that had stalled for months, and unblocking three parallel projects at once."
        ),
        address: t("Messina, Italy"),
        website: "https://nisc.unime.it/",
      },
      {
        id: "w2",
        type: "work",
        avatar: FCRLab,
        title: t("Research Intern — FCRLab"),
        school: t("FCRLab, University of Messina"),
        year: "2025",
        finishedyear: "2025",
        details: t(
          "A 75-hour research internship under Prof. Francesco La Rosa, running in parallel to my Master's thesis. I worked on medical image segmentation and an LLM-based recommendation system, building on the same Big Data and deep-learning stack as my thesis."
        ),
        address: t("Messina, Italy"),
        website: "https://fcrlab.unime.it/",
      },
      {
        id: "w3",
        type: "work",
        avatar: BetterWixLogo,
        title: t("Founder & Content Creator — BetterWix"),
        school: t("YouTube & Social Media"),
        year: "2024",
        finishedyear: "Present",
        details: t(
          "A self-improvement YouTube channel built around TTS audiobooks and personal blogs on mental health and growth. I grew it to 3,901 subscribers, around 281,000 lifetime views and 67 hours of watch time, writing, recording and editing every video and using audience analytics to guide content strategy."
        ),
        website: "https://www.youtube.com/@betterwix",
      },
      {
        id: "w4",
        type: "work",
        avatar: TarazImg,
        title: t("UX Researcher & UI Designer — Taraz"),
        school: t("Mobin Etesal Aseman"),
        year: "2021",
        finishedyear: "2022",
        details: t(
          "Started as a two-month university internship and stayed on for a six-month engagement to rebrand the company's flagship app into Taraz. I led UX research, UI design, content management and product maintenance, improving customer satisfaction by around 24%."
        ),
        address: t("Iran"),
        website: "https://taraz.org/",
      },
      {
        id: "w5",
        type: "work",
        avatar: DoorImg,
        title: t("React Native Developer & UI/UX — EpIran"),
        school: t("EpIran Startup"),
        year: "2020",
        finishedyear: "2023",
        details: t(
          "Core team member at the EpIran startup, where I developed the Smart Door Access System — my bachelor's thesis (19.25/20). I led application development, UI/UX and advertising design, and took the project through to a patent application in Iran."
        ),
        address: t("Iran"),
        website: "https://github.com/parsak4936/SmartCamera-app",
      },
      {
        id: "w6",
        type: "work",
        avatar: WixloopImg,
        title: t("Content Creator — WixLoop Gaming"),
        school: t("YouTube"),
        year: "2020",
        finishedyear: "2023",
        details: t(
          "My first YouTube venture — a gaming channel where I recorded and edited sessions with friends, built an archive, and learned the craft of video production with Premiere Pro that later powered BetterWix."
        ),
      },
    ],
    [t]
  );

  const EducationData = useMemo(
    () => [
      {
        id: 1,
        type: "education",
        avatar: Unime,
        address: t("Piazza Pugliatti, 1 - 98122 Messina"),
        website: "https://www.unime.it/",
        year: "2023",
        finishedyear: "2026",
        title: t("Master of Data Science"),
        school: t("University of Messina"),
        grade: "28.89/30",
        thesis: t(
          "Thesis: Scalable Real-Time Hate-Speech Detection — Big Data + Deep Learning with AI agents"
        ),
        details: t(
          "Final-year MSc in Data Science with an economics focus — one exam and the thesis remaining. Coursework in machine learning, statistics, predictive modelling and big-data processing with Kafka and Spark."
        ),
      },
      {
        id: 2,
        type: "education",
        avatar: IASBS,
        address: t("PG44+3C8، زنجان"),
        website: "https://iasbs.ac.ir/",
        year: "2022",
        finishedyear: "2023",
        title: t("Master of AI Engineering"),
        school: t("IASBS"),
        grade: "-/100",
        details: t(
          "I withdrew from this university due to moving abroad to work on my senior thesis and research on communication and ethical frameworks in artificial intelligence communities."
        ),
      },
      {
        id: 3,
        type: "education",
        avatar: ZNU,
        address: t("M9PX+FX7, Zanjan, Zanjan Province, Iran"),
        website: "www.znu.ac.ir",
        year: "2017",
        finishedyear: "2022",
        thesis: t("Thesis: Smart Door Access System (19.25/20)"),
        title: t("Bachelor of Computer Engineering"),
        school: t("ZNU"),
        grade: "14.44/20",
        details: "",
      },
      {
        id: 4,
        type: "education",
        avatar: sadra,
        address: t("72J6+RCP District 2, Qazvin, Qazvin Province"),
        year: "2016",
        finishedyear: "2017",
        title: t("Pre-University of Mathematics Science"),
        school: t("Sadra Highschool"),
        grade: "16.73/20",
        details: "",
      },
      {
        id: 5,
        type: "education",
        avatar: sadra,
        address: t("72J6+RCP District 2, Qazvin, Qazvin Province"),
        year: "2014",
        finishedyear: "2016",
        title: t("Mathematics and Physics Diploma"),
        school: t("Sadra Highschool"),
        grade: "18.24/20",
      },
      {
        id: 6,
        type: "education",
        avatar: Maktab,
        address: t("تهران - خیابان آیت‌الله کاشانی - بلوار اباذر"),
        website: "https://maktabkhooneh.org/",
        certification: "https://bit.ly/3nuKrEV",
        finishedyear: "2021",
        year: "",
        title: t("Mindfullness Skills"),
        school: t("Maktabkhooneh"),
        grade: "70/100",
      },
      {
        id: 7,
        type: "education",
        avatar: Maktab,
        address: t("تهران - خیابان آیت‌الله کاشانی - بلوار اباذر"),
        website: "https://maktabkhooneh.org/",
        certification: "http://bit.ly/3ZbYDkc",
        finishedyear: "2021",
        year: "",
        title: t("Advanced Python Programming"),
        school: t("Maktabkhooneh"),
        grade: "88.7/100",
      },
      {
        id: 8,
        type: "education",
        avatar: Maktab,
        certification: "https://bit.ly/3nuKrEV",
        address: t("تهران - خیابان آیت‌الله کاشانی - بلوار اباذر"),
        website: "https://maktabkhooneh.org/",
        title: t("Commercial Networking"),
        school: t("Maktabkhonneh"),
        finishedyear: "2021",
        year: "",
        grade: "100/100",
      },
      {
        id: 9,
        type: "education",
        address: t("Tehran Province, Tehran, Floor -1, Beheshti St, Iran"),
        avatar: Rahnama,
        website: "https://www.rahnemacollege.com/",
        certification: "http://bit.ly/3XZ5NYD",
        finishedyear: "2021",
        year: "",
        title: t("Junior UX Designer"),
        school: t("Rahnama Colledge"),
      },
    ],
    [t]
  );

  const items = useMemo(() => {
    const all = [...WorkData, ...EducationData];
    return filter ? all.filter((i) => i.type === filter) : all;
  }, [WorkData, EducationData, filter]);

  const toggle = (value) => setFilter((prev) => (prev === value ? "" : value));

  const handleImageLoad = (id) => {
    setLoadedImages((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <Wrapper>
      <Header>
        <TitleContainer>
          <span className="green">{t("Experriences")}</span>
          <h1>{t("Explore my Education and Work Experiences")}</h1>
        </TitleContainer>
        <Tabs>
          <Tab active={filter === "work"} onClick={() => toggle("work")}>
            <FaBriefcase /> {t("Work")}
          </Tab>
          <Tab
            active={filter === "education"}
            onClick={() => toggle("education")}
          >
            <FaGraduationCap /> {t("Education")}
          </Tab>
        </Tabs>
      </Header>

      <EducationContainer>
        {items.map((item, index) => (
          <Card
            key={item.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: (index % 6) * 0.08 }}
          >
            <TypeTag $work={item.type === "work"}>
              {item.type === "work" ? t("Work") : t("Education")}
            </TypeTag>
            {!loadedImages[item.id] && <ImagePlaceholder />}
            <Image
              src={item.avatar}
              alt={item.title}
              loading="lazy"
              decoding="async"
              onLoad={() => handleImageLoad(item.id)}
            />
            <Info>
              <Title>{item.title}</Title>
              <School>{item.school}</School>
              <Year>
                {item.year ? `${item.year} - ` : ""}
                {t(item.finishedyear)}
              </Year>
              {item.grade && <Grade>{item.grade}</Grade>}
              {item.thesis && <Thesis>{item.thesis}</Thesis>}
              <Divider />
              {item.details && <Details>{item.details}</Details>}
              {item.address && <Address>{item.address}</Address>}
              <ButtonContainer>
                {item.website && (
                  <Button href={item.website} target="_blank" rel="noreferrer">
                    {t("Website")}
                  </Button>
                )}
                {item.certification && (
                  <Button
                    href={item.certification}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {t("Certification")}
                  </Button>
                )}
              </ButtonContainer>
            </Info>
          </Card>
        ))}
      </EducationContainer>
    </Wrapper>
  );
};

export default Education;

/* ============ STYLES ============ */

const Wrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
`;

const Header = styled.div`
  text-align: center;
  padding: 1rem;
`;

const TitleContainer = styled.div`
  text-align: center;
  margin-bottom: 1rem;

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

const Tabs = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
`;

const Tab = styled.button`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  border-radius: 10px;
  background: ${(props) => (props.active ? "#018367" : "none")};
  color: #fff;
  padding: 0.3rem 0.9rem;
  font-size: 1.05rem;
  cursor: pointer;
  border: 1px solid ${(props) => (props.active ? "#018367" : "#fff")};
  animation: ${(props) => (props.active ? "wave1 3s infinite alternate" : "none")};
  transition: background 0.3s, border-color 0.3s;
  &:focus {
    outline: none;
  }
  &:hover {
    border-color: #018367;
  }
`;

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
  position: relative;
  background: linear-gradient(159deg, rgba(45, 45, 58, 0.92) 0%, rgba(28, 28, 35, 0.92) 100%);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  content-visibility: auto;
  contain-intrinsic-size: 380px;
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-8px);
  }
`;

const TypeTag = styled.span`
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 2;
  padding: 2px 10px;
  border-radius: 20px;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: #fff;
  background: ${(props) => (props.$work ? "#018367" : "rgba(0,0,0,0.55)")};
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

const Thesis = styled.p`
  font-size: 0.8rem;
  color: #9fe3cf;
  font-style: italic;
  margin: 6px 0 0;
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

import React, { useState, useEffect, useCallback, useMemo } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import BetterWixImg from "../../../Assets/Portfolio/projects/Wixloop.webp";
 
import Door from "../../../Assets/Portfolio/projects/Door.webp";
 import Janama from "../../../Assets/Portfolio/projects/Janama2.webp";

import Koj from "../../../Assets/Portfolio/projects/Koj.webp";
import Darya from "../../../Assets/Portfolio/projects/Darya.webp";

import Taraz from "../../../Assets/Portfolio/projects/Taraz.webp";
import BiofeedbackImg from "../../../Assets/Portfolio/projects/Biofeedback.webp";
import HateSpeechImg from "../../../Assets/Portfolio/projects/HateSpeech.webp";
import SimaImg from "../../../Assets/Portfolio/projects/SIMA.webp";
import BatImg from "../../../Assets/Portfolio/projects/BatAlgorithm.webp";
import DiaryAgentImg from "../../../Assets/Portfolio/projects/DiaryAgent.webp";

const Projects = ({ searchQuery, sortOrder }) => {
  const { t } = useTranslation();
  const [visibleItems, setVisibleItems] = useState([]);
  const [lastScrollY, setLastScrollY] = useState(0);

  const ProjectsData = useMemo(
    () => [
      {
        id: 7,
        image: HateSpeechImg,
        title: t("Real-Time Hate-Speech Detection"),
        role: t("Data Science / Big Data / NLP"),
        description: t(
          "My Master's thesis: a scalable, real-time pipeline that detects hateful and offensive speech in live social-media streams such as YouTube and X. It pairs a Big Data stack — Apache Kafka, Apache Spark, Elasticsearch and Kibana — with a fine-tuned DistilBERT classifier (~80% accuracy) and automated AI agents that refine the results. Trained on roughly 53,000 samples consolidated from multiple research datasets and fully containerised with Docker."
        ),
        startDate: t("2025"),
        endDate: t("2026"),
        Year: t("2026"),
        link: "https://github.com/parsak4936/Real-Time-Hate-Speech-Detection",
      },
      {
        id: 8,
        image: BiofeedbackImg,
        title: t("Biofeedback"),
        role: t("Python / Data Science / VR"),
        description: t(
          "A modular real-time biofeedback platform for VR exposure therapy. Electrodermal activity, heart rate and heart-rate variability are streamed from a PLUX biosignals device, fused into a live stress index, and used to drive a Unity VR scene over UDP. Originally built for acrophobia, it is now designed as a modular system that adapts to multiple anxiety scenarios — including spider phobia and public-speaking exposure. Built in Python with PyQt5, NeuroKit2 and Lab Streaming Layer, and developed in the NISC Lab at the University of Messina."
        ),
        startDate: t("2025"),
        endDate: t("Current"),
        Year: t("2026"),
        link: "https://github.com/parsak4936/Biofeedback",
      },
      {
        id: 9,
        image: DiaryAgentImg,
        title: t("Diary Agent"),
        role: t("LLM / AI Agent"),
        description: t(
          "An AI agent that reads and analyses my personal diary archive, turning years of private journaling into reflective insight — surfacing emotional patterns and recurring themes. Built around large language models with a retrieval pipeline over the entries, it can also generate imagery from diary passages (some of which appear in the Photos section). It is the companion to the upcoming Diary archive on this site."
        ),
        startDate: t("2025"),
        endDate: t("Current"),
        Year: t("2026"),
      },
      {
        id: 10,
        image: SimaImg,
        title: t("SIMA Data Extraction"),
        role: t("Data Mining / Python"),
        description: t(
          "SIMA is a data-mining project that scrapes and extracts data from multiple APIs to find research works and organise them into taxonomies. Built in collaboration with the Department of Economics and two professors at the University of Messina, it produces a dataset capturing the codes, contexts and research fields of individual researchers — delivering a finalised set of 821 classified papers."
        ),
        startDate: t("2024"),
        endDate: t("2024"),
        Year: t("2024"),
        link: "https://github.com/parsak4936/SIMA-Data-Extraction-Project",
      },
      {
        id: 11,
        image: BatImg,
        title: t("Bat Algorithm Optimization"),
        role: t("Algorithms / Python"),
        description: t(
          "A comparative study of metaheuristic optimisation, pitting a Genetic Algorithm against swarm intelligence (a Standard Bat Algorithm and a Discrete Memetic Bat Algorithm) across three NP-hard problems: N-Queens, 0/1 Knapsack and the Travelling Salesman Problem. It introduces custom transfer mechanisms and local-search operators so continuous swarm algorithms can handle discrete spaces. Written from scratch in Python — and the project I built starting from almost no formal programming background."
        ),
        startDate: t("2024"),
        endDate: t("2024"),
        Year: t("2024"),
        link: "https://github.com/parsak4936/-Bat-algorithm-Optimization",
      },
      {
        id: 1,
        image: BetterWixImg,
        title: t("BetterWix"),
        role: t("React / i18n / Leaflet"),
        description: t(
          "BetterWix is my personal portfolio website — a multi-language showcase of my journey across art, design, development and data science. Built in React, it features an interactive Leaflet travel map, a searchable portfolio of projects, designs and writings, background audio, smooth animations, and full localization in English, Italian, Persian and Russian. Conceived as a living self-introduction, it is steadily evolving into a personal brand platform."
        ),
        startDate: t("May 2024"),
        endDate: t("End of my time"),
        Year: t("2024"),
        link: "https://betterwix.netlify.app/",
      },
      {
        id: 2,
        image: Janama,
        title: t("JanmaTafsir"),
        description: t(
          "JanmaTafsir is an innovative platform designed to streamline the judicial process within the country's legal system. By focusing on cases related to agricultural and non-agricultural land disputes, this platform aims to prevent simple or clear-cut cases from clogging court schedules. Users can specify the location of the land, upload relevant documents, and mutually select an expert to assess the situation. The expert's findings are then published on the website. If the opinions of both experts align, the case proceeds to the next stages; if not, it is referred to court. JanmaTafsir enhances efficiency, reduces courtroom congestion, and ensures swift, reliable resolutions."
        ),
        startDate: t("March 8, 2022"),
        endDate: t("July 10, 2022"),
        Year: t("2022"),
        role: t("React JS developer / UI UX designer"),
        link: "https://github.com/parsak4936/JanmaTafsir.git",
      },
      {
        id: 3,
        image: Door,
        title: t("Smart Door Access System"),
        description: t(
          "My bachelor's thesis project (graded 19.25/20), developed with the EpIran startup team. The system uses facial-recognition AI to identify authorised people and unlock a door — even when the person is wearing a mask or has a facial injury. A companion mobile app manages members, controls access remotely, and logs every entry alongside the latest capture used to open the door. Built with React Native on low-cost hardware (Raspberry Pi and a Kinect Xbox 360 camera), the project was taken through to a patent application in Iran."
        ),
        startDate: t("Nov 2022"),
        endDate: t("Sep 2023"),
        Year: t("2023"),
        role: t("React Native Developer / UI UX designer / Product Manager"),
        link: "https://github.com/parsak4936/SmartCamera-app.git",
      },
      {
        id: 4,
        image: Koj,
        title: t("NearNow"),
        Year: t("2022"),
        description: t(
          "NearNow is an innovative app designed to eliminate the uncertainty of waiting. Whether you are expecting a postal package, tracking an online purchase, or waiting for a friend or a loved one, this app shows the real-time location of both parties simultaneously. Utilizing signal towers, it even works offline to provide continuous tracking. Once both parties accept the request, they join a group where their locations are tracked until they reach the destination. This way, you can estimate the arrival time accurately, preventing situations like ghosting or losing track of a package, as you always know their current location."
        ),
        startDate: t("May, 2022"),
        endDate: t("Sep, 2022"),
        role: t("Website Developer / UI UX designer"),
        link: "https://github.com/parsak4936/kojaii-webPage.git",
      },
      {
        id: 5,
        image: Taraz,
        title: t("Taraz"),
        description: t(
          "Taraaz is an app designed to assist students preparing for the national university entrance exam. It offers planning tools, academic counseling, and competitive features to enhance their study experience. Counselors can add their students to personalized groups and create tailored study plans. With just a few clicks, students can track their progress, compare their current performance with previous weeks, and monitor changes in their exam scores and rankings. For those without a counselor, the app allows them to choose from a pool of advisors and join the competitive arena."
        ),
        startDate: t("Sep, 2021"),
        endDate: t("May, 2022"),
        Year: t("2022"),
        role: t("UI/UX Designer and product manager"),
        link: "https://taraz.org/",
      },
      {
        id: 6,
        image: Darya,
        title: t("DaryaBuildings"),
        description: t(
          "DaryaBuildings is a website designed for selecting and customizing your dream home. It offers investment opportunities and allows for personalization of homes under construction by choosing building materials. Users can view both completed and under-construction homes. For completed homes, users can select the desired unit, schedule a meeting, and proceed with the purchase in person. For pre-purchase, users can customize the building materials and desired changes, receive a receipt, and bring it to the meeting along with any additional payment, then wait for their dream home to be built."
        ),
        startDate: t("June 12, 2022"),
        endDate: t("July 12, 2022"),
        role: t("Website Developer"),
        link: "https://www.daryabuildings.com/",
      }
    ],
    [t]
  );

  useEffect(() => {
    let filteredData = ProjectsData.filter(
      (item) =>
        t(item.title).toLowerCase().includes(searchQuery.toLowerCase()) ||
        t(item.description).toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (sortOrder === "newest") {
      filteredData = filteredData.sort(
        (a, b) => parseInt(b.Year) - parseInt(a.Year)
      );
    } else if (sortOrder === "oldest") {
      filteredData = filteredData.sort(
        (a, b) => parseInt(a.Year) - parseInt(b.Year)
      );
    }

    setVisibleItems(filteredData.slice(0, 6));
  }, [searchQuery, sortOrder, t, ProjectsData]);

  const loadMoreItems = useCallback(() => {
    setVisibleItems((prevItems) => [
      ...prevItems,
      ...ProjectsData.slice(prevItems.length, prevItems.length + 6),
    ]);
  }, [ProjectsData]);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY) {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 50
      ) {
        loadMoreItems();
      }
    }
    setLastScrollY(currentScrollY);
  }, [lastScrollY, loadMoreItems]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const handleReadMore = (index) => {
    setVisibleItems((prevItems) =>
      prevItems.map((item, i) =>
        i === index ? { ...item, expanded: !item.expanded } : item
      )
    );
  };

  return (
    <ProjectsContainer>
      <AnimatePresence>
        {visibleItems.map((item, index) => (
          <ProjectCard
            key={item.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ProjectImage src={item.image} alt={t(item.title)} loading="lazy" decoding="async" />
            <ProjectContent>
              <ProjectHeader>
                <ProjectTitle>{t(item.title)}</ProjectTitle>
                {item.link ? (
                  <ProjectLink href={item.link} target="_blank" rel="noreferrer">
                    <p>{item.Year}</p>
                  </ProjectLink>
                ) : (
                  <ProjectLink as="span">
                    <p>{item.Year}</p>
                  </ProjectLink>
                )}
              </ProjectHeader>
              <ProjectDates>
                {t("Start")}: {item.startDate} - {t("End")}: {item.endDate}
              </ProjectDates>
              <Divider />
              <ProjectStats>
                <StatItem>
                  <Tag>{item.role}</Tag>
                </StatItem>
              </ProjectStats>
              <ProjectDescription>
                <AnimatePresence>
                  {item.expanded ? (
                    <motion.div
                      key="expanded"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {t(item.description)}
                    </motion.div>
                  ) : (
                    <motion.div
                      key="collapsed"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {`${t(item.description).slice(0, 100)}...`}
                    </motion.div>
                  )}
                </AnimatePresence>
              </ProjectDescription>
            </ProjectContent>
            <ReadMoreButtonContainer>
              <ReadMoreButton onClick={() => handleReadMore(index)}>
                {item.expanded ? t("Read Less") : t("Read More")}
              </ReadMoreButton>
            </ReadMoreButtonContainer>
          </ProjectCard>
        ))}
      </AnimatePresence>
    </ProjectsContainer>
  );
};

export default Projects;

const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 10px;
`;

const ProjectCard = styled(motion.div)`
  background: #1c1c1c;
  border-radius: 10px;
  overflow: hidden;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ProjectContent = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const ProjectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProjectTitle = styled.h3`
  margin: 0;
  font-size: 1.5rem;
  color: #fff;
`;

const ProjectLink = styled.a`
  color: #018367;
  font-size: 1.2rem;
  &:hover {
    color: #fff;
  }
`;

const ProjectDescription = styled.div`
  font-size: 1rem;
  color: #ccc;
  margin: 10px 0;
  flex: 1;
`;

const ReadMoreButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px 0;
  background: #1c1c1c;
`;

const ReadMoreButton = styled.button`
  background: #018367;
  color: #fff;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    background: #019c7a;
  }
`;

const ProjectDates = styled.div`
  font-size: 0.9rem;
  color: #888;
  margin-bottom: 10px;
`;

const Divider = styled.div`
  height: 1px;
  background: #018367;
  margin: 10px 0;
`;

const ProjectStats = styled.div`
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const StatItem = styled.div`
  font-size: 0.9rem;
  color: #888;
`;

const Tag = styled.span`
  background: #018367;
  color: #fff;
  padding: 5px 10px;
  border-radius: 15px;
  font-size: 0.8rem;
  display: inline-block;
`;

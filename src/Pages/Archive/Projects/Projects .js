import React, { useState, useEffect, useCallback, useMemo } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import Image1 from "../../../Assets/backgrounds/Header5.png";
import Image2 from "../../../Assets/Profile/Parsa.jpg";
import Image3 from "../../../Assets/Profile/WixProfile2.jpeg";

const Projects = ({ searchQuery, sortOrder }) => {
  const { t } = useTranslation();
  const [visibleItems, setVisibleItems] = useState([]);
  const [lastScrollY, setLastScrollY] = useState(0);

  const ProjectsData = useMemo(
    () => [
      {
        id: 1,
        image: Image1,
        title: t("WixLoop"),
        role: t("React JS"),
        description: t(
          "Wixloop is my personal website, designed for business and dating purposes. It serves as a comprehensive introduction to myself, showcasing my skills, works, and archives. Visitors can explore my programming abilities, portfolio, travel stories, projects I have worked on, contact information, personal and professional interests, as well as my education and work experience. While its current function is solely for self-introduction, the future vision for this website is to evolve into a business platform."
        ),
        startDate: t("May 2024"),
        endDate: t("End of my time"),
        Year: t("2024"),
        link: "https://wix-society.netlify.app/",
      },
      {
        id: 2,
        image: Image2,
        title: t("JanamaTasvir"),
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
        image: Image3,
        title: t("DoorMaster"),
        description: t(
          "The DoorMaster project is a team initiative that integrates image processing, a mobile application, and hardware. The goal was to create the most intelligent camera at the lowest cost, capable of unlocking doors even when the person is wearing a mask or has a facial injury. This process was powered by artificial intelligence. A mobile app was developed to manage authorized individuals, allowing users to unlock the door via their phone, control access, and monitor entry and exit logs along with the latest image used by the system to unlock the door. The project utilized Raspberry Pi and Kinect Xbox 360 camera."
        ),
        startDate: t("Nov 2022"),
        endDate: t("Sep 2023"),
        Year: t("2023"),
        role: t("React Native Developer / UI UX designer / Product Manager"),
        link: "https://github.com/parsak4936/SmartCamera-app.git",
      },
      {
        id: 4,
        image: Image3,
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
        image: Image3,
        title: t("Taraz"),
        description: t(
          "Taraaz is an app designed to assist students preparing for the national university entrance exam. It offers planning tools, academic counseling, and competitive features to enhance their study experience. Counselors can add their students to personalized groups and create tailored study plans. With just a few clicks, students can track their progress, compare their current performance with previous weeks, and monitor changes in their exam scores and rankings. For those without a counselor, the app allows them to choose from a pool of advisors and join the competitive arena."
        ),
        startDate: t("Sep, 2021"),
        endDate: t("May, 2022"),
        Year: t("2022"),
        role: t("UI/UX Designer and product manager"),
        link: "https://tarazapp.com/",
      },
      {
        id: 6,
        image: Image3,
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
            <ProjectImage src={item.image} alt={t(item.title)} />
            <ProjectContent>
              <ProjectHeader>
                <ProjectTitle>{t(item.title)}</ProjectTitle>
                <ProjectLink href={item.link} target="_blank">
                  <p>{item.Year}</p>
                </ProjectLink>
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
       animation: wave1 3s infinite alternate, wave3 5s infinite alternate;

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
  color: #01be96;
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
  background: #01be96;
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
  background: #01be96;
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
  background: #01be96;
  color: #fff;
  padding: 5px 10px;
  border-radius: 15px;
  font-size: 0.8rem;
  display: inline-block;
`;

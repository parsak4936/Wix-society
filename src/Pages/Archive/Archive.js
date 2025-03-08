import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaPen,
  FaCamera,
  FaProjectDiagram,
  FaSearch,
  FaSortAmountDown,
  FaSortAmountUp,
  FaGraduationCap,
} from "react-icons/fa";
import styled from "styled-components";
import Writing from "./Writings/Writing";
import Photos from "./Photoes/Photos";
import Projects from "./Projects/Projects ";
import headervideo from "../../Assets/backgrounds/Header6.mp4";
import { useTranslation } from "react-i18next";
import useLanguageChange from "../../Context/useLanguageChange";
import Education from "./Education/Education";
import Design from "./Designs/Design";
import { MdDesignServices } from "react-icons/md";

const tabs = [
  { name: "Writings", icon: <FaPen /> },
  { name: "Photos", icon: <FaCamera /> },
  { name: "Projects", icon: <FaProjectDiagram /> },
  { name: "Education", icon: <FaGraduationCap /> },
  { name: "Design", icon: <MdDesignServices /> },
];

const TabContent = ({ currentTab, searchQuery, sortOrder }) => {
  const { t } = useTranslation();

  switch (currentTab) {
    case t("Writings"):
      return <Writing searchQuery={searchQuery} sortOrder={sortOrder} />;
    case t("Photos"):
      return <Photos searchQuery={searchQuery} sortOrder={sortOrder} />;
    case t("Education"):
      return <Education searchQuery={searchQuery} sortOrder={sortOrder} />;
    case t("Design"):
      return <Design sortOrder={sortOrder} />;
    case t("Projects"):
      return <Projects searchQuery={searchQuery} sortOrder={sortOrder} />;
    default:
      return null;
  }
};

const ArchivePage = () => {
  const { t } = useTranslation();
  const [currentTab, setCurrentTab] = useState(t("Writings"));
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("newest");

  useLanguageChange(() => {
    setCurrentTab(t("Writings"));
  });

  const toggleSortOrder = () => {
    setSortOrder((prevSortOrder) =>
      prevSortOrder === "newest" ? "oldest" : "newest"
    );
  };

  return (
    <>
      <ArchiveVideoWrapper>
        <ArchiveOverlay />
        <video
          id="background-video"
          loop
          autoPlay
          muted
          onEnded={(e) => e.target.play()}
        >
          <source src={headervideo} type="video/mp4" />
          {t("Your browser does not support the video tag.")}
        </video>
        <ArchiveHeaderWrapper>
          <TitleContainer>
            <span className="green">{t("Archive")}</span>
            <h1>{t("All the things I have done")}</h1>
          </TitleContainer>
          <ArchiveControlBar>
            <ArchiveTabContainer>
              {tabs.map((tab) => (
                <ArchiveTab
                  key={tab.name}
                  isActive={currentTab === t(tab.name)}
                  onClick={() => setCurrentTab(t(tab.name))}
                >
                  {tab.icon} {t(tab.name)}
                </ArchiveTab>
              ))}
            </ArchiveTabContainer>
            <ArchiveSearchAndSort>
              <ArchiveSearchBar>
                 <FaSearch />
                <input
  type="text"
  placeholder={t("Search")}
  value={searchQuery}
  onChange={(e) => setSearchQuery(e.target.value)}
  aria-label={t("Search")}
/>


              </ArchiveSearchBar>
              <ArchiveSortButton onClick={toggleSortOrder}>
                {sortOrder === "newest" ? (
                  <FaSortAmountDown />
                ) : (
                  <FaSortAmountUp />
                )}
              </ArchiveSortButton>
            </ArchiveSearchAndSort>
          </ArchiveControlBar>
          <ArchiveContent>
            <motion.div
              key={currentTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <TabContent
                currentTab={currentTab}
                searchQuery={searchQuery}
                sortOrder={sortOrder}
              />
            </motion.div>
          </ArchiveContent>
        </ArchiveHeaderWrapper>
      </ArchiveVideoWrapper>
    </>
  );
};

export default ArchivePage;

// styled-components definitions remain unchanged

const TitleContainer = styled.div`
  text-align: center;

  margin-bottom: 3rem;
  margin-top: 5rem;
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

const ArchiveControlBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  background-color: #1c1c1c;
  border-radius: 10px;
  margin-bottom: 20px;
  width: 100%;
  max-width: 1200px;
  animation: wave44 3s infinite alternate;

  @media (min-width: 769px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const ArchiveSearchAndSort = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
  width: 100%;

  @media (min-width: 769px) {
    width: auto;
    margin-top: 0;
  }
`;

const ArchiveSearchBar = styled.div`
  display: flex;
  align-items: center;
  background-color: #2c2c2c;
  padding: 5px 10px;
  border-radius: 5px;
  flex: 1;

  input {
    background: none;
    border: none;
    color: white;
    margin-left: 5px;
    outline: none;
    width: 100%;
  }

  svg {
    color: white;
  }
`;

const ArchiveTabContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const ArchiveTab = styled.div`
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  background-color: ${({ isActive }) => (isActive ? "#018367" : "#333")};
  color: ${({ isActive }) => (isActive ? "#fff" : "#888")};
  animation: ${({ isActive }) =>
    isActive ? "wave44 3s infinite alternate" : "none"};

  display: flex;
  align-items: center;
  gap: 5px;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #018367;
    color: #fff;
  }

  @media (max-width: 768px) {
    flex: 1 1 auto;
    justify-content: center;
  }
`;

const ArchiveSortButton = styled.div`
  display: flex;
  align-items: center;
  background-color: #2c2c2c;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  color: white;

  @media (max-width: 768px) {
    justify-content: center;
    width: 40px;
    padding: 5px;
  }

  svg {
    margin-right: 5px;

    @media (max-width: 768px) {
      margin-right: 0;
    }
  }
`;

const ArchiveContent = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const ArchiveVideoWrapper = styled.div`
  overflow: hidden;
  position: relative;
  z-index: 0;
  flex: 1;
`;

const ArchiveOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1;
`;

const ArchiveHeaderWrapper = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  @media (max-width: 850px) {
    padding: 10px;
  }

  @media (max-width: 450px) {
    padding: 5px;
    margin-bottom: 30%;
  }
`;

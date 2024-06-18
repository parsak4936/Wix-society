import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLink } from 'react-icons/fa';
import ProjectData from './ProjectData';
import { useTranslation } from 'react-i18next';
  
const Projects = ({ searchQuery, sortOrder }) => {
  const { t } = useTranslation();
  const [visibleItems, setVisibleItems] = useState([]);
  const [lastScrollY, setLastScrollY] = useState(0);
  const projectData = ProjectData();

  useEffect(() => {
    let filteredData = projectData.filter(item =>
      t(item.title)?.toLowerCase().includes(searchQuery.toLowerCase()) || 
      t(item.description)?.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (sortOrder === 'newest') {
      filteredData = filteredData.sort((a, b) => new Date(b.startDate) - new Date(a.startDate));
    } else if (sortOrder === 'oldest') {
      filteredData = filteredData.sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
    }

    setVisibleItems(filteredData.slice(0, 6));
  }, [searchQuery, sortOrder, t,projectData]);

  const loadMoreItems = useCallback(() => {
    setVisibleItems((prevItems) => [
      ...prevItems,
      ...projectData.slice(prevItems.length, prevItems.length + 6),
    ]);
  }, [projectData]);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY) {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
        loadMoreItems();
      }
    }
    setLastScrollY(currentScrollY);
  }, [lastScrollY, loadMoreItems]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

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
                  <FaLink />
                </ProjectLink>
              </ProjectHeader>
              <ProjectDescription>{t(item.description)}</ProjectDescription>
              <ProjectDates>
                <StartDate>{t("Start Date")}: {item.startDate}</StartDate>
                <EndDate>{t("End Date")}: {item.endDate}</EndDate>
              </ProjectDates>
              <ProjectStats>
                <StatItem>
                  <StatLabel>{t("Total Fundraising")}:</StatLabel>
                  <StatValue>${item.totalFundraising.toLocaleString()}</StatValue>
                </StatItem>
                <StatItem>
                  <StatLabel>{t("Total Funds Raised")}:</StatLabel>
                  <StatValue>${item.totalFundsRaised.toLocaleString()}/{item.totalFundraising.toLocaleString()}</StatValue>
                </StatItem>
                <StatItem>
                  <StatLabel>{t("Max Allocation")}:</StatLabel>
                  <StatValue>${item.maxAllocation}</StatValue>
                </StatItem>
                <StatItem>
                  <StatLabel>{t("Number of People Funded")}:</StatLabel>
                  <StatValue>{item.numberOfPeopleFunded.toLocaleString()}</StatValue>
                </StatItem>
              </ProjectStats>
            </ProjectContent>
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
  animation: wave44 3s infinite alternate;
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
  padding: 20px;
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

const ProjectDescription = styled.p`
  font-size: 1rem;
  color: #ccc;
  margin: 10px 0;
`;

const ProjectDates = styled.div`
  font-size: 0.9rem;
  color: #888;
`;

const StartDate = styled.div`
  margin-bottom: 5px;
`;

const EndDate = styled.div``;

const ProjectStats = styled.div`
  margin-top: 10px;
`;

const StatItem = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  color: #888;
  margin: 5px 0;
`;

const StatLabel = styled.div``;

const StatValue = styled.div`
  font-weight: bold;
  color: #fff;
`;

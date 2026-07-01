import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  FaPalette,
  FaPenNib,
  FaObjectGroup,
  FaReact,
  FaChartLine,
  FaMicrochip,
} from "react-icons/fa";

const steps = [
  { icon: FaPalette, title: "Art", caption: "Where it began — drawing, painting, imagination." },
  { icon: FaPenNib, title: "Graphic Design", caption: "Turning raw ideas into visual language." },
  { icon: FaObjectGroup, title: "UI / UX Design", caption: "Designing experiences, not just screens." },
  { icon: FaReact, title: "Web Development", caption: "Bringing designs to life with React." },
  { icon: FaChartLine, title: "Data Science", caption: "Finding the stories hidden in data." },
  {
    icon: FaMicrochip,
    title: "Embedded & Signals",
    caption: "Now: biosignals, hardware and real-time systems.",
  },
];

const Journey = () => {
  const { t } = useTranslation();

  return (
    <Section>
      <TitleContainer>
        <span className="green">{t("My Journey")}</span>
        <h1>{t("From art to algorithms — one continuous thread")}</h1>
      </TitleContainer>

      <Timeline>
        <Track
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
        />
        {steps.map((step, i) => (
          <Step
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
          >
            <IconCircle whileHover={{ scale: 1.12, rotate: 6 }}>
              <step.icon />
            </IconCircle>
            <StepIndex>{`0${i + 1}`}</StepIndex>
            <StepTitle>{t(step.title)}</StepTitle>
            <StepCaption>{t(step.caption)}</StepCaption>
          </Step>
        ))}
      </Timeline>
    </Section>
  );
};

export default Journey;

/* ---------- STYLES ---------- */

const Section = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 5rem 0 4rem;
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
    color: #fff;
  }
`;

const Timeline = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  margin: 2.5rem auto 0;
  padding: 0 1rem;

  @media (max-width: 860px) {
    flex-direction: column;
    align-items: center;
    gap: 2.2rem;
  }
`;

const Track = styled(motion.div)`
  position: absolute;
  top: 32px;
  left: 8%;
  right: 8%;
  height: 3px;
  transform-origin: left center;
  background: linear-gradient(90deg, #018367, #9fe3cf);
  z-index: 0;

  @media (max-width: 860px) {
    display: none;
  }
`;

const Step = styled(motion.div)`
  position: relative;
  z-index: 1;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 180px;
`;

const IconCircle = styled(motion.div)`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: #1c1c1c;
  border: 3px solid #018367;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  color: #018367;
  box-shadow: 0 6px 18px rgba(1, 131, 103, 0.25);
`;

const StepIndex = styled.span`
  margin-top: 0.7rem;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 1px;
  color: #018367;
`;

const StepTitle = styled.h3`
  margin: 0.2rem 0 0.3rem;
  font-size: 1.05rem;
  color: #fff;
`;

const StepCaption = styled.p`
  margin: 0;
  font-size: 0.82rem;
  line-height: 1.4;
  color: #bbb;
`;

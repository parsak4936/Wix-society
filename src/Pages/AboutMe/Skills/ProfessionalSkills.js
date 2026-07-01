import {
  FaPython,
  FaFigma,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaGithub,
  FaSketch,
  FaTable,
  FaCalculator,
  FaBrain,
  FaBook,
  FaChartLine,
  FaChartBar,
  FaChartArea,
  FaRobot,
  FaComments,
  FaStream,
  FaBolt,
  FaSearch,
  FaDocker,
  FaDatabase,
  FaServer,
  FaFire,
  FaSpider,
  FaMobileAlt,
  FaWaveSquare,
  FaHeartbeat,
  FaMicrochip,
  FaPaintBrush,
} from "react-icons/fa";
import {
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobeaftereffects,
  SiAdobepremierepro,
} from "react-icons/si";
import { DiJqueryLogo } from "react-icons/di";

export const ProfessionalSkills = [
  // Programming & Web
  { icon: FaPython, name: "Python", level: "Expert" },
  { icon: FaHtml5, name: "HTML", level: "Expert" },
  { icon: FaCss3Alt, name: "CSS", level: "Expert" },
  { icon: FaJsSquare, name: "JavaScript", level: "Expert" },
  { icon: DiJqueryLogo, name: "jQuery", level: "Intermediate" },
  { icon: FaReact, name: "ReactJS", level: "Advanced" },
  { icon: FaMobileAlt, name: "React Native", level: "Advanced" },
  { icon: FaServer, name: "REST APIs", level: "Advanced" },
  { icon: FaFire, name: "Firebase", level: "Intermediate" },
  { icon: FaGithub, name: "GitHub", level: "Advanced" },

  // Data Science & Machine Learning
  { icon: FaTable, name: "Pandas", level: "Advanced" },
  { icon: FaCalculator, name: "NumPy", level: "Advanced" },
  { icon: FaBrain, name: "Scikit-learn", level: "Advanced" },
  { icon: FaBook, name: "Jupyter", level: "Expert" },
  { icon: FaChartLine, name: "Data Analysis", level: "Expert" },
  { icon: FaCalculator, name: "Statistics", level: "Advanced" },
  { icon: FaChartBar, name: "Power BI", level: "Intermediate" },
  { icon: FaBrain, name: "Machine Learning", level: "Advanced" },
  { icon: FaRobot, name: "Deep Learning", level: "Advanced" },
  { icon: FaComments, name: "NLP", level: "Advanced" },
  { icon: FaRobot, name: "LLMs & AI Agents", level: "Advanced" },

  // Big Data & Infrastructure
  { icon: FaStream, name: "Apache Kafka", level: "Intermediate" },
  { icon: FaBolt, name: "Apache Spark", level: "Intermediate" },
  { icon: FaSearch, name: "Elasticsearch", level: "Intermediate" },
  { icon: FaChartArea, name: "Kibana", level: "Intermediate" },
  { icon: FaDocker, name: "Docker", level: "Intermediate" },
  { icon: FaDatabase, name: "SQL", level: "Advanced" },
  { icon: FaSpider, name: "Data Mining & Scraping", level: "Advanced" },

  // Engineering & Signals
  { icon: FaWaveSquare, name: "Signal Processing", level: "Intermediate" },
  { icon: FaHeartbeat, name: "Biosignals", level: "Intermediate" },
  { icon: FaMicrochip, name: "Embedded Systems", level: "Intermediate" },

  // Design & Content
  { icon: FaFigma, name: "Figma", level: "Advanced" },
  { icon: FaSketch, name: "Graphic Design", level: "Intermediate" },
  { icon: SiAdobephotoshop, name: "Photoshop", level: "Advanced" },
  { icon: SiAdobeillustrator, name: "Illustrator", level: "Advanced" },
  { icon: SiAdobeaftereffects, name: "After Effect", level: "Intermediate" },
  { icon: SiAdobepremierepro, name: "Premiere Pro", level: "Intermediate" },
  { icon: FaPaintBrush, name: "Canva", level: "Advanced" },
];

export default ProfessionalSkills;

import { useTranslation } from "react-i18next";
import Image1 from "../../../Assets/backgrounds/Header5.png";
import Image2 from "../../../Assets/Profile/Parsa.jpg";
import Image3 from "../../../Assets/Profile/WixProfile2.jpeg";

export const ProjectData = () => {
  const { t } = useTranslation();
  return [
    {
      id: 1,
      image: Image1,
      title: t('Project Alpha'),
      description: t("Get access to quick and reliable cash loans with Project Alpha, the online lending platform that's..."),
      startDate: t('July 14, 2022'),
      endDate: t('July 10, 2022'),
      totalFundraising: 250000,
      totalFundsRaised: 238800,
      maxAllocation: 250,
      numberOfPeopleFunded: 9262,
      link: 'https://example.com/project-alpha'
    },
    {
      id: 2,
      image: Image2,
      title: t('Project Beta'),
      description: t('Decentralized platform that enables content creators to monetize their work using Basic Att...'),
      startDate: t('March 8, 2022'),
      endDate: t('July 10, 2022'),
      totalFundraising: 250000,
      totalFundsRaised: 242800,
      maxAllocation: 260,
      numberOfPeopleFunded: 8769,
      link: 'https://example.com/project-beta'
    },
    {
      id: 3,
      image: Image3,
      title: t('Project Gamma'),
      description: t('Effortless and Secure Transactions: Project Gamma, Powered by Basic Attention Token...'),
      startDate: t('June 12, 2022'),
      endDate: t('July 12, 2022'),
      totalFundraising: 250000,
      totalFundsRaised: 250000,
      maxAllocation: 300,
      numberOfPeopleFunded: 9245,
      link: 'https://example.com/project-gamma'
    },
    // Add more project objects here
  ];
}
 
export default ProjectData;

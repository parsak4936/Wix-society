// EducationData.js

import Unime from "../../../Assets/Education/Unime.png";
import IASBS from "../../../Assets/Education/IASBS.png";
import ZNU from "../../../Assets/Education/ZNU.png";
import sadra from "../../../Assets/Education/sadra.jpg";
import Maktab from "../../../Assets/Education/Maktab.jpg";
import Rahnama from "../../../Assets/Education/Rahnama.jpg";
import { useTranslation } from "react-i18next";

const useEducationData = () => {
  const { t } = useTranslation();
  return [
    {
      id: 1,
      avatar: Unime,
      Address: t("Piazza Pugliatti, 1 - 98122 Messina"),
      Website: "https://www.unime.it/",
      year: "2019-2020",
      title: t("Master of Data Science"),
      school: t("University of Messina"),
      grade: t(" -/100"),
      details: t("My new adventure in ME, Italy, as a student of data science. I am not sure what will happen, but I am loving it!"),
    },
    {
      id: 2,
      avatar: IASBS,
      Address: t("PG44+3C8، زنجان"),
      Website: "https://iasbs.ac.ir/",
      year: "2019-2020",
      title: t("Master of AI Engineering"),
      school: t("IASBS"),
      grade: t("-/100"),
      details: t("I withdrew from this university due to moving abroad to work on my senior thesis and research on communication and ethical frameworks in artificial intelligence communities."),
    },
    {
      id: 3,
      avatar: ZNU,
      Address: t("M9PX+FX7, Zanjan, Zanjan Province, Iran"),
      Website: "www.znu.ac.ir",
      year: "2019-2020",
      Thesis: t("Thesis: Smart Door Access System (19.25/20)"),
      title: t("Bachelor of Computer Engineering"),
      school: t("ZNU"),
      grade: t("14.44/20"),
      details: "",
    },
    {
      id: 4,
      avatar: sadra,
      Address: t("72J6+RCP District 2, Qazvin, Qazvin Province"),
      year: "2019-2020",
      title: t("Pre-University of Mathematics Science"),
      school: t("Sadra Highschool"),
      grade: t("16.73/20"),
      details: "",
    },
    {
      id: 5,
      avatar: sadra,
      Address: t("72J6+RCP District 2, Qazvin, Qazvin Province"),
      year: "2019-2020",
      title: t("Mathematics and Physics Diploma"),
      school: t("Sadra Highschool"),
      grade: t("18.24/20"),
    },
    {
      id: 6,
      avatar: Maktab,
      Address: t("تهران - خیابان آیت‌الله کاشانی - بلوار اباذر - نبش کوچه شرافتی (هفتم) - پلاک ۲۹ - طبقه 5 - واحد 9"),
      Website: "https://maktabkhooneh.org/",
      Certification: "https://bit.ly/3nuKrEV",
      year: "2019-2020",
      title: t("Mindfullness Skills instructed by Ms. Mandana Alemi"),
      school: t("Maktabkhooneh"),
      grade: t("70/100"),
    },
    {
      id: 7,
      avatar: Maktab,
      Address: t("تهران - خیابان آیت‌الله کاشانی - بلوار اباذر - نبش کوچه شرافتی (هفتم) - پلاک ۲۹ - طبقه 5 - واحد 9"),
      Website: "https://maktabkhooneh.org/",
      Certification: "http://bit.ly/3ZbYDkc",
      year: "2019-2020",
      title: t("Advanced Python Programming instructed by Mr. Jadi Mirmirani"),
      school: t("Maktabkhooneh"),
      grade: t("88.7/100"),
    },
    {
      id: 8,
      avatar: Maktab,
      Certification: "https://bit.ly/3nuKrEV",
      Address: t("تهران - خیابان آیت‌الله کاشانی - بلوار اباذر - نبش کوچه شرافتی (هفتم) - پلاک ۲۹ - طبقه 5 - واحد 9"),
      Website: "https://maktabkhooneh.org/",
      Thesis: t("Thesis: ---"),
      title: t("Commercial Networking instructed by Ms. Sara Nazari"),
      school: t("Maktabkhonneh"),
      year: "2019-2020",
      grade: t("100/100"),
    },
    {
      id: 9,
      Address: t("Tehran Province, Tehran, Floor -1, Chaarbaagh Building, Beheshti St, Iran"),
      avatar: Rahnama,
      Website: "https://www.rahnemacollege.com/",
      Certification: "http://bit.ly/3XZ5NYD",
      year: "2019-2020",
      title: t("Junior UX Designer"),
      school: t("Rahnama Colledge"),
    },
  ];
};

export default useEducationData;

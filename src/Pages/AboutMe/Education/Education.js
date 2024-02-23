import React, { useState } from "react";
import "./Education.css";
import MasterItaly from "../../../Assets/Education/Unime.png";
import Master from "../../../Assets/Education/IASBS.png";
import Bachelor from "../../../Assets/Education/ZNU.png";
import Rahnama from "../../../Assets/Education/Rahnama.jpg";
import Maktab from "../../../Assets/Education/Maktab.jpg";
import Sadra from "../../../Assets/Education/sadra.jpg";

const educationData = [
  {
    id: 1,
    avatar: MasterItaly,
    Address: "Piazza Pugliatti, 1 - 98122 Messina",
    Website: " https://www.unime.it/",
    EECLinks: " Will be provided",

    title: "Master of Data Science",

    school: " University of Messina",
    grade: "Grade: -/100",
    details:
      "My new adventur in ME,Italy, as a student of data science, i am not sure what will happened,but i am loving it!",
  },
  {
    id: 2,
    avatar: Master,
    Address: "PG44+3C8، زنجان",
    Website: " https://iasbs.ac.ir/",
    EECLinks: "  http://bit.ly/3KnxcyS",

    title: "Master of AI Engineering",

    school: " IASBS",
    grade: "Grade: -/100",
    details:
      "I withdrew from this university due to moving abroad to work on my senior thesis and research on communication and ethical frameworks in artificial intelligence communities.",
  },
  {
    id: 3,
    avatar: Bachelor,
    Address: " M9PX+FX7, Zanjan, Zanjan Province, Iran ",
    Website: "www.znu.ac.ir",
    EECLinks: " http://bit.ly/3G6cyAQ",
    Certification: "http://bit.ly/3YmhZCl",
    trans: "http://bit.ly/3HTtPOQ",

    Thesis: " Thesis :Smart Door Access System (grade : 19.25 /20 )",
    title: "Bachelor of Computer Engineering",
    school: "ZNU",
    grade: "Grade: 14.44/20",
    details: "",
  },
  {
    id: 4,
    avatar: Sadra,
    Address: "  72J6+RCP District 2, Qazvin, Qazvin Province",

    Certification: " https://bit.ly/3lWbHvK",
    trans: " https://bit.ly/3G9YSET",

    title: "Pre-University of Mathematics Science",
    school: "Sadra Highschool",
    grade: "GPA: 16.73/20 ",
    details: "",
  },
  {
    id: 5,
    avatar: Sadra,
    Address: "  72J6+RCP District 2, Qazvin, Qazvin Province",

    Certification: "  https://bit.ly/3notxYv ",
    trans: " https://bit.ly/40t5Mgt",

    title: "Mathematics and Physics Diploma",
    school: "Sadra Highschool",
    grade: "GPA:  18.24/20",
  },
  {
    id: 6,
    avatar: Maktab,
    Address:
      "  تهران - خیابان آیت‌الله کاشانی - بلوار اباذر - نبش کوچه شرافتی (هفتم) - پلاک ۲۹ - طبقه 5 - واحد 9",
    Website: "  https://maktabkhooneh.org/",
    Certification: "  https://bit.ly/3nuKrEV ",

    title: "Mindfullness Skills instructed by Ms. Mandana Alemi",
    school: "Maktabkhooneh",
    grade: "Grade: 70/100",
  },
  {
    id: 7,
    avatar: Maktab,
    Address:
      "  تهران - خیابان آیت‌الله کاشانی - بلوار اباذر - نبش کوچه شرافتی (هفتم) - پلاک ۲۹ - طبقه 5 - واحد 9",
    Website: "  https://maktabkhooneh.org/",
    Certification: "http://bit.ly/3ZbYDkc ",
    title: "Advanced Python Programming instructed by Mr. Jadi Mirmirani",
    school: "Maktabkhooneh",
    grade: "Grade:  88.7/100",
  },
  {
    id: 8,
    avatar: Maktab,
    Certification: " https://bit.ly/3nuKrEV ",
    Address:
      "  تهران - خیابان آیت‌الله کاشانی - بلوار اباذر - نبش کوچه شرافتی (هفتم) - پلاک ۲۹ - طبقه 5 - واحد 9",
    Website: "    https://maktabkhooneh.org/",
    Thesis: " Thesis :---",
    title: "Commercial Networking  instructed by  Ms. Sara Nazari    ",
    school: "Maktabkhonneh",
    grade: "Grade: 100/100",
  },
  {
    id: 9,
    Address:
      "  Tehran Province, Tehran, Floor -1, Chaarbaagh Building, Beheshti St, Iran  ",
    avatar: Rahnama,
    Website: "   https://www.rahnemacollege.com/",

    Certification: " http://bit.ly/3XZ5NYD",

    title: "Junior UX Designer",
    school: "Rahnama Colledge",
  },
];

const Education = () => {
  const [modalOpen, setModalOpen] = useState(false); // state to control modal open/close
  const [selectedCard, setSelectedCard] = useState(null); // state to track selected card

  // function to handle click event on card and open modal
  const handleCardClick = (card) => {
    setSelectedCard(card);
    setModalOpen(true);
  };

  // function to close modal
  const handleCloseModal = () => {
    setSelectedCard(null);
    setModalOpen(false);
  };

  return (
    <div className="education-container">
      <h2 className="education-section-title">Education And Certificates</h2>
      <div className="education-card-container">
        {educationData.map((card, index) => (
          <div
            key={index}
            className="education-card"
            onClick={() => handleCardClick(card)}
          >
            <div className="education-card-avatar">
              <img src={card.avatar} alt="avatar" />
            </div>
            <div className="education-card-info" style={{ text: "black" }}>
              <h3 className="education-card-title">{card.title}</h3>
              <p className="education-card-school">{card.school}</p>
              <p className="education-card-grade">{card.grade}</p>
            </div>
          </div>
        ))}
      </div>
      {modalOpen && (
        <div className="education-modal-overlay">
          <div className="education-modal">
            <div className="education-modal-header">
              <h3 className="education-modal-title">{selectedCard.title}</h3>
              <button
                className="education-modal-close-btn"
                onClick={handleCloseModal}
              >
                X
              </button>
            </div>
            <div className="education-modal-body">
              <img
                src={selectedCard.avatar}
                style={{ width: "200px", height: "200px" }}
                alt="avatar"
              />
              <p className="education-modal-school">{selectedCard.title}</p>
              <p className="education-modal-school">{selectedCard.school}</p>
              <p className="education-modal-school">
                {" "}
                WebSite :{" "}
                <a href={selectedCard.Website}>{selectedCard.Website}</a>
              </p>
              <p className="education-modal-grade">{selectedCard.grade}</p>
              <p className="education-modal-school">
                Entry Exam Certificate :{" "}
                <a href={selectedCard.EECLinks}>{selectedCard.EECLinks}</a>
              </p>
              <p className="education-modal-school">
                {" "}
                Certificate :{" "}
                <a href={selectedCard.Certification}>
                  {selectedCard.Certification}
                </a>
              </p>

              <p className="education-modal-school">
                {" "}
                Transcripts :{" "}
                <a href={selectedCard.trans}>{selectedCard.trans}</a>
              </p>

              <p className="education-modal-school">{selectedCard.Thesis}</p>
              <p className="education-modal-school">
                {" "}
                Address:{selectedCard.Address}
              </p>

              <p className="education-modal-grade"> {selectedCard.details}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Education;

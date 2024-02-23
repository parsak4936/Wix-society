import React, { useState } from "react";
import "./Archive.css";

const projectsData = [
  {
    title: "Project 1",
    image: "https://via.placeholder.com/150",
    data: "Project 1 data",
  },
  {
    title: "Project 2",
    image: "https://via.placeholder.com/150",
    data: "Project 2 data",
  },
  {
    title: "Project 3",
    image: "https://via.placeholder.com/150",
    data: "Project 3 data",
  },
  {
    title: "Project 4",
    image: "https://via.placeholder.com/150",
    data: "Project 4 data",
  },
  {
    title: "Project 5",
    image: "https://via.placeholder.com/150",
    data: "Project 5 data",
  },
  {
    title: "Project 6",
    image: "https://via.placeholder.com/150",
    data: "Project 6 data",
  },
  {
    title: "Project 7",
    image: "https://via.placeholder.com/150",
    data: "Project 7 data",
  },
  {
    title: "Project 8",
    image: "https://via.placeholder.com/150",
    data: "Project 8 data",
  },
];

export default function Archive() {
  const [selectedCategory, setSelectedCategory] = useState("Archive");
  const [showProjects, setShowProjects] = useState(false);
  const [isArchiveActive, setIsArchiveActive] = useState(true);

  const toggleShowProjects = () => {
    setShowProjects(!showProjects);
  };

  const handleArchiveClick = () => {
    setSelectedCategory("Archive");
    setIsArchiveActive(true);
  };

  const handleProfessionalClick = () => {
    setSelectedCategory("Professional");
    setIsArchiveActive(false);
  };

  const archiveProjects = projectsData.filter(
    (project) => project.title !== "Project 1"
  );
  const professionalProjects = projectsData.filter(
    (project) => project.title === "Project 1"
  );

  const renderProjectCards = (projects) => {
    // onClick={() => handleCardClick(card)}
    return projects.map((project, index) => (
      <div key={index} className="education-card">
        <div className="education-card-avatar">
          <img src={project.image} alt="avatar" />
        </div>
        <div className="education-card-info" style={{ text: "black" }}>
          <h3 className="education-card-title">{project.title}</h3>
          <p className="education-card-school">{project.data}</p>
          <p className="education-card-grade">{project.grade}</p>
        </div>
      </div>
    ));
  };

  return (
    <div>
      {showProjects ? (
        <>
          <button
            className="projects-toggle-btn"
            style={{ width: "100%", height: "10vh" }}
            onClick={toggleShowProjects}
          >
            Hide Projects
          </button>
        </>
      ) : (
        <>
          <button
            className="projects-toggle-btn"
            style={{
              width: "100%",
              height: "10vh",
              backgroundColor: "#01be96",
              color: "white",
              fontSize: "1.5rem",
            }}
            onClick={toggleShowProjects}
          >
            Show Projects
          </button>
        </>
      )}

      {showProjects && (
        <div className="projects-container">
          <div
            className="projects-header"
            style={{ textAlign: "center", margin: "30px" }}
          >
            <h2 style={{ marginBottom: "30px", marginTop: "30px" }}>
              Projects - {selectedCategory}
            </h2>
            <div className="projects-category-buttons">
              {isArchiveActive ? (
                <>
                  {" "}
                  <button
                    onClick={() => handleArchiveClick()}
                    style={{
                      textAlign: "center",
                      height: "8vh",
                      width: "50%",
                      backgroundColor: "#01be96",
                    }}
                  >
                    Archive
                  </button>
                  <button
                    onClick={() => handleProfessionalClick()}
                    style={{ textAlign: "center", height: "5vh", width: "50%" }}
                  >
                    Professional
                  </button>
                </>
              ) : (
                <>
                  {" "}
                  <button
                    onClick={() => handleArchiveClick()}
                    style={{ textAlign: "center", height: "5vh", width: "50%" }}
                  >
                    Archive
                  </button>
                  <button
                    onClick={() => handleProfessionalClick()}
                    style={{
                      textAlign: "center",
                      height: "8vh",
                      width: "50%",
                      backgroundColor: "#01be96",
                    }}
                  >
                    Professional
                  </button>
                </>
              )}
            </div>
          </div>
          <div
            className={`projects-card-list ${
              selectedCategory === "Archive"
                ? "slide-in-left "
                : "slide-in-right "
            }`}
          >
            {selectedCategory === "Archive"
              ? renderProjectCards(archiveProjects)
              : renderProjectCards(professionalProjects)}
          </div>
        </div>
      )}
    </div>
  );
}

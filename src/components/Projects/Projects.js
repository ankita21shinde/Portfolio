import React from "react";
import "./Projects.css";
const Projects = () => {
  return (
    <section id="Project-section">
      <h2>PROJECTS</h2>
      <div className="projects-main-div">
        <div className="projects">
          <h4>Project 1</h4>
          <p>Display Greeting message</p>
          <div className="project-list">
            <ul className="projects-list-items">
              <li>
                •Display Greeting message according to time using javascript.
              </li>
              <li>•HTML ,CSS and JavaScript were used for this project.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

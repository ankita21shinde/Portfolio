import React from "react";
import "./Skills.css";
import tick from "../../assets/tick.png";
const Skills = () => {
  return (
    <section id="Skills-section">
      <span className="about-title">Skills & Technologis</span>
      <br></br>
      <span className="about-desc">
        An aspiring software developer proficient in Java, HTML,CSS and
        JavaScript, aiming to secure a position in a fast pacing, growth-driven
        organization where my existing skills will be sharpened and new skills
        will be developed.
      </span>

      <div className="Skill-main">
        <div className="skill-set1">
          <div className="skill-set-sub1">
            <i class="fa-solid fa-square-check fa-sm"></i>
            <p>Java</p>
          </div>
          <div className="skill-set-sub1">
            <i class="fa-solid fa-square-check fa-sm"></i>
            <p>Html5 & CSS3</p>
          </div>
        </div>

        <div className="skill-set1">
          <div className="skill-set-sub1">
            <i class="fa-solid fa-square-check fa-sm"></i>
            <p>Javascript</p>
          </div>
          <div className="skill-set-sub1">
            <i class="fa-solid fa-square-check fa-sm"></i>
            <p>React Js</p>
          </div>
        </div>

        <div className="skill-set1">
          <div className="skill-set-sub1">
            <i class="fa-solid fa-square-check fa-sm"></i>
            <p>SQL</p>
          </div>
          <div className="skill-set-sub1">
            <i class="fa-solid fa-square-check fa-sm"></i>
            <p>React Js</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

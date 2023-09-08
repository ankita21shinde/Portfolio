import React from "react";
import "./About.css";
import experience from "../../assets/experience.png";
import education from "../../assets/Education.jpg";
const About = () => {
  return (
    <section id="About-section">
      <span className="about-title">ABout Me</span>
      <br></br>
      <span className="about-desc">
        An aspiring software developer proficient in Java, HTML,CSS and
        JavaScript, aiming to secure a position in a fast pacing, growth-driven
        organization where my existing skills will be sharpened and new skills
        will be developed.
      </span>

      <div className="bars">
        <div className="bar">
          <img src={experience} alt="experience " className="about-img"></img>
          <div className="bar-text">
            <h2>Experience</h2>
            <ul>
              <li>
                <h4>Bajaj Finance LTD</h4>
                <p>Software Intern : 2 Jan - 30 June</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="bar">
          <img src={education} alt="experience " className="about-img"></img>
          <div className="bar-text">
            <h2>Education</h2>
            <ul>
              <li>
                <h4>
                  B.R.A.C.T Vishwakarma Institute of Information Technology,
                  Autonomous
                </h4>
                <p>Degree in Computer Engineering</p>
                <p>2020-2023</p>
              </li>
              <br></br>
              <li>
                <h4>
                  Bharati Vidyapeeth Jawaharlal nehru Institute of technology
                </h4>
                <p>Diploma in Computer technology</p>
                <p>2017-2020</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

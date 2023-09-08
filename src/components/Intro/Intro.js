import React from "react";
import "./Intro.css";
import photo from "../../assets/photo.jpg";
import btnImg from "../../assets/hireme.png";

const Intro = () => {
  return (
    <>
      <section id="intro-section">
        <div className="intro-content">
          <span className="Hello">Hello, </span>
          <span className="Intr-text">
            I'am <span className="Intro-name">Ankita</span> <br />
            Web Developer
          </span>

          <p className="intro-para">
            An aspiring software developer proficient in Java, HTML,CSS and
            JavaScript, aiming to secure a position in a fast pacing,
            growth-driven organization where my existing skills will be
            sharpened and new skills will be developed.
          </p>

          <a href={btnImg}>
            <button className="btn">Hire me</button>
          </a>
        </div>

        <img src={photo} alt="hire-me btn" className="photo"></img>
      </section>
    </>
  );
};

export default Intro;

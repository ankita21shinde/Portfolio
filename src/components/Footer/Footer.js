import React from "react";

import instagramImg from "../../assets/instagram.png";
import linkedin from "../../assets/linkedin.png";
import github from "../../assets/github.png";

import "./Footer.css";
const Footer = () => {
  return (
    <section className="footer-section">
      <div className="footer-main-div">
        <div className="Name-div">
          <h2 className="footer-h2">Ankita Portfolio</h2>
        </div>

        <div className="pages-div">
          <ul className="page-ul-div">
            <li>
              <a href="#intro-section">Home</a>
            </li>

            <li>
              <a href="#About-section">About</a>
            </li>

            <li>
              <a href="#intro-section">Experience</a>
            </li>

            <li>
              <a href="">Projects</a>
            </li>

            <li>
              <a href="#Contact-div">Contact</a>
            </li>
          </ul>
        </div>

        <div className="social-icon-div">
          <ul className="social-ul-div">
            <li className="instagram">
              <a
                href="https://www.linkedin.com/in/ankita-shinde16/"
                target="_blank"
              >
                <img src={instagramImg} alt="Image" />
              </a>
            </li>
            <li className="linkedin">
              <a href="https://www.linkedin.com/in/ankita-shinde16/">
                <img src={linkedin} alt="Image" />
              </a>
            </li>
            <li className="github">
              <a href="https://github.com/ankita21shinde">
                <img src={github} alt="Image" />
              </a>
            </li>
          </ul>
          <br></br>
          <br></br>
          <small>© ankitaPortfolio. All Rights reserved.</small>
        </div>
      </div>
    </section>
  );
};

export default Footer;

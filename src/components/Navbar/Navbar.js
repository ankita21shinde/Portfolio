import React from "react";
import "./Navbar.css";
//import { Link } from "react-router-dom";
import contactImg from "../../assets/contact.png";
const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="list">
          <ul className="ul-items-list">
            <li className="list-items">Home</li>
            <li className="list-items">About</li>
            <li className="list-items">Experience</li>
            <li className="list-items">Projects</li>
          </ul>
          <button className="contact-us-button">
            <img
              src={contactImg}
              alt="contactImg"
              className="contact-us-img"
            ></img>
            Contact Me
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

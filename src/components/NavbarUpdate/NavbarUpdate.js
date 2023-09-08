import React from "react";
import "./NavbarUpdate.css";
import { Link } from "react-scroll";
const NavbarUpdate = () => {
  return (
    <nav className="navbar">
      <div className="navlist">
        <Link className="navlist-items">Home</Link>
      </div>
      <button>Contact Me</button>
    </nav>
  );
};

export default NavbarUpdate;

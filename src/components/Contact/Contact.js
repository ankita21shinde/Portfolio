import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <div id="Contact-div">
        <h2>Contact Me</h2>
        <span className="contactDesc">
          Please fill out the form below to discuss any work opportunity
        </span>
        <form className="Contact-Form">
          <input type="text" className="name" placeholder="Your Name" />
          <input type="email" className="email" placeholder="Your Email" />
          <textarea
            className="msg"
            rows="5"
            name="message"
            placeholder="Your message"
          ></textarea>
          <button type="submit" className="submitBtn" value="Send">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

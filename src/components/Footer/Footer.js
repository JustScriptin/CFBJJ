import React from "react";
import { Link } from "react-router-dom";
import { IoMdArrowDropupCircle } from "react-icons/io";
import "./css/footer.css";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="footerContainer">
      <IoMdArrowDropupCircle
        className="footerUpArrow"
        onClick={() => scrollToTop()}
      />
      <div className="footerWrapper">
        <div className="footerLocation">
          <h1>Main Location</h1>
          <p>1420 Gemini Blvd. Suite #8 Orlando, Florida 32837</p>
        </div>
        <div className="footerCallUs">
          <h1>Call Us</h1>
          <p>(407) 603-6255 - Main Location</p>
        </div>
        <div className="footerHours">
          <h1>Our Hours</h1>
          <div>
            <Link to="/schedule">See Our Schedule →</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

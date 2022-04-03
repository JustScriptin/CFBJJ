import React from "react";
import { Link } from "react-router-dom";
import { ImFacebook2, ImInstagram } from "react-icons/im";
import cfbjj from "./assets/CFBJJ400x400.jpg";
import "./css/nav.css";
import PopupMenu from "../PopupMenu/PopupMenu";

function Nav() {
  return (
    <div className="navContainer">
      <Link to="/"><img className="navImg" src={cfbjj} alt="" /></Link>
      <div className="navLinks">
        <Link to="/">HOME</Link>
        <Link to="/schedule">SCHEDULE</Link>
        <Link to="/location">LOCATION</Link>
        <Link to="/gallery">GALLERY</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/contact">CONTACT</Link>
        <a href="https://www.facebook.com/CentralFloridaBJJ" target="_blank">
          <ImFacebook2 />
        </a>
        <a href="https://www.instagram.com/centralfloridabjj/" target="_blank">
          <ImInstagram />
        </a>
      </div>
      <PopupMenu />
    </div>
  );
}

export default Nav;

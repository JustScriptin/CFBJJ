import React from "react";
import { AiFillDownCircle } from "react-icons/ai";
import "./css/hero.css";

function Hero(props) {
  const heroImg = {
    backgroundImage: `url(${props.imgUrl})`,
    height: `${props.height}`,
  };
  const heroHeading = {
    backgroundColor: `${props.headingBgColor}`,
  };
  return (
    <div id={props.anchorId} className="heroImg" style={heroImg}>
      <h1 className="heroH1" style={heroHeading}>
        {" "}
        {props.heading}{" "}
      </h1>
      <a href={`#${props.arrowAnchorId}`}>
        <AiFillDownCircle className="downArrowIcon" />
      </a>
    </div>
  );
}

export default Hero;

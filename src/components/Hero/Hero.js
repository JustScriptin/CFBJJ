import React from "react";
import { AiFillDownCircle } from "react-icons/ai";
import "./css/hero.css";

function Hero(props) {
  const {imgUrl, height, headingBgColor, anchorId, heading, arrowAnchorId} = props;
  const heroImg = {
    backgroundImage: `url(${imgUrl})`,
    height: `${height}`,
  };
  const heroHeading = {
    backgroundColor: `${headingBgColor}`,
  };
  return (
    <div id={anchorId} className="heroImg" style={heroImg}>
      <h1 className="heroH1" style={heroHeading}>
        {" "}
        {heading}{" "}
      </h1>
      <a href={`#${arrowAnchorId}`}>
        <AiFillDownCircle className="downArrowIcon" />
      </a>
    </div>
  );
}

export default Hero;

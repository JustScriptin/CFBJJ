import React from "react";
import "./css/heroAsideItems.css";

function HeroAsideItems(props) {
  return (
    <div>
      <a className="heroAsideCircleLink" href={`#${props.scrollId}`}>
        <div className="circle" style={props.style}>
          <p>{props.hoverTxt}</p>
        </div>
      </a>
    </div>
  );
}

export default HeroAsideItems;

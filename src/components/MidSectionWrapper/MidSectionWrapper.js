import React from "react";
import "./css/midSectionWrapper.css"
function MidSectionWrapper(props) {
  return (
    <div className="midsectionWrapperContainer">
    {props.children}
    </div>
  );
}

export default MidSectionWrapper;


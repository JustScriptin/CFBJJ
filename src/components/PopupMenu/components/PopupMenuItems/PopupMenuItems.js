import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./css/popupMenuItems.css";

function PopupMenuItems(props) {
  return (
    <div>
      <div className="menuItemContainer" onClick={props.onClick}>
        <Link className="menuItem" to={props.linkTo}>
          {props.name}
        </Link>
      </div>
    </div>
  );
}

export default PopupMenuItems;

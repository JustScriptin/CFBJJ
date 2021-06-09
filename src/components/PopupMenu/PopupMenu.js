import React, { useEffect, useState } from "react";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import { MdMenu } from "react-icons/md";
import { ImFacebook2, ImInstagram } from "react-icons/im";
import PopupMenuItems from "./components/PopupMenuItems/PopupMenuItems";
import "./css/popupMenu.css";

function PopupMenu() {
  const [toggleOpen, setToggleOpen] = useState(false);
  const [style, setStyle] = useState({ display: "none" });

  const handleToggleOpen = () => {
    setToggleOpen((prev) => !prev);
    console.log(toggleOpen);
    if (toggleOpen === true) {
      setStyle({ display: "none" });
    } else {
      setStyle({ display: "block" });
    }
    console.log(style);
  };

  const handleClickAway = () => {
    setToggleOpen(false);
    setStyle({ display: "none" });
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div className="navBurgerMenuContainer">
        <MdMenu className="navBurgerMenu" onClick={handleToggleOpen} />
        <div className="navBurgerMenuPopup" style={style}>
          <PopupMenuItems name="HOME" linkTo="/" onClick={handleToggleOpen} />
          <PopupMenuItems
            name="SCHEDULE"
            linkTo="/schedule"
            onClick={handleToggleOpen}
          />
          <PopupMenuItems
            name="LOCATION"
            linkTo="/location"
            onClick={handleToggleOpen}
          />
          <PopupMenuItems
            name="GALLERY"
            linkTo="/gallery"
            onClick={handleToggleOpen}
          />
          <PopupMenuItems
            name="ABOUT"
            linkTo="/about"
            onClick={handleToggleOpen}
          />
          <PopupMenuItems
            name="CONTACT"
            linkTo="/contact"
            onClick={handleToggleOpen}
          />
          <PopupMenuItems name={<ImFacebook2 />} onClick={handleToggleOpen} />
          <PopupMenuItems name={<ImInstagram />} onClick={handleToggleOpen} />
        </div>
      </div>
    </ClickAwayListener>
  );
}

export default PopupMenu;

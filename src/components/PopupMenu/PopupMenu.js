import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  toggle,
  displayBlock,
  displayNone,
} from "../../stateManagement/ducks/popupMenuDucks";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import { MdMenu } from "react-icons/md";
import { ImFacebook2, ImInstagram } from "react-icons/im";
import PopupMenuItems from "./components/PopupMenuItems/PopupMenuItems";
import "./css/popupMenu.css";

function PopupMenu() {
  const dispatch = useDispatch();
  //const [toggleOpen, setToggleOpen] = useState(false);
  const toggleOpen = useSelector((state) => state.popupMenu.toggleOpen);
  //const [style, setStyle] = useState({ display: "none" });
  const style = useSelector((state) => state.popupMenu.style);

  const handleToggleOpen = () => {
    //setToggleOpen((prev) => !prev);
    dispatch(toggle());
    if (toggleOpen === true) {
      //setStyle({ display: "none" });
      dispatch(displayNone());
    } else {
      //setStyle({ display: "block" });
      dispatch(displayBlock());
    }
  };

  const handleClickAway = () => {
    //setToggleOpen(false);
    dispatch(toggle());
    //setStyle({ display: "none" });
    dispatch(displayNone());
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
          <PopupMenuItems
            name={<ImFacebook2 />}
            linkTo="/facebook"
            onClick={handleToggleOpen}
          />
          <PopupMenuItems
            name={<ImInstagram />}
            linkTo="/instagram"
            onClick={handleToggleOpen}
          />
        </div>
      </div>
    </ClickAwayListener>
  );
}

export default PopupMenu;

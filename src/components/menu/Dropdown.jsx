import React from "react";

// components
import Popup from "../Popup";

// router
import { Link } from "react-router-dom";

// style
import "../../style/components/menu/Dropdown.css";

const Dropdown = ({ submenus, dropdown }) => {
  return (
    <ul className={`dropdown ${dropdown ? "show" : ""}`}>
      {submenus.map((submenu, index) => {
        if (submenu.button) {
          return (
            <li key={index} className="menu-items">
              <Popup
                label={submenu.label}
                title={submenu.title}
                text={submenu.text}
              />
            </li>
          );
        } else if (submenu.link) {
          return (
            <li key={index} className="menu-items">
              <Link to={submenu.link ?? "#"} onClick={submenu.action}>
                {submenu.label}
              </Link>
            </li>
          );
        } else {
          return (submenu.component)
        }
      })}
    </ul>
  );
};

export default Dropdown;

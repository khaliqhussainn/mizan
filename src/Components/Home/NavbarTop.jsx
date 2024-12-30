import React from "react";
import {
  MdOutlineLocalShipping,
  MdOutlineAddToHomeScreen,
} from "react-icons/md";
import { FaHome } from "react-icons/fa";
import "./Style.css";

const NavbarTop = () => {
  return (
    <div className="navbar-top">
      <div className="navbar-top-container">
        <div className="navbar-top-left">
          <div className="navbar-top-item">
            <MdOutlineLocalShipping className="navbar-top-item-icon" />
            <span className="navbar-top-item-text">Free shipping</span>
          </div>
          <div className="navbar-top-item">
            <MdOutlineAddToHomeScreen className="navbar-top-item-icon" />
            <span className="navbar-top-item-text">Click & Collect</span>
          </div>
          <div className="navbar-top-item">
            <FaHome className="navbar-top-item-icon" />
            <span className="navbar-top-item-text">Return To Store</span>
          </div>
        </div>
        <div className="navbar-top-right">
          <div className="navbar-top-item">
            <span className="navbar-top-item-text">Download Our App</span>
          </div>
          <div className="navbar-top-divider"></div>
          <div className="navbar-top-item">
            <span className="navbar-top-item-text">Store Locator</span>
          </div>
          <div className="navbar-top-divider"></div>
          <div className="navbar-top-item">
            <span className="navbar-top-item-text">Help</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarTop;

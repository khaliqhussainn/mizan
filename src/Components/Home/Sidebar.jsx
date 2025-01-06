import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../Asssets/logo2.png";
import LogoImage from "../../Asssets/LogoI.png";
import { FaTimes } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import "./Sidebar.css"; // Import the CSS file
import Cart from "../../pages/Cart";


function SideBar({ setShowWishlist, cartItems, onIncrease, onDecrease, onRemove, onSizeChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [Open, setOpen] = useState(false);

  const handleLogout = () => {
    alert("User Logout Successfully. Come Back Again Soon");
  };
  const handleNavigation = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button className="menu-button" onClick={() => setIsOpen(true)}>
        <GiHamburgerMenu size={"18px"} />
      </button>

      {isOpen && (
        <div className="drawer-overlay" onClick={() => setIsOpen(false)}>
          <div className="drawer-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={() => setIsOpen(false)}>
              &times;
            </button>
            <div className="drawer-header">
              <img src={LogoImage} alt="Logo" />
            </div>
            <div className="drawer-body">
              <div className="logo-container">
                <img src={Logo} alt="logo" className="logo" />
              </div>
              <div className="nav-links">
                <a href="/" className="nav-link">
                  Home
                </a>
                <a href="#stitched" className="nav-link" onClick={handleNavigation}>
                  Stitched
                </a>
                <a href="#unstitched" className="nav-link" onClick={handleNavigation}>
                  Unstitched
                </a>
                <a href="#sale" className="nav-link" onClick={handleNavigation}>
                  Sale
                </a>
                <Link  className="nav-link" onClick={() => setOpen(true)}>
                  Your Cart
                </Link>
                <a href="/" className="nav-link" onClick={handleNavigation}>
                  Profile
                </a>
                <div className="auth-buttons">
                  <button className="auth-button" onClick={handleLogout}>
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {Open && (
        <div className="cart-modal">
          <div className="cart-content">
            <FaTimes
              className="close-cart"
              onClick={() => setOpen(false)}
            />
            <Cart
              cartItems={cartItems}
              onIncrease={onIncrease}
              onDecrease={onDecrease}
              onRemove={onRemove}
              onSizeChange={onSizeChange}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default SideBar;

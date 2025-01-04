import React, { useState } from "react";
import { BsPerson } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { FaShoppingCart, FaTimes } from "react-icons/fa";
import Logo from "../../Asssets/logo2.png";
import { Link, useNavigate } from "react-router-dom";
import HomeMenu from "./HomeMenu";
import SideBar from "./Sidebar";
import Cart from "../../pages/Cart";
import NavbarTop from "./NavbarTop";
import "./home.css";

const Navbar = ({ setShowWishlist, cartItems, onIncrease, onDecrease, onRemove, onSizeChange }) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <NavbarTop />
      <div className="navbar">
        <div className="navbar-container">
          <div className="sidebar">
            <SideBar />
          </div>

          <Link to="/" className="logo">
            <img src={Logo} alt="logo" />
          </Link>

          <div className="menu">
            <HomeMenu />
          </div>

          <div className="icons">
            <div className="icon" onClick={() => navigate("/admin")}>
              <BsPerson />
            </div>
            <div className="icon" onClick={() => setShowWishlist(true)}>
              <AiOutlineHeart />
            </div>
            <div className="icon" onClick={() => setIsOpen(true)}>
              <FaShoppingCart />
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="cart-modal">
          <div className="cart-content">
            <FaTimes
              className="close-cart"
              onClick={() => setIsOpen(false)}
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
};

export default Navbar;

import React, { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { FaShoppingCart, FaTimes } from "react-icons/fa";
import { IoLogIn } from "react-icons/io5";
import { FiUser } from "react-icons/fi"; // Profile icon
import Logo from "../../Asssets/logo2.png";
import { Link, useNavigate } from "react-router-dom";
import HomeMenu from "./HomeMenu";
import SideBar from "./Sidebar";
import Cart from "../../pages/Cart";
import "./home.css";

const Navbar = ({
  setShowWishlist,
  cartItems,
  onIncrease,
  onDecrease,
  onRemove,
  onSizeChange,
}) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="navbar">
        <div className="navbar-container">
          <div className="sidebar">
            <SideBar
              cartItems={cartItems}
              onIncrease={onIncrease}
              onDecrease={onDecrease}
              onRemove={onRemove}
              onSizeChange={onSizeChange}
            />
          </div>

          <Link to="/" className="logo">
            <img src={Logo} alt="logo" />
          </Link>

          <div className="menu">
            <HomeMenu />
          </div>

          <div className="icons">
            <div className="icon" onClick={() => navigate("/auth")}>
              <IoLogIn />
            </div>
            <div className="icon" onClick={() => setShowWishlist(true)}>
              <AiOutlineHeart />
            </div>
            <div className="icon" onClick={() => setIsOpen(true)}>
              <FaShoppingCart />
            </div>
            <div className="icon" onClick={() => navigate("/profile")}>
              <FiUser />
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="cart-modal">
          <div className="cart-content">
            <FaTimes className="close-cart" onClick={() => setIsOpen(false)} />
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

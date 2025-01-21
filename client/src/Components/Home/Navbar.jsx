import React, { useState } from "react";
// import { AiOutlineHeart } from "react-icons/ai";
import { FaShoppingCart, FaTimes } from "react-icons/fa";
import { FaUserEdit } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
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
  const cartItemCount = cartItems?.length || 0;

  return (
    <div className="navbar-wrapper">
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-left">
            <div className="sidebar-toggle">
              <SideBar
                cartItems={cartItems}
                onIncrease={onIncrease}
                onDecrease={onDecrease}
                onRemove={onRemove}
                onSizeChange={onSizeChange}
              />
            </div>

            <Link to="/" className="logo-container">
              <img src="/logo2.png" alt="logo" className="logo-image" />
            </Link>
          </div>

          <div className="navbar-center">
            <HomeMenu />
          </div>

          <div className="navbar-right">
            <button className="nav-icon" onClick={() => navigate("/auth")}>
              <FaUser size={20} />
              <span className="icon-tooltip">Login</span>
            </button>

            {/* <button className="nav-icon" onClick={() => setShowWishlist(true)}>
              <AiOutlineHeart />
              <span className="icon-tooltip">Wishlist</span>
            </button> */}

            <button
              className="nav-icon cart-icon"
              onClick={() => setIsOpen(true)}
            >
              <FaShoppingCart />
              {cartItemCount > 0 && (
                <span className="cart-badge">{cartItemCount}</span>
              )}
              <span className="icon-tooltip">Cart</span>
            </button>

            <button className="nav-icon" onClick={() => navigate("/profile")}>
              <FaUserEdit size={25} />
              <span className="icon-tooltip">Profile</span>
            </button>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div className="cart-modal">
          <div className="cart-content">
            <button className="close-cart" onClick={() => setIsOpen(false)}>
              <FaTimes />
            </button>
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

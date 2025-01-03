import React, { useEffect, useState } from "react";
import { BsBag, BsPerson } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import Logo from "../../Asssets/logo2.png";
import { Link, useNavigate } from "react-router-dom";
import HomeMenu from "./HomeMenu";
import SideBar from "./Sidebar";
import axios from "axios";
import Cart from "../../pages/Cart";
import NavbarTop from "./NavbarTop";
import "./home.css";

const Navbar = ({ setShowWishlist }) => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    axios
      .get(`https://lifestyle-mock-server-api.onrender.com/cart`)
      .then((res) => {
        setCartItems(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const handleIncrease = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrease = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const handleRemove = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const handleSizeChange = (id, newSize) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, size: newSize } : item
      )
    );
  };

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
              <BsBag />
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <h2>Your Cart</h2>
              <span className="modal-close" onClick={() => setIsOpen(false)}>
                &times;
              </span>
            </div>
            <div className="modal-body">
              <Cart
                cartItems={cartItems}
                onIncrease={handleIncrease}
                onDecrease={handleDecrease}
                onRemove={handleRemove}
                onSizeChange={handleSizeChange}
              />
            </div>
            <div className="modal-footer">
              <button
                onClick={() => {
                  // Implement payment logic
                }}
              >
                Proceed to Payment
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;

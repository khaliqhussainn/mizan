import React, { useEffect } from "react";
import { BsBag, BsPerson } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import Logo from "../../Asssets/logo2.png";
import { Link, useNavigate } from "react-router-dom";
import HomeMenu from "./HomeMenu";
import SearchBar from "./SearchBar";
import SideBar from "./Sidebar";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { addToCart } from "../../redux/cartReducer/action";
import Cart from "../../pages/Cart";
import NavbarTop from "./NavbarTop";
import "./home.css";

const Navbar = ({ setShowWishlist }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cartItems } = useSelector((store) => store.cartReducer);
  const [isOpen, setIsOpen] = React.useState(false);

  useEffect(() => {
    axios
      .get(`https://lifestyle-mock-server-api.onrender.com/cart`)
      .then((res) => {
        dispatch(addToCart(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [cartItems, dispatch]);

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

          <div className="search-bar">
            <SearchBar />
          </div>

          <div className="icons">
            <div className="icon">
              <BsPerson onClick={() => navigate("/admin")} />
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
                onIncrease={(id) => {
                  // Implement increase logic
                }}
                onDecrease={(id) => {
                  // Implement decrease logic
                }}
                onRemove={(id) => {
                  // Implement remove logic
                }}
                onSizeChange={(id, size) => {
                  // Implement size change logic
                }}
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

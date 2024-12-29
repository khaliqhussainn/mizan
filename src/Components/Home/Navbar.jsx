import React, { useEffect } from "react";
import { BsBag, BsPerson } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import Logo from "../../Asssets/logo2.png";
import { Link, useNavigate } from "react-router-dom";
import HomeMenu from "./HomeMenu";
import SearchBar from "./SearchBar";
import SideBar from "./Sidebar";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/authReducer/action";
import axios from "axios";
import { addToCart } from "../../redux/cartReducer/action";
import Cart from "../../pages/Cart"; // Import the Cart component
import NavbarTop from "./NavbarTop"; // Import the NavbarTop component
import "./style.css";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // let { isAuth, afterLoginUser } = useSelector((state) => state.AuthReducer);
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

  // const handleLogout = () => {
  //   dispatch(logout());
  //   alert("User Logout Successfully. Come Back Again Soon");
  // };

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
              <BsPerson onClick={() => navigate("/profile")} />
            </div>
            <div className="icon">
              <AiOutlineHeart />
            </div>
            <div className="icon" onClick={() => setIsOpen(true)}>
              <BsBag />
              <div className="cart-count">{cartItems.length}</div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="search-bar-mobile">
        <SearchBar />
      </div> */}

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

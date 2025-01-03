import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../Asssets/logo2.png";
import LogoImage from "../../Asssets/LogoI.png";
import { GiHamburgerMenu } from "react-icons/gi";
import "./Sidebar.css"; // Import the CSS file

function SideBar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleLogout = () => {
    alert("User Logout Successfully. Come Back Again Soon");
  };

  return (
    <>
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
                <Link to="/" className="nav-link">
                  Home
                </Link>
                <Link to="/" className="nav-link">
                  Womens
                </Link>
                <Link to="/" className="nav-link">
                  Mens
                </Link>
                <Link to="/" className="nav-link">
                  Kids
                </Link>
                <Link to="/cart" className="nav-link">
                  Your Cart
                </Link>
                <Link to="#" className="nav-link">
                  Profile
                </Link>
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
    </>
  );
}

export default SideBar;

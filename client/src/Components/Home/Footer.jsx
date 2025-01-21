import React from "react";
import { AiFillFacebook } from "react-icons/ai";
import { BsInstagram, BsYoutube } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { MdCall } from "react-icons/md";
import { RiQuestionnaireFill } from "react-icons/ri";
import { FiMail } from "react-icons/fi";
import Logo from "../../Asssets/logo2.png";
import ContactForm from "./ContactForm";
import { RiAdminLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import "./home.css";

const Footer = () => {
    const navigate = useNavigate();

  return (
    <footer className="footer">
      <ContactForm />

      <hr className="divider" />

      <div className="footer-links">
        <div className="link-section">
          <h3>Women</h3>
          <ul>
            <li>Tops</li>
            <li>Ethnicwear</li>
            <li>Bottoms</li>
            <li>Dresses</li>
            <li>Jumpsuits</li>
            <li>Winterwear</li>
            <li>Lingerie</li>
            <li>Sportswear</li>
            <li>Beauty</li>
            <li>Watches</li>
            <li>Sunglasses</li>
          </ul>
        </div>
        <div className="link-section">
          <h3>Men</h3>
          <ul>
            <li>Tops</li>
            <li>Bottoms</li>
            <li>Ethnicwear</li>
            <li>Winterwear</li>
            <li>Sportswear</li>
            <li>Innerwear</li>
            <li>Grooming</li>
            <li>Watches</li>
            <li>Sunglasses</li>
          </ul>
        </div>
        <div className="link-section">
          <h3>Kids</h3>
          <ul>
            <li>Girls Clothing</li>
            <li>Boys Clothing</li>
            <li>Infants Girls</li>
            <li>Infants Boys</li>
            <li>Winterwear</li>
            <li>Add ons</li>
            <li>The Teen Shop</li>
          </ul>
        </div>
        <div className="link-section">
          <h3>Shoes & Bags</h3>
          <ul>
            <li>Women</li>
            <li>Men</li>
            <li>Boys</li>
            <li>Girls</li>
            <li>Accessories</li>
            <li>Essentials</li>
          </ul>
        </div>
        <div className="link-section">
          <h3>Beauty</h3>
          <ul>
            <li>Makeup Eyes</li>
            <li>Makeup Face</li>
            <li>Makeup Lips</li>
            <li>Makeup Nails</li>
            <li>Perfumes</li>
          </ul>
        </div>
        <div className="link-section">
          <h3>Explore</h3>
          <ul>
            <li>Online Offers</li>
            <li>Store Offers</li>
            <li>Online Gift Card</li>
            <li>Store Gift Card</li>
            <li>Stores Nearby</li>
            <li>EDGE</li>
            <li>Membership</li>
          </ul>
        </div>
        <div className="link-section">
          <h3>About</h3>
          <ul>
            <li>About us</li>
            <li>Careers</li>
            <li>Take a Tour</li>
            <li>Blog</li>
            <li>Store Locator</li>
            <li>Landmark Cares</li>
          </ul>
        </div>
        <div className="link-section">
          <h3>Help</h3>
          <ul>
            <li>Contact us</li>
            <li>Shipping</li>
            <li>Returns Process</li>
            <li>Returns Policy</li>
            <li>Help Center</li>
          </ul>
        </div>
      </div>

      <hr className="divider" />

      <div className="contact-section">
        <div className="contact-info">
          <div className="contact-box">
            <div className="contact-icon">
              <MdCall />
            </div>
            <div className="contact-details">
              <p>Talk to us</p>
              <p>1800-123-1555</p>
            </div>
          </div>
          <div className="contact-box">
            <div className="contact-icon">
              <RiQuestionnaireFill />
            </div>
            <div className="contact-details">
              <p>Helpcentre</p>
              <p>help@outfitstore.com</p>
            </div>
          </div>
          <div className="contact-box">
            <div className="contact-icon">
              <FiMail />
            </div>
            <div className="contact-details">
              <p>Write to us</p>
              <p>help@outfitstore.com</p>
            </div>
          </div>
        </div>
        <div className="social-media">
          <AiFillFacebook />
          <FaTwitter />
          <BsInstagram />
          <BsYoutube />
        </div>
      </div>

      <hr className="divider" />

      <div className="footer-bottom">
        <img src={Logo} alt="logo" className="footer-logo" />
        <div className="footer-text">
          <p>© 2023 RNA Intellectual Property Limited.</p>
          <p>Terms & Conditions - Privacy Policy</p>
          <p className="footer-link"> Shipping Policy</p>
          <div style={{display:"flex" , padding:"10px" , gap:"10px"}} className="footer-admin" onClick={() => navigate("/admin")} >
            <RiAdminLine />
            <p>Admin Login</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

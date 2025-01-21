import React, { useState, useEffect } from "react";
import HomeSlider from "../Components/Home/HomeSlider";
import KidSlider from "../Components/Home/KidSlider";
import MenSlider from "../Components/Home/MensSlider";
import TrendingSlider from "../Components/Home/TrendingSlider";
import WomenSlider from "../Components/Home/WomenSlider";
import UnMissSlider from "../Components/Home/UnMissSlider";
import SaleSlider from "../Components/Home/SaleSlider";
import Footer from "../Components/Home/Footer";
import Navbar from "../Components/Home/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./style.css";
import { FaTimes } from "react-icons/fa";
import Cart from "./Cart";

const HomePage = ({ cartItems, onAddToCart, onIncrease, onDecrease, onRemove, onSizeChange, products = [] }) => {
  const [showCart, setShowCart] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    console.log("Cart Items in HomePage:", cartItems);
  }, [cartItems]);

  const handleAddToCart = (product) => {
    onAddToCart(product);
    setSelectedProduct(product);
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000);
  };

  const stitchedProducts = products.filter(product => product.section === "stitched");
  const unstitchedProducts = products.filter(product => product.section === "unstitched");
  const saleProducts = products.filter(product => product.section === "sale");

  return (
    <div className="home-page">
      <ToastContainer />
      <div>
        <Navbar
          cartItems={cartItems}
          onIncrease={onIncrease}
          onDecrease={onDecrease}
          onRemove={onRemove}
          onSizeChange={onSizeChange}
        />
      </div>
      <div className="progress-bar">
        <div className="progress-text">
          New arrivals in mens and womens wear upto 30% off
        </div>
      </div>
      <HomeSlider />
      <div className="container" id="stitched">
        <h2 className="section-title">Stitched </h2>
        <div className="homepage-slider-container">
          <WomenSlider handleAddToCart={handleAddToCart} products={stitchedProducts} />
        </div>
      </div>

      <div className="container" id="unstitched">
        <h2 className="section-title">Unstitched </h2>
        <UnMissSlider handleAddToCart={handleAddToCart} products={unstitchedProducts} />
      </div>

      <div className="container" id="sale">
        <SaleSlider />
        <h2 className="section-title">Sale</h2>
        <MenSlider handleAddToCart={handleAddToCart} products={saleProducts} />
      </div>

      <div className="container" id="trending">
        <h2 className="section-title">Trending Add-Ons</h2>
        <TrendingSlider handleAddToCart={handleAddToCart} />
      </div>

      <div className="container">
        <h2 className="section-title">Special Offers</h2>
        <KidSlider handleAddToCart={handleAddToCart} />
      </div>

      <div className="footer">
        <Footer />
      </div>

      {showPopup && selectedProduct && (
        <div className="popup-modal">
          <div className="popup-content">
            <FaTimes className="close-popup" onClick={() => setShowPopup(false)} />
            <h2>Product Added to Cart</h2>
            <img src={selectedProduct.images[0]} alt={selectedProduct.description} className="popup-image" />
            <h3>{selectedProduct.brand}</h3>
            <p>{selectedProduct.description}</p>
            <p>Size: {selectedProduct.size}</p>
            <p>Price: ₹{selectedProduct.price}</p>
          </div>
        </div>
      )}

      {showCart && (
        <div className="cart-modal">
          <div className="cart-content">
            <FaTimes
              className="close-cart"
              onClick={() => setShowCart(false)}
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

export default HomePage;

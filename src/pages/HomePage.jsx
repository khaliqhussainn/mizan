import React, { useState, useEffect } from "react";
import HomeSlider from "../Components/Home/HomeSlider";
import KidSlider from "../Components/Home/KidSlider";
import MenSlider from "../Components/Home/MensSlider";
import TrendingSlider from "../Components/Home/TrendingSlider";
import WomenSlider from "../Components/Home/WomenSlider";
import UnMissSlider from "../Components/Home/UnMissSlider";
import Footer from "../Components/Home/Footer";
import Navbar from "../Components/Home/Navbar";
import Cart from "./Cart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaShoppingCart } from "react-icons/fa";
import "./style.css";

const Product = ({
  src,
  description,
  price,
  clothType,
  brand,
  onAddToCart,
}) => (
  <div className="product-box">
    <img src={src} alt={description} />
    <div className="product-details">
      <p>
        <strong>{brand}</strong>
      </p>
      <p>{description}</p>
      <p>${price}</p>
      <p>{clothType}</p>
      <button
        onClick={() =>
          onAddToCart({ src, description, price, clothType, brand })
        }
      >
        Add to Cart
      </button>
    </div>
  </div>
);

function HomePage() {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    console.log("Cart Items in HomePage:", cartItems);
  }, [cartItems]);

  const handleAddToCart = (product) => {
    console.log("Adding to cart:", product);
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) => item.description === product.description
      );
      if (existingItem) {
        return prevItems.map((item) =>
          item.description === product.description
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [
        ...prevItems,
        { ...product, quantity: 1, id: Date.now(), size: "" },
      ];
    });

    // Show toast notification
    toast.success(
      `${product.brand} ${product.description} has been added to your cart.`,
      {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }
    );
  };

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
      <ToastContainer />
      <div>
        {/* <div>
          <NavbarTop />
        </div> */}
        <Navbar />
      </div>
      <div className="progress-bar">
        <div className="progress-text">
          New arrivals in mens and womens wear upto 30% off
        </div>
        <FaShoppingCart
          className="cart-icon"
          onClick={() => setShowCart(true)}
        />
      </div>
      <HomeSlider />
      <div className="container">
        <div className="image-container">
          <img
            src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Uber-HP-Desktop-PromoStrip2-14Mar23.jpg"
            alt="Promo"
          />
        </div>
        <h2 className="section-title">Our Benefits</h2>
        <div className="product-grid">
          <Product
            src="https://lmsin.net/cdn-cgi/image/w=410,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-DesktopUberHP-OurBenefit1-22Feb2023.jpg"
            description="Product 1 Description"
            price="29.99"
            clothType="Cotton"
            brand="Brand A"
            onAddToCart={handleAddToCart}
          />
          <Product
            src="https://lmsin.net/cdn-cgi/image/w=410,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-DesktopUberHP-OurBenefit2-13Oct2022.jpg"
            description="Product 2 Description"
            price="39.99"
            clothType="Polyester"
            brand="Brand B"
            onAddToCart={handleAddToCart}
          />
          <Product
            src="https://lmsin.net/cdn-cgi/image/w=410,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-DesktopUberHP-OurBenefit3-13Oct2022.jpg"
            description="Product 3 Description"
            price="49.99"
            clothType="Silk"
            brand="Brand C"
            onAddToCart={handleAddToCart}
          />
          {/* <Product
            src="https://lmsin.net/cdn-cgi/image/w=410,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-DesktopUberHP-OurBenefit3-13Oct2022.jpg"
            description="Product 3 Description"
            price="49.99"
            clothType="Silk"
            brand="Brand D"
            onAddToCart={handleAddToCart}
          /> */}
        </div>
      </div>

      <div className="container">
        <div className="image-container">
          <img
            src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit-cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Uber-HP-Desktop-PromoStrip3-25Mar2023.jpg"
            alt="Promo"
          />
        </div>
        <h2 className="section-title">Unmissable Offers</h2>
        <UnMissSlider />
      </div>

      <div className="container">
        <h2 className="section-title">Women's Store</h2>
        <WomenSlider />
      </div>

      <div className="container">
        <h2 className="section-title">Mens's Store</h2>
        <MenSlider />
      </div>

      <div className="container">
        <h2 className="section-title">Kids Store</h2>
        <KidSlider />
      </div>

      <div className="container">
        <h2 className="section-title">Trending Add-Ons</h2>
        <TrendingSlider handleAddToCart={handleAddToCart} />
      </div>

      <div className="container">
        <h2 className="section-title">Season's Hottest Deals</h2>
        <div className="image-container">
          <img
            src="https://lmsin.net/cdn-cgi/image/w=300,q=70,fit-cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LSUber-Desktop-Promowidget18-Banner1-01March23.jpg"
            alt="Promo"
          />
          <img
            src="https://lmsin.net/cdn-cgi/image/w=300,q=70,fit-cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LSUber-Desktop-Promowidget18-Banner8-01March23.jpg"
            alt="Promo"
          />
        </div>
      </div>

      <div className="container">
        <h2 className="section-title">Big Brands Big Discounts</h2>
        <div className="image-container">
          <img
            src="https://lmsin.net/cdn-cgi/image/w=616,q=70,fit-cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Top-Brands-Desk-Banner1-09Feb2023.jpg"
            alt="Promo"
          />
          <img
            src="https://lmsin.net/cdn-cgi/image/w=616,q=70,fit-cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Top-Brands-Desk-Banner8-16Dec2022.jpg"
            alt="Promo"
          />
          <img
            src="https://lmsin.net/cdn-cgi/image/w=616,q=70,fit-cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Top-Brands-Desk-Banner11-16Mar2023.jpg"
            alt="Promo"
          />
        </div>
      </div>

      {/* <div className="container">
        <h2 className="section-title">Welcome Summer</h2>
        <div className="image-container">
          <img
            src="https://lmsin.net/cdn-cgi/image/w=300,q=70,fit-cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidget21-Desk-Banner1-14Feb23.jpg"
            alt="Promo"
          />
          <img
            src="https://lmsin.net/cdn-cgi/image/w=300,q=70,fit-cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidget21-Desk-Banner7-14Feb23.jpg"
            alt="Promo"
          />
        </div>
      </div> */}

      <div className="container">
        <h2 className="section-title">Brands We Love</h2>
        <div className="image-container">
          <img
            src="https://lmsin.net/cdn-cgi/image/w=616,q=70,fit-cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LSUber-Desktop-Promowidget19-Banner1-17Mar23.jpg"
            alt="Promo"
          />
          <img
            src="https://lmsin.net/cdn-cgi/image/w=616,q=70,fit-cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LSUber-Desktop-Promowidget19-Banner2-29Nov22.jpg"
            alt="Promo"
          />
          <img
            src="https://lmsin.net/cdn-cgi/image/w=616,q=70,fit-cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LSUber-Desktop-Promowidget19-Banner9-24Mar23.jpg"
            alt="Promo"
          />
        </div>
      </div>

      <div className="footer">
        <Footer />
      </div>

      {showCart && (
        <div className="cart-modal">
          <div className="cart-content">
            <FaShoppingCart
              className="close-cart"
              onClick={() => setShowCart(false)}
            />
            <Cart
              cartItems={cartItems}
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
              onRemove={handleRemove}
              onSizeChange={handleSizeChange}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default HomePage;

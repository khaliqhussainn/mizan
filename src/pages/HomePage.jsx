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
import Wishlist from "./Wishlist";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaShoppingCart, FaTimes } from "react-icons/fa";
import "./style.css";
import Product from "./Product";
import product1 from "../image/sanasafinaz/2ss5000.jpg";
import product2 from "../image/sanasafinaz/2ss5000(2).webp";
import product3 from "../image/sanasafinaz/2ss5000(3).jpg";

function HomePage() {
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showWishlist, setShowWishlist] = useState(false);


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

  const handleAddToWishlist = (product) => {
    setWishlistItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) => item.description === product.description
      );
      if (existingItem) {
        return prevItems;
      }
      return [
        ...prevItems,
        { ...product, id: Date.now() },
      ];
    });

    toast.success(
      `${product.brand} ${product.description} has been added to your wishlist.`,
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

  const handleRemoveFromWishlist = (id) => {
    setWishlistItems((prevItems) => prevItems.filter((item) => item.id !== id));
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
    <div className="home-page">
      <ToastContainer />
      <div>
        <Navbar setShowWishlist={setShowWishlist} />
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
        <h2 className="section-title">Our Benefits</h2>
        <div className="product-grid">
          <Product
            images={[product1, product2, product3]}
            description="Product 1 Description"
            price={29.99}
            clothType="Cotton"
            brand="Brand A"
            onAddToCart={handleAddToCart}
            onAddToWishlist={handleAddToWishlist}
            onRemoveFromWishlist={handleRemoveFromWishlist}
            isInWishlist={wishlistItems.some(item => item.description === "Product 1 Description")}
          />
          <Product
            images={[product1, product2, product3]}
            description="Product 2 Description"
            price={39.99}
            clothType="Polyester"
            brand="Brand B"
            onAddToCart={handleAddToCart}
            onAddToWishlist={handleAddToWishlist}
            onRemoveFromWishlist={handleRemoveFromWishlist}
            isInWishlist={wishlistItems.some(item => item.description === "Product 2 Description")}
          />
          <Product
            images={[product1, product2, product3]}
            description="Product 3 Description"
            price={40.99}
            clothType="Silk"
            brand="Brand C"
            onAddToCart={handleAddToCart}
            onAddToWishlist={handleAddToWishlist}
            onRemoveFromWishlist={handleRemoveFromWishlist}
            isInWishlist={wishlistItems.some(item => item.description === "Product 3 Description")}
          />
          <Product
            images={[product1, product2, product3]}
            description="Product 4 Description"
            price={40.99}
            clothType="Silk"
            brand="Brand D"
            onAddToCart={handleAddToCart}
            onAddToWishlist={handleAddToWishlist}
            onRemoveFromWishlist={handleRemoveFromWishlist}
            isInWishlist={wishlistItems.some(item => item.description === "Product 4 Description")}
          />
        </div>
      </div>

      <div className="container">
        <h2 className="section-title">Unmissable Offers</h2>
        <UnMissSlider />
      </div>

      <div className="container">
        <h2 className="section-title">Women's Store</h2>
        <div>
          <WomenSlider handleAddToCart={handleAddToCart} />
        </div>
      </div>

      <div className="container">
        <h2 className="section-title">Mens's Store</h2>
        <MenSlider handleAddToCart={handleAddToCart} />
      </div>

      <div className="container">
        <h2 className="section-title">Kids Store</h2>
        <KidSlider handleAddToCart={handleAddToCart} />
      </div>

      <div className="container">
        <h2 className="section-title">Trending Add-Ons</h2>
        <TrendingSlider handleAddToCart={handleAddToCart} />
      </div>

      <div className="container">
        <h2 className="section-title">Season's Hottest Deals</h2>
        <div>
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
        <div>
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

      <div className="container">
        <h2 className="section-title">Brands We Love</h2>
        <div>
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
            <FaTimes
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

      {showWishlist && (
        <div className="wishlist-modal">
          <div className="wishlist-content">
            <FaTimes
              className="close-wishlist"
              onClick={() => setShowWishlist(false)}
            />
            <Wishlist
              wishlistItems={wishlistItems}
              onRemoveFromWishlist={handleRemoveFromWishlist}
              onAddToCart={handleAddToCart}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default HomePage;

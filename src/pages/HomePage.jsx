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
// import Product from "./Product";
// import product11 from "../image/sanasafinaz/2ss5000.jpg";
// import product12 from "../image/sanasafinaz/2ss5000(2).webp";
// import product13 from "../image/sanasafinaz/2ss5000(3).jpg";
// import product22 from "../image/stitched/1/IMG-20250102-WA0012.jpg";
// import product23 from "../image/stitched/1/IMG-20250102-WA0013.jpg";
// import product24 from "../image/stitched/1/IMG-20250102-WA0014.jpg";
// import product25 from "../image/stitched/1/IMG-20250102-WA0015.jpg";
// import product26 from "../image/stitched/1/IMG-20250102-WA0016.jpg";
// import product27 from "../image/stitched/1/IMG-20250102-WA0017.jpg";
import { FaTimes } from "react-icons/fa"; // Import FaTimes
import Cart from "./Cart"; // Import Cart

const HomePage = ({ cartItems, onAddToCart, onIncrease, onDecrease, onRemove, onSizeChange }) => {
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    console.log("Cart Items in HomePage:", cartItems);
  }, [cartItems]);

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
      <div className="container">
        <h2 className="section-title">Stitched </h2>
        <div className="homepage-slider-container">
          <WomenSlider handleAddToCart={onAddToCart} />
        </div>
      </div>

      {/* <div className="container">
        <h2 className="section-title">Stitched</h2>
        <div className="product-grid">
          <Product
            images={[product11, product12, product13]}
            description="Product 1 Description"
            price={25.99}
            clothType="Cotton"
            brand="Brand A"
            onAddToCart={onAddToCart}
          />
          <Product
            images={[product24, product22, product23, product25, product26, product27]}
            description="Product 2 Description"
            price={39.99}
            clothType="Polyester"
            brand="Brand B"
            onAddToCart={onAddToCart}
          />
          <Product
            images={[product11, product12, product13]}
            description="Product 3 Description"
            price={30.99}
            clothType="Silk"
            brand="Brand C"
            onAddToCart={onAddToCart}
          />
          <Product
            images={[product11, product12, product13]}
            description="Product 4 Description"
            price={40.99}
            clothType="Silk"
            brand="Brand D"
            onAddToCart={onAddToCart}
          />
        </div>
      </div> */}

      <div className="container">
        <h2 className="section-title">Unstitched </h2>
        <UnMissSlider />
      </div>

    
    
      <div className="container">
        <SaleSlider />
        <h2 className="section-title">Sale</h2>
        <MenSlider onAddToCart={onAddToCart} />
      </div>


      <div className="container">
        <h2 className="section-title">Trending Add-Ons</h2>
        <TrendingSlider onAddToCart={onAddToCart} />
      </div>

      <div className="container">
        <h2 className="section-title">Kids Store</h2>
        <KidSlider onAddToCart={onAddToCart} />
      </div>
      {/* <div className="container">
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
      </div> */}

      {/* <div className="container">
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
      </div> */}

      {/* <div className="container">
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
      </div> */}

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

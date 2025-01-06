import React, { useState, useEffect, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import "./product-detail.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cart from "../../pages/Cart"; // Import Cart
import { FaTimes } from "react-icons/fa"; // Import FaTimes

const ProductDetail = ({ cartItems, onAddToCart, onIncrease, onDecrease, onRemove, onSizeChange }) => {
  const location = useLocation();
  const { product } = location.state || {};
  const [selectedImage, setSelectedImage] = useState(product?.images?.[0] || "");
  const [selectedSize, setSelectedSize] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    console.log("Cart Items in HomePage:", cartItems);
  }, [cartItems]);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!product) {
    return <div>No product selected</div>;
  }

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleAddToCart = () => {
    onAddToCart({ ...product, size: selectedSize, quantity: 1 });
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000);
  };

  return (
    <>
      <ToastContainer />
      <Navbar
        cartItems={cartItems}
        onIncrease={onIncrease}
        onDecrease={onDecrease}
        onRemove={onRemove}
        onSizeChange={onSizeChange}
      />
      <div className="product-detail-container">
        <div className="product-images-container">
          {product.images && product.images.length > 0 && (
            <>
              <div className="product-thumbnails">
                {product.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Thumbnail ${index}`}
                    onClick={() => handleImageClick(image)}
                    className="product-thumbnail"
                  />
                ))}
              </div>
              <div className="product-main-image">
                <img src={selectedImage} alt={product.description} className="main-image" />
              </div>
            </>
          )}
        </div>
        <div className="product-info-container">
          <h1>{product.brand}</h1>
          <h2>{product.description}</h2>
          <p className="product-price">₹{product.price}</p>
          <p className="product-cloth-type">Outfit Type: {product.outfitType}</p>
          <p className="product-cloth-type">Sub-Category: {product.subCategory}</p>
          <p className="product-cloth-type">Color Type: {product.colorType}</p>
          <p className="product-cloth-type">Number of Pieces: {product.numberOfPieces}</p>
          <p className="product-cloth-type">Product Type: {product.productType}</p>
          <p className="product-cloth-type">Season: {product.season}</p>
          <p className="product-cloth-type">Shirt Fabrics: {product.shirtFabrics}</p>
          <p className="product-cloth-type">Trouser Fabric: {product.trouserFabric}</p>
          <p className="product-cloth-type">Dupatta Fabric: {product.dupattaFabric}</p>
          <p className="product-cloth-type">Work Technique: {product.workTechnique}</p>

          {product.sizes && product.sizes.length > 0 && (
            <div className="size-chart">
              <h3>Select Size</h3>
              <ul>
                {product.sizes.map((size, index) => (
                  <li key={index}>
                    <input
                      type="radio"
                      id={`size-${index}`}
                      name="size"
                      value={size}
                      onChange={() => setSelectedSize(size)}
                      checked={selectedSize === size}
                    />
                    <label htmlFor={`size-${index}`}>{size}</label>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <button className="add-to-cart-button" onClick={handleAddToCart}>
            Add to Cart
          </button>

          {product.sizeChart && product.sizeChart.length > 0 && (
            <div className="size-chart-details">
              <h3>Size Chart Details</h3>
              <table>
                <thead>
                  <tr>
                    <th>Size</th>
                    <th>Sleeve Length</th>
                    <th>Chest</th>
                    <th>Shirt Length</th>
                    <th>Hips</th>
                  </tr>
                </thead>
                <tbody>
                  {product.sizeChart.map((chart, index) => (
                    <tr key={index}>
                      <td>{chart.size}</td>
                      <td>{chart.sleevelength || chart.sleeve}</td>
                      <td>{chart.chest}</td>
                      <td>{chart.shirtlength || chart.length}</td>
                      <td>{chart.hips}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {showPopup && (
        <div className="popup-modal">
          <div className="popup-content">
            <FaTimes className="close-popup" onClick={() => setShowPopup(false)} />
            <h2>Product Added to Cart</h2>
            <img src={selectedImage} alt={product.description} className="popup-image" />
            <h3>{product.brand}</h3>
            <p>{product.description}</p>
            <p>Size: {selectedSize}</p>
            <p>Price: ₹{product.price}</p>
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
      <Footer />
    </>
  );
};

export default ProductDetail;

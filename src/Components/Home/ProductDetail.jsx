import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./home.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

const ProductDetail = () => {
  const location = useLocation();
  const { product } = location.state || {};
  const [selectedImage, setSelectedImage] = useState(product?.images?.[0] || "");
  const [selectedSize, setSelectedSize] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!product) {
    return <div>No product selected</div>;
  }

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleAddToCart = () => {
    if (selectedSize) {
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
      }, 3000); // Hide popup after 3 seconds
      alert(`Added ${product.brand} - ${product.description} (Size: ${selectedSize}) to cart!`);
    } else {
      alert("Please select a size before adding to cart.");
    }
  };

  return (
    <>
      <Navbar />
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
          <p className="product-description">{product.description}</p>
          <p className="product-price">Price: ${product.price}</p>
          <p className="product-cloth-type">Cloth Type: {product.clothType}</p>
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
                    <th>Sleeve</th>
                    <th>Length</th>
                    <th>Back</th>
                    <th>Neck</th>
                  </tr>
                </thead>
                <tbody>
                  {product.sizeChart.map((chart, index) => (
                    <tr key={index}>
                      <td>{chart.size}</td>
                      <td>{chart.sleeve}</td>
                      <td>{chart.length}</td>
                      <td>{chart.back}</td>
                      <td>{chart.neck}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h3>Added to Cart</h3>
            <p>{product.brand} - {product.description} (Size: {selectedSize})</p>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default ProductDetail;

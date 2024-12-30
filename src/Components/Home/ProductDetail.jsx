import React from "react";
import { useLocation } from "react-router-dom";
import "./Style.css"; // Import your CSS file
import Navbar from "./Navbar";
import Footer from "./Footer";
const ProductDetail = () => {
  const location = useLocation();
  const { product } = location.state || {};

  if (!product) {
    return <div>No product selected</div>;
  }

  return (
    <>
      <Navbar />
      <div className="product-detail">
        <div className="product-images">
          {product.images.map((image, index) => (
            <img key={index} src={image} alt={product.description} />
          ))}
        </div>
        <div className="product-info">
          <h1>{product.brand}</h1>
          <h2>{product.name}</h2>
          <p className="product-description">{product.description}</p>
          <p className="product-price">Price: ${product.price}</p>
          <p className="product-cloth-type">Cloth Type: {product.clothType}</p>
          {/* Add more details and styling as needed */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetail;

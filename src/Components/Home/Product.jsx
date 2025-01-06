import React, { useState } from "react";
import {
  IoIosHeart,
  IoIosHeartEmpty,
  IoIosInformationCircleOutline,
} from "react-icons/io";
import { MdAddShoppingCart } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import "./home.css";

const Product = ({
  images,
  price,
  brand,
  description,
  clothType,
  sizes,
  sizeChart,
  onAddToCart,
  onAddToWishlist,
  onRemoveFromWishlist,
  isInWishlist,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const handleDotClick = (index) => {
    setCurrentImageIndex(index);
  };

  const handleAddToCart = () => {
    onAddToCart({
      images,
      price,
      brand,
      description,
      clothType,
      sizes,
      sizeChart,
    });
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000); // Hide the popup after 3 seconds
  };

  const handleImageClick = () => {
    navigate("/product-detail", {
      state: {
        product: {
          images,
          price,
          brand,
          description,
          clothType,
          sizes,
          sizeChart,
        },
      },
    });
  };

  return (
    <div className="product-container">
      <div className="product-image-slider">
        <div className="image-container" onClick={handleImageClick}>
          <img
            src={images[currentImageIndex]}
            alt={`Product ${currentImageIndex}`}
          />
          <div className="icon-overlay">
            <IoIosInformationCircleOutline
              size={30}
              color="white"
              onClick={handleImageClick}
            />
            <div
              onClick={() =>
                onAddToWishlist({
                  images,
                  price,
                  brand,
                  description,
                  clothType,
                  sizes,
                  sizeChart,
                })
              }
            >
              {isInWishlist ? (
                <IoIosHeart size={30} color="red" />
              ) : (
                <IoIosHeartEmpty size={30} color="white" />
              )}
            </div>
          </div>
          {images.length > 1 && (
            <div className="dots">
              {images.map((_, index) => (
                <span
                  key={index}
                  className={`dot ${
                    index === currentImageIndex ? "active" : ""
                  }`}
                  onClick={() => handleDotClick(index)}
                ></span>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="product-details">
        <div>
          <p>Price: ₹{price}</p>
          <p>Brand: {brand}</p>
        </div>
        <div onClick={handleAddToCart} className="div-cart-add-icon">
          <MdAddShoppingCart size={30} className="cart-add-icon" />
        </div>
      </div>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h3>Added to Cart</h3>
            <p>
              {brand} - {description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;

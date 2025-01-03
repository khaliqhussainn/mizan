import React, { useState } from "react";
import {
  IoIosHeart,
  IoIosHeartEmpty,
  IoIosInformationCircleOutline,
} from "react-icons/io";
import "./home.css";

const Product = ({
  images,
  price,
  brand,
  onAddToCart,
  onAddToWishlist,
  onRemoveFromWishlist,
  isInWishlist,
  onImageClick,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleDotClick = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="product-container">
      <div className="product-image-slider">
        <div className="image-container">
          <img
            src={images[currentImageIndex]}
            alt={`Product ${currentImageIndex}`}
          />
          <div className="icon-overlay">
            <IoIosInformationCircleOutline
              size={30}
              color="white"
              onClick={onImageClick}
            />
            <div
              onClick={() =>
                onAddToWishlist({
                  images,
                  price,
                  brand,
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
        <p>Price: ${price}</p>
        <p>Brand: {brand}</p>
        <div className="button-product-container">
          <button
            onClick={() =>
              onAddToCart({
                images,
                price,
                brand,
              })
            }
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;

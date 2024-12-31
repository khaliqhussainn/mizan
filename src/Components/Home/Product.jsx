import React, { useState } from "react";
import Slider from "react-slick";
import { IoIosHeart, IoIosHeartEmpty, IoIosInformationCircleOutline } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./home.css";

const Product = ({ images, description, price, clothType, brand, sizes, sizeChart, onAddToCart, onAddToWishlist, onRemoveFromWishlist, isInWishlist, onImageClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: isHovered,
    autoplaySpeed: 2000,
  };

  return (
    <div
      className="product-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="product-image-slider">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="image-container">
              <img src={image} alt={`Product ${index}`} />
              <div className="icon-overlay">
                <IoIosInformationCircleOutline size={30} color="white" onClick={onImageClick} />
                <div onClick={() => onAddToWishlist({ images, description, price, clothType, brand, sizes, sizeChart })}>
                  {isInWishlist ? <IoIosHeart size={30} color="red" /> : <IoIosHeartEmpty size={30} color="white" />}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="product-details">
        <p>{description}</p>
        <p>Price: ${price}</p>
        <p>Cloth Type: {clothType}</p>
        <p>Brand: {brand}</p>
        <button onClick={() => onAddToCart({ images, description, price, clothType, brand, sizes, sizeChart })}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;

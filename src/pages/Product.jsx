import React, { useState } from "react";
import Slider from "react-slick";
import {  IoIosHeart, IoIosHeartEmpty } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";

// function SampleNextArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "gray" }}
//       onClick={onClick}
//     >
//       <IoIosArrowForward />
//     </div>
//   );
// }

// function SamplePrevArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "gray" }}
//       onClick={onClick}
//     >
//       <IoIosArrowBack />
//     </div>
//   );
// }

const Product = ({ images, description, price, clothType, brand, onAddToCart, onAddToWishlist, onRemoveFromWishlist, isInWishlist }) => {
  const [isHovered, setIsHovered] = useState(false);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
    autoplay: isHovered,
    autoplaySpeed: 2000,
  };

  return (
    <div
      className="product-container1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="product-image-slider1">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="image-container1">
              <img src={image} alt={`Product ${index}`} />
              <div className="icon-overlay" onClick={() => onAddToWishlist({ images, description, price, clothType, brand })}>
                {isInWishlist ? <IoIosHeart size={30} color="red" /> : <IoIosHeartEmpty size={30} color="white" />}
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="product-details1">
        <p>{description}</p>
        <p>Price: ${price}</p>
        <p>Cloth Type: {clothType}</p>
        <p>Brand: {brand}</p>
        <button onClick={() => onAddToCart({ images, description, price, clothType, brand })}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;

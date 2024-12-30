import React from "react";
import Slider from "react-slick";
import { IoIosArrowForward, IoIosArrowBack, IoIosInformationCircle } from "react-icons/io";
import "./Style.css"; 

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "gray" }}
      onClick={onClick}
    >
      <IoIosArrowForward />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "gray" }}
      onClick={onClick}
    >
      <IoIosArrowBack />
    </div>
  );
}

const Product = ({ images, description, price, clothType, brand, onAddToCart, onImageClick }) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="product-container">
      <div className="product-image-slider">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="image-container">
              <img src={image} alt={`Product ${index}`} />
              <div className="icon-overlay" onClick={onImageClick}>
                <IoIosInformationCircle size={30} color="white" />
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
        <button onClick={() => onAddToCart({ images, description, price, clothType, brand })}>Add to Cart</button>
      </div>
    </div>
  );
};

export default Product;

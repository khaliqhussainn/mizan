// Components/Home/SaleSlider.js
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Sale1 from "../../image/main1.jpg";
import Sale2 from "../../image/main2.jpg";
import Sale3 from "../../image/main3.jpg";
import "../../CSS/SaleSlider.css"; // Import the CSS file

const SaleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="sale-slider-container">
      <Slider {...settings}>
        <div>
          <img
            src={Sale1}
            alt="Sale 1"
            style={{ width: "1500px", height: "300px" }}
          />
        </div>
        <div>
          <img
            src={Sale2}
            alt="Sale 2"
            style={{ width: "1500px", height: "300px" }}
          />
        </div>
        <div>
          <img
            src={Sale3}
            alt="Sale 3"
            style={{ width: "1500px", height: "300px" }}
          />
        </div>
      </Slider>
    </div>
  );
};

export default SaleSlider;

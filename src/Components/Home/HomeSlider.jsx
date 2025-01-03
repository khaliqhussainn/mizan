import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sliderImage1 from "../../image/main1.jpg";
import sliderImage2 from "../../image/main2.jpg";
import sliderImage3 from "../../image/main3.jpg";
import sliderImage4 from "../../image/main1.jpg";
import sliderImage5 from "../../image/main1.jpg";
import "./home.css"; // Create a CSS file for styling

export default class HomeSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
    };
    return (
      <div className="slider-container">
        <Slider {...settings}>
          <div className="slider-image-container">
            <img
              className="slider-image"
              src={sliderImage2}
              alt="Slider 2"
            />
          </div>
          <div className="slider-image-container">
            <img
              className="slider-image"
              src={sliderImage1}
              alt="Slider 1"
            />
          </div>
          <div className="slider-image-container">
            <img
              className="slider-image"
              src={sliderImage3}
              alt="Slider 3"
            />
          </div>
          <div className="slider-image-container">
            <img
              className="slider-image"
              src={sliderImage4}
              alt="Slider 4"
            />
          </div>
          <div className="slider-image-container">
            <img
              className="slider-image"
              src={sliderImage5}
              alt="Slider 5"
            />
          </div>
        </Slider>
      </div>
    );
  }
}

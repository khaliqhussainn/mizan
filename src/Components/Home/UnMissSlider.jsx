import React, { Component } from "react";
import Slider from "react-slick";
import { IoIosArrowForward } from "react-icons/io";
import "./style.css"; // Import the CSS file
const Product = ({
  src,
  description,
  price,
  clothType,
  brand,
  onAddToCart,
}) => (
  <div className="trendProduct">
    <img src={src} alt={description} />
    <div className="product-details">
      <p>
        <strong>{brand}</strong>
      </p>
      <p>{description}</p>
      <p>${price}</p>
      <p>{clothType}</p>
      <button
        onClick={() =>
          onAddToCart({ src, description, price, clothType, brand })
        }
      >
        Add to Cart
      </button>
    </div>
  </div>
);

const data = [
  {
    src: "https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidget20-Common-Banner1-10Mar23.jpg",
    description: "Product 1 Description",
    price: "29.99",
    clothType: "Cotton",
    brand: "Brand A",
  },
  {
    src: "https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidget20-Common-Banner2-10Mar23.jpg",
    description: "Product 2 Description",
    price: "39.99",
    clothType: "Polyester",
    brand: "Brand B",
  },
  {
    src: "https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidget20-Common-Banner3-10Mar23.jpg",
    description: "Product 3 Description",
    price: "49.99",
    clothType: "Silk",
    brand: "Brand C",
  },
  {
    src: "https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidget20-Common-Banner4-10Mar23.jpg",
    description: "Product 4 Description",
    price: "59.99",
    clothType: "Linen",
    brand: "Brand D",
  },
  {
    src: "https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidget20-Common-Banner5-10Mar23.jpg",
    description: "Product 5 Description",
    price: "69.99",
    clothType: "Wool",
    brand: "Brand E",
  },
  {
    src: "https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidget20-Common-Banner6-10Mar23.jpg",
    description: "Product 6 Description",
    price: "79.99",
    clothType: "Denim",
    brand: "Brand F",
  },
];

function SampleNextArrow({ onClick }) {
  return (
    <div className="arrow arrow-right" onClick={onClick}>
      <IoIosArrowForward />
    </div>
  );
}

export default class UnMissSlider extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 2,
      initialSlide: 0,
      nextArrow: <SampleNextArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="slider-container">
        <Slider {...settings}>
          {data.map((item, i) => {
            return (
              <div key={i}>
                <Product
                  src={item.src}
                  description={item.description}
                  price={item.price}
                  clothType={item.clothType}
                  brand={item.brand}
                  onAddToCart={this.props.handleAddToCart}
                  
                />
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}

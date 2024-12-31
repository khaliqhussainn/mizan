import React from "react";
import Slider from "react-slick";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import "./home.css";
import Product from "./Product"; // Import the updated Product component
import image1 from "../../image/sanasafinaz/ss5000.webp";
import image2 from "../../image/sanasafinaz/ss-5000.jpg";
import image3 from "../../image/sanasafinaz/ss5000(3).jpg";
import image4 from "../../image/sanasafinaz/ss5000(4).jpg";

const data = [
  {
    images: [image2, image1, image3, image4],
    description: "Product 2 Description",
    price: "39.99",
    clothType: "Polyester",
    brand: "Brand B",
    sizes: ["S", "M", "L", "XL"],
    sizeChart: [
      { size: "S", sleeve: "32", length: "28", back: "26", neck: "14" },
      { size: "M", sleeve: "34", length: "30", back: "28", neck: "15" },
      { size: "L", sleeve: "36", length: "32", back: "30", neck: "16" },
      { size: "XL", sleeve: "38", length: "34", back: "32", neck: "17" },
    ],
  },
  {
    images: [image2, "https://example.com/image2-2.jpg"],
    description: "Product 3 Description",
    price: "49.99",
    clothType: "Silk",
    brand: "Brand C",
    sizes: ["S", "M", "L", "XL"],
    sizeChart: [
      { size: "S", sleeve: "32", length: "28", back: "26", neck: "14" },
      { size: "M", sleeve: "34", length: "30", back: "28", neck: "15" },
      { size: "L", sleeve: "36", length: "32", back: "30", neck: "16" },
      { size: "XL", sleeve: "38", length: "34", back: "32", neck: "17" },
    ],
  },
  {
    images: [image2, "https://example.com/image2-2.jpg"],
    description: "Product 3 Description",
    price: "49.99",
    clothType: "Silk",
    brand: "Brand C",
    sizes: ["S", "M", "L", "XL"],
    sizeChart: [
      { size: "S", sleeve: "32", length: "28", back: "26", neck: "14" },
      { size: "M", sleeve: "34", length: "30", back: "28", neck: "15" },
      { size: "L", sleeve: "36", length: "32", back: "30", neck: "16" },
      { size: "XL", sleeve: "38", length: "34", back: "32", neck: "17" },
    ],
  },
  {
    images: [image2, "https://example.com/image2-2.jpg"],
    description: "Product 3 Description",
    price: "49.99",
    clothType: "Silk",
    brand: "Brand C",
    sizes: ["S", "M", "L", "XL"],
    sizeChart: [
      { size: "S", sleeve: "32", length: "28", back: "26", neck: "14" },
      { size: "M", sleeve: "34", length: "30", back: "28", neck: "15" },
      { size: "L", sleeve: "36", length: "32", back: "30", neck: "16" },
      { size: "XL", sleeve: "38", length: "34", back: "32", neck: "17" },
    ],
  },
  {
    images: [image2, "https://example.com/image2-2.jpg"],
    description: "Product 3 Description",
    price: "49.99",
    clothType: "Silk",
    brand: "Brand C",
    sizes: ["S", "M", "L", "XL"],
    sizeChart: [
      { size: "S", sleeve: "32", length: "28", back: "26", neck: "14" },
      { size: "M", sleeve: "34", length: "30", back: "28", neck: "15" },
      { size: "L", sleeve: "36", length: "32", back: "30", neck: "16" },
      { size: "XL", sleeve: "38", length: "34", back: "32", neck: "17" },
    ],
  },
  {
    images: [image2, "https://example.com/image2-2.jpg"],
    description: "Product 3 Description",
    price: "49.99",
    clothType: "Silk",
    brand: "Brand C",
    sizes: ["S", "M", "L", "XL"],
    sizeChart: [
      { size: "S", sleeve: "32", length: "28", back: "26", neck: "14" },
      { size: "M", sleeve: "34", length: "30", back: "28", neck: "15" },
      { size: "L", sleeve: "36", length: "32", back: "30", neck: "16" },
      { size: "XL", sleeve: "38", length: "34", back: "32", neck: "17" },
    ],
  },
  // Add more products as needed
];

function SampleNextArrow({ onClick }) {
  return (
    <div className="arrow arrow-right" onClick={onClick}>
      <IoIosArrowForward
        style={{ color: "red", marginRight: "-90px" }}
        size={30}
      />
    </div>
  );
}

const WomenSlider = ({ handleAddToCart }) => {
  const navigate = useNavigate();

  const handleProductClick = (product) => {
    navigate("/product-detail", { state: { product } });
  };

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    nextArrow: <SampleNextArrow style={{ color: "red" }} />,
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
                images={item.images}
                description={item.description}
                price={item.price}
                clothType={item.clothType}
                brand={item.brand}
                sizes={item.sizes}
                sizeChart={item.sizeChart}
                onAddToCart={handleAddToCart}
                onImageClick={() => handleProductClick(item)}
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default WomenSlider;

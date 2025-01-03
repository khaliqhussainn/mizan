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
import product22 from "../../image/stitched/1/IMG-20250102-WA0012.jpg";
import product23 from "../../image/stitched/1/IMG-20250102-WA0013.jpg";
import product24 from "../../image/stitched/1/IMG-20250102-WA0014.jpg";
import product25 from "../../image/stitched/1/IMG-20250102-WA0015.jpg";
import product26 from "../../image/stitched/1/IMG-20250102-WA0016.jpg";
import product27 from "../../image/stitched/1/IMG-20250102-WA0017.jpg";
import product31 from "../../image/stitched/2/WhatsApp Image 2025-01-02 at 16.10.26_404633a4.jpg";
import product32 from "../../image/stitched/2/WhatsApp Image 2025-01-02 at 16.10.26_c383a21e.jpg";
import product33 from "../../image/stitched/2/WhatsApp Image 2025-01-02 at 16.10.27_b3c01c57.jpg";
import product34 from "../../image/stitched/2/WhatsApp Image 2025-01-02 at 16.10.27_f75273fb.jpg";
import product41 from "../../image/stitched/3/WhatsApp Image 2025-01-02 at 16.26.23_9f8e6ab6.jpg";
import product42 from "../../image/stitched/3/WhatsApp Image 2025-01-02 at 16.26.23_ca3ec539.jpg";
import product43 from "../../image/stitched/3/WhatsApp Image 2025-01-02 at 16.26.23_cc863edf.jpg";
import product44 from "../../image/stitched/3/WhatsApp Image 2025-01-02 at 16.26.24_9cbc8520.jpg";

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
    images: [product31, product32, product33, product34],
    description:
      "Aadab embroidered 3pcs Fine quality stuff",
    price: "2500",
    clothType: "Linen",
    brand: "Aadab",
    sizes: ["S", "M", "L", "XL"],
    sizeChart: [
      {
        size: "S",
        sleevelength: "20",
        chest: "18",
        shirtlength: "54",
        hips: "20",
      },
      {
        size: "M",
        sleevelength: "20",
        chest: "20",
        shirtlength: "54",
        hips: "21",
      },
      {
        size: "L",
        sleevelength: "20",
        chest: "22",
        shirtlength: "54",
        hips: "23",
      },
      {
        size: "XL",
        sleevelength: "20",
        chest: "23",
        shirtlength: "54",
        hips: "24",
      },
    ],
  },
  {
    images: [product24, product22, product23, product25, product26, product27],
    description:
      "Luxury Aghajaan Studio- Maroon chiffon 3pc embroidered and hand embellished suit.",
    price: "6000",
    clothType: "Chiffon",
    brand: "Aghajaan",
    sizes: ["S", "M", "L", "XL"],
    sizeChart: [
      {
        size: "S",
        sleevelength: "20",
        chest: "18",
        shirtlength: "37",
        hips: "20",
      },
      {
        size: "M",
        sleevelength: "20",
        chest: "20",
        shirtlength: "38",
        hips: "21",
      },
      {
        size: "L",
        sleevelength: "20",
        chest: "22",
        shirtlength: "39",
        hips: "23",
      },
      {
        size: "XL",
        sleevelength: "20",
        chest: "23",
        shirtlength: "40",
        hips: "24",
      },
    ],
  },

  {
    images: [product41, product42, product43, product44],
    description: "Featuring a unique front-short and back-tail design adorned with intricate Tilla work and full front embroidery.",
    price: "3000",
    clothType: "Chiffon",
    brand: "Bin Akram",
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

import React from "react";
import Slider from "react-slick";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import "./home.css";
import Product from "./Product"; // Import the updated Product component
import image11 from "../../image/sanasafinaz/ss5000.webp";
import product31 from "../../image/stitched/2/WhatsApp Image 2025-01-02 at 16.10.26_404633a4.jpg";
import product32 from "../../image/stitched/2/WhatsApp Image 2025-01-02 at 16.10.26_c383a21e.jpg";
import product33 from "../../image/stitched/2/WhatsApp Image 2025-01-02 at 16.10.27_b3c01c57.jpg";
import product34 from "../../image/stitched/2/WhatsApp Image 2025-01-02 at 16.10.27_f75273fb.jpg";
import produc41t from "../../image/stitched/4/IMG-20250102-WA0022.jpg";
import produc42t from "../../image/stitched/4/IMG-20250102-WA0023.jpg";
import produc43t from "../../image/stitched/4/IMG-20250102-WA0024.jpg";
import produc44t from "../../image/stitched/4/IMG-20250102-WA0025.jpg";

const data1 = [
  {
    images: [produc44t, produc42t, produc43t, produc41t],
    description: "Product 2 Description",
    price: "2000",
    clothType: "Polyester",
    brand: "Brand B",
    outfitType: "Eastern Ready to wear",
    subCategory: "Kurta Set",
    colorType: "Red",
    numberOfPieces: "3",
    productType: "Stitched",
    season: "Summer",
    shirtFabrics: "Cotton",
    trouserFabric: "Cotton",
    dupattaFabric: "Chiffon",
    workTechnique: "Embroidery",
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
    description: "Aadab embroidered 3pcs Fine quality stuff",
    price: "2500",
    clothType: "Linen",
    brand: "Aadab",
    outfitType: "Eastern Ready to wear",
    subCategory: "Kurta Set",
    colorType: "Blue",
    numberOfPieces: "3",
    productType: "Stitched",
    season: "Winter",
    shirtFabrics: "Linen",
    trouserFabric: "Linen",
    dupattaFabric: "Silk",
    workTechnique: "Embroidery",
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
    images: [product31, product32, product33, product34],
    description: "Aadab embroidered 3pcs Fine quality stuff",
    price: "2500",
    clothType: "Linen",
    brand: "Aadab",
    outfitType: "Eastern Ready to wear",
    subCategory: "Kurta Set",
    colorType: "Blue",
    numberOfPieces: "3",
    productType: "Stitched",
    season: "Winter",
    shirtFabrics: "Linen",
    trouserFabric: "Linen",
    dupattaFabric: "Silk",
    workTechnique: "Embroidery",
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
    images: [product31, product32, product33, product34],
    description: "Aadab embroidered 3pcs Fine quality stuff",
    price: "2500",
    clothType: "Linen",
    brand: "Aadab",
    outfitType: "Eastern Ready to wear",
    subCategory: "Kurta Set",
    colorType: "Blue",
    numberOfPieces: "3",
    productType: "Stitched",
    season: "Winter",
    shirtFabrics: "Linen",
    trouserFabric: "Linen",
    dupattaFabric: "Silk",
    workTechnique: "Embroidery",
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
    images: [product31, product32, product33, product34],
    description: "Aadab embroidered 3pcs Fine quality stuff",
    price: "2500",
    clothType: "Linen",
    brand: "Aadab",
    outfitType: "Eastern Ready to wear",
    subCategory: "Kurta Set",
    colorType: "Blue",
    numberOfPieces: "3",
    productType: "Stitched",
    season: "Winter",
    shirtFabrics: "Linen",
    trouserFabric: "Linen",
    dupattaFabric: "Silk",
    workTechnique: "Embroidery",
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
];

const data2 = [
  {
    images: [image11],
    description:
      "Luxury Aghajaan Studio- Maroon chiffon 3pc embroidered and hand embellished suit.",
    price: "6000",
    clothType: "Chiffon",
    brand: "Aghajaan",
    outfitType: "Eastern Ready to wear",
    subCategory: "Kurta Set",
    colorType: "Maroon",
    numberOfPieces: "3",
    productType: "Stitched",
    season: "Autumn",
    shirtFabrics: "Chiffon",
    trouserFabric: "Chiffon",
    dupattaFabric: "Chiffon",
    workTechnique: "Embroidery",
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
    images: [image11],
    description:
      "Luxury Aghajaan Studio- Maroon chiffon 3pc embroidered and hand embellished suit.",
    price: "6000",
    clothType: "Chiffon",
    brand: "Aghajaan",
    outfitType: "Eastern Ready to wear",
    subCategory: "Kurta Set",
    colorType: "Maroon",
    numberOfPieces: "3",
    productType: "Stitched",
    season: "Autumn",
    shirtFabrics: "Chiffon",
    trouserFabric: "Chiffon",
    dupattaFabric: "Chiffon",
    workTechnique: "Embroidery",
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
    images: [image11],
    description:
      "Luxury Aghajaan Studio- Maroon chiffon 3pc embroidered and hand embellished suit.",
    price: "6000",
    clothType: "Chiffon",
    brand: "Aghajaan",
    outfitType: "Eastern Ready to wear",
    subCategory: "Kurta Set",
    colorType: "Maroon",
    numberOfPieces: "3",
    productType: "Stitched",
    season: "Autumn",
    shirtFabrics: "Chiffon",
    trouserFabric: "Chiffon",
    dupattaFabric: "Chiffon",
    workTechnique: "Embroidery",
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
];

const data3 = [
  {
    images: [image11],
    description: "Rosebud embroidered 2pcs fine quality and stuff",
    price: "2000",
    clothType: "Silk",
    brand: "Rosebud",
    outfitType: "Eastern Ready to wear",
    subCategory: "Kurta Set",
    colorType: "Plum",
    numberOfPieces: "2 Piece - Top & Bottom",
    productType: "Daily/Basic Wear",
    season: "Winter Wear",
    shirtFabrics: "Linen",
    trouserFabric: "Linen",
    dupattaFabric: "Silk",
    workTechnique: "Embroidery",
    sizes: ["S", "M", "L", "XL"],
    sizeChart: [
      { size: "S", sleeve: "32", length: "28", back: "26", neck: "14" },
      { size: "M", sleeve: "34", length: "30", back: "28", neck: "15" },
      { size: "L", sleeve: "36", length: "32", back: "30", neck: "16" },
      { size: "XL", sleeve: "38", length: "34", back: "32", neck: "17" },
    ],
  },
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

const TrendingSlider= ({ handleAddToCart }) => {
  const navigate = useNavigate();

  const handleProductClick = (product) => {
    navigate("/product-detail", { state: { product } });
  };

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4, // Show 4 products on large screens
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow style={{ color: "#d81b60" }} />,
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
        breakpoint: 768, // Medium screens (tablets)
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 580, // Mobile devices
        settings: {
          slidesToShow: 2, // Show 2 products on mobile
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="women-slider-container">
      <div className="slider-container">
        <Slider {...settings}>
          {data1.map((item, i) => (
            <div key={i} className="product-slide">
              <Product
                images={item.images}
                description={item.description}
                price={item.price}
                clothType={item.clothType}
                brand={item.brand}
                sizes={item.sizes}
                outfitType={item.outfitType}
                subCategory={item.subCategory}
                colorType={item.colorType}
                numberOfPieces={item.numberOfPieces}
                productType={item.productType}
                season={item.season}
                shirtFabrics={item.shirtFabrics}
                trouserFabric={item.trouserFabric}
                dupattaFabric={item.dupattaFabric}
                workTechnique={item.workTechnique}
                sizeChart={item.sizeChart}
                onAddToCart={handleAddToCart}
                onImageClick={() => handleProductClick(item)}
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className="slider-container">
        <Slider {...settings}>
          {data2.map((item, i) => (
            <div key={i} className="product-slide">
              <Product
                images={item.images}
                description={item.description}
                price={item.price}
                clothType={item.clothType}
                brand={item.brand}
                sizes={item.sizes}
                outfitType={item.outfitType}
                subCategory={item.subCategory}
                colorType={item.colorType}
                numberOfPieces={item.numberOfPieces}
                productType={item.productType}
                season={item.season}
                shirtFabrics={item.shirtFabrics}
                trouserFabric={item.trouserFabric}
                dupattaFabric={item.dupattaFabric}
                workTechnique={item.workTechnique}
                sizeChart={item.sizeChart}
                onAddToCart={handleAddToCart}
                onImageClick={() => handleProductClick(item)}
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className="slider-container">
        <Slider {...settings}>
          {data3.map((item, i) => (
            <div key={i} className="product-slide">
              <Product
                images={item.images}
                description={item.description}
                price={item.price}
                clothType={item.clothType}
                brand={item.brand}
                sizes={item.sizes}
                outfitType={item.outfitType}
                subCategory={item.subCategory}
                colorType={item.colorType}
                numberOfPieces={item.numberOfPieces}
                productType={item.productType}
                season={item.season}
                shirtFabrics={item.shirtFabrics}
                trouserFabric={item.trouserFabric}
                dupattaFabric={item.dupattaFabric}
                workTechnique={item.workTechnique}
                sizeChart={item.sizeChart}
                onAddToCart={handleAddToCart}
                onImageClick={() => handleProductClick(item)}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TrendingSlider;

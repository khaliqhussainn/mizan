import React from "react";
import Slider from "react-slick";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import "./home.css";
import Product from "./Product"; // Import the updated Product component
import product22 from "../../image/stitched/1/IMG-20250102-WA0012.jpg";
import product51 from "../../image/stitched/5/IMG-20250102-WA0006.jpg";
import image11 from "../../image/unstitched/1/IMG-20250106-WA0014.jpg";
import image12 from "../../image/unstitched/1/IMG-20250106-WA0014.jpg";
import image13 from "../../image/unstitched/1/IMG-20250106-WA0014.jpg";
import image14 from "../../image/unstitched/1/IMG-20250106-WA0014.jpg";
import image21 from "../../image/unstitched/2/IMG-20250106-WA0033.jpg";
import image22 from "../../image/unstitched/2/WhatsApp Image 2025-01-06 at 19.13.29_4f69086a.jpg";
import image23 from "../../image/unstitched/2/WhatsApp Image 2025-01-06 at 19.13.29_aa508695.jpg";
import image24 from "../../image/unstitched/2/IMG-20250106-WA0018.jpg";
import image31 from "../../image/unstitched/3/IMG-20250102-WA0046.jpg";
import image32 from "../../image/unstitched/3/IMG-20250102-WA0047.jpg";
import image33 from "../../image/unstitched/3/IMG-20250102-WA0048.jpg";
import image34 from "../../image/unstitched/3/IMG-20250102-WA0050.jpg";
import image41 from "../../image/unstitched/4/IMG-20241231-WA0001.jpg";
import image42 from "../../image/unstitched/4/IMG-20241231-WA0003.jpg";
import image43 from "../../image/unstitched/4/IMG-20241231-WA0004.jpg";
import image44 from "../../image/unstitched/4/IMG-20241231-WA0005.jpg";
import image51 from "../../image/unstitched/5/IMG-20250102-WA0030.jpg";
import image52 from "../../image/unstitched/5/IMG-20250102-WA0032.jpg";
import image53 from "../../image/unstitched/5/IMG-20250102-WA0037.jpg";
import image54 from "../../image/unstitched/5/IMG-20250102-WA0042.jpg";
import image61 from "../../image/unstitched/6/IMG-20250102-WA0035.jpg";
import image62 from "../../image/unstitched/6/IMG-20250102-WA0034.jpg";
import image63 from "../../image/unstitched/6/IMG-20250102-WA0041.jpg";
import image64 from "../../image/unstitched/6/IMG-20250102-WA0054.jpg";
import image71 from "../../image/unstitched/7/IMG-20250102-WA0045.jpg";
import image72 from "../../image/unstitched/7/IMG-20250102-WA0044.jpg";
import image73 from "../../image/unstitched/7/IMG-20250102-WA0061.jpg";
import image74 from "../../image/unstitched/7/IMG-20250102-WA0065.jpg";
import image81 from "../../image/unstitched/8/IMG-20250102-WA0060.jpg";
import image82 from "../../image/unstitched/8/IMG-20250102-WA0049.jpg";
import image83 from "../../image/unstitched/8/IMG-20250102-WA0059.jpg";
import image84 from "../../image/unstitched/8/IMG-20250102-WA0056.jpg";
import image91 from "../../image/unstitched/9/IMG-20250102-WA0051.jpg";
import image92 from "../../image/unstitched/9/IMG-20250102-WA0052.jpg";
import image93 from "../../image/unstitched/9/IMG-20250102-WA0053.jpg";
import image94 from "../../image/unstitched/9/IMG-20250102-WA0055.jpg";
import image95 from "../../image/unstitched/9/IMG-20250102-WA0058.jpg";
import image96 from "../../image/unstitched/9/IMG-20250106-WA0040.jpg";
import image100 from "../../image/unstitched/10/IMG-20250102-WA0062.jpg";
import image101 from "../../image/unstitched/10/IMG-20250102-WA0067.jpg";
import image102 from "../../image/unstitched/10/IMG-20250102-WA0069.jpg";
import image103 from "../../image/unstitched/10/IMG-20250102-WA0070.jpg";
import image110 from "../../image/unstitched/11/WhatsApp Image 2025-01-06 at 20.16.42_cb38b83f.jpg";
import image111 from "../../image/unstitched/11/WhatsApp Image 2025-01-06 at 20.16.42_ccfb39ca.jpg";
import image112 from "../../image/unstitched/11/WhatsApp Image 2025-01-06 at 20.16.43_468abe80.jpg";

const data1 = [
  {
    images: [image11, image12, image13, image14],
    price: "3000",
    clothType: "slub",
    brand: "Sana Safinaz",
    outfitType: "Regular Wear",
    colorType: "Mustard",
    numberOfPieces: "3",
    productType: "Unstitched",
    season: "Fall",
    shirtFabrics: "Slub",
    trouserFabric: "Cotton",
    dupattaFabric: "Shawl",
    workTechnique: "Embroidery",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    images: [image33, image31, image32, image34],
    price: "5000",
    clothType: "slub",
    brand: "Sana Safinaz",
    outfitType: "Formal",
    colorType: "Black",
    numberOfPieces: "3 (with Patches)",
    productType: "Unstitched",
    season: "Luxuary Winter Wear",
    shirtFabrics: "Slub",
    trouserFabric: "Cotton Tenciles",
    dupattaFabric: "Shawl",
    workTechnique: "Embroided",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    images: [image21, image22, image23, image24],
    price: "3000",
    clothType: "slub",
    brand: "Sana Safinaz",
    outfitType: "Regular Wear",
    colorType: "Off White",
    numberOfPieces: "3",
    productType: "Unstitched",
    season: "Fall",
    shirtFabrics: "Slub",
    trouserFabric: "Cotton",
    dupattaFabric: "Shawl",
    workTechnique: "Embroidery",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    images: [image51, image52, image53, image54],
    price: "4500",
    clothType: "Slub",
    brand: "Sana Safinaz",
    outfitType: "Formal Wear",
    colorType: "Pink and Black",
    numberOfPieces: "3 (with Patches)",
    productType: "Unstitched",
    season: "Winter",
    shirtFabrics: "Slub",
    trouserFabric: "Cotton Tencile",
    dupattaFabric: "Velvet",
    workTechnique: "Embroided",
  },
  {
    images: [image41, image42, image43, image44],
    price: "5000",
    clothType: "Raw Silk",
    brand: "Sana Safinaz",
    outfitType: "Formal",
    colorType: "Blue",
    numberOfPieces: "3 (with Patches)",
    productType: "Unstitched",
    season: "All Year",
    shirtFabrics: "Raw Silk",
    trouserFabric: "Cotton Tencile",
    dupattaFabric: "Poly Net",
    workTechnique: "Embroided",
  },
  {
    images: [image61, image62, image63, image64],
    price: "6000",
    clothType: "Raw Silk",
    brand: "Sana Safinaz",
    outfitType: "Formal Wear",
    colorType: "Blue",
    numberOfPieces: "3 (with Patches)",
    productType: "Unstitched",
    season: "All Year",
    shirtFabrics: "Raw Silk",
    trouserFabric: "Cotton Tencile",
    dupattaFabric: "Raw Silk",
    workTechnique: "Embroided",
  },
  {
    images: [image71, image72, image73, image74],
    price: "4500",
    clothType: "Slub",
    brand: "Sana Safinaz",
    outfitType: "Formal Wear",
    colorType: "Off White",
    numberOfPieces: "3",
    productType: "Unstitched",
    season: "Winter",
    shirtFabrics: "Slub",
    trouserFabric: "Cotton Tencile",
    dupattaFabric: "Shawl",
    workTechnique: "Embroided",
  },
  {
    images: [image81, image82, image83, image84],
    price: "4500",
    clothType: "Slub",
    brand: "Sana Safinaz",
    outfitType: "Formal Wear",
    colorType: "Sea Green",
    numberOfPieces: "3",
    productType: "Unstitched",
    season: "Winter",
    shirtFabrics: "Slub",
    trouserFabric: "Cotton Tencile",
    dupattaFabric: "Shawl",
    workTechnique: "Embroided",
  },
  {
    images: [image91, image92, image93, image94, image95, image96],
    price: "5000",
    clothType: "Slub",
    brand: "Sana Safinaz",
    outfitType: "Formal Wear",
    colorType: "Off White",
    numberOfPieces: "3 (with Patches)",
    productType: "Unstitched",
    season: "Winter",
    shirtFabrics: "Slub",
    trouserFabric: "Cotton Tencile",
    dupattaFabric: "Shawl",
    workTechnique: "Embroided",
  },
  {
    images: [image100, image101, image102, image103],
    price: "3000",
    clothType: "Slub",
    brand: "Sana Safinaz",
    outfitType: "Regular Wear",
    colorType: "Black",
    numberOfPieces: "3",
    productType: "Unstitched",
    season: "Winter",
    shirtFabrics: "Slub",
    trouserFabric: "Cotton",
    dupattaFabric: "Shawl",
    workTechnique: "Embroided",
  },
  {
    images: [image112, image111, image110],
    price: "3000",
    clothType: "Slub",
    brand: "Sana Safinaz",
    outfitType: "Regular Wear",
    colorType: "Blue",
    numberOfPieces: "3",
    productType: "Unstitched",
    season: "Winter",
    shirtFabrics: "Slub",
    trouserFabric: "Cotton",
    dupattaFabric: "Shawl",
    workTechnique: "Embroided",
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

const UnMissSlider = ({ handleAddToCart }) => {
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

export default UnMissSlider;

import { Box, Image, Text, VStack } from "@chakra-ui/react";
import React, { Component } from "react";
import Slider from "react-slick";
import { IoIosArrowForward } from "react-icons/io";

const data = [
  {
    images: [
      "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011695801-Blue-Blue-1000011695801_01-2100.jpg",
      "https://example.com/image2.jpg",
      "https://example.com/image3.jpg",
    ],
    description: "Product 1 Description",
    price: "29.99",
    clothType: "Cotton",
    brand: "Brand A",
  },
  {
    images: [
      "https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-LimitedSale-Desk-Banner2-24March23.jpg",
      "https://example.com/image2.jpg",
      "https://example.com/image3.jpg",
    ],
    description: "Product 2 Description",
    price: "39.99",
    clothType: "Polyester",
    brand: "Brand B",
  },
  {
    images: [
      "https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-LimitedSale-Desk-Banner2-24March23.jpg",
      "https://example.com/image2.jpg",
      "https://example.com/image3.jpg",
    ],
    description: "Product 2 Description",
    price: "39.99",
    clothType: "Polyester",
    brand: "Brand B",
  },
  {
    images: [
      "https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-LimitedSale-Desk-Banner2-24March23.jpg",
      "https://example.com/image2.jpg",
      "https://example.com/image3.jpg",
    ],
    description: "Product 2 Description",
    price: "39.99",
    clothType: "Polyester",
    brand: "Brand B",
  },
  {
    images: [
      "https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-LimitedSale-Desk-Banner2-24March23.jpg",
      "https://example.com/image2.jpg",
      "https://example.com/image3.jpg",
    ],
    description: "Product 2 Description",
    price: "39.99",
    clothType: "Polyester",
    brand: "Brand B",
  },
  {
    images: [
      "https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-LimitedSale-Desk-Banner2-24March23.jpg",
      "https://example.com/image2.jpg",
      "https://example.com/image3.jpg",
    ],
    description: "Product 2 Description",
    price: "39.99",
    clothType: "Polyester",
    brand: "Brand B",
  },
  {
    images: [
      "https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-LimitedSale-Desk-Banner2-24March23.jpg",
      "https://example.com/image2.jpg",
      "https://example.com/image3.jpg",
    ],
    description: "Product 2 Description",
    price: "39.99",
    clothType: "Polyester",
    brand: "Brand B",
  },
  {
    images: [
      "https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-LimitedSale-Desk-Banner2-24March23.jpg",
      "https://example.com/image2.jpg",
      "https://example.com/image3.jpg",
    ],
    description: "Product 2 Description",
    price: "39.99",
    clothType: "Polyester",
    brand: "Brand B",
  },
  {
    images: [
      "https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-LimitedSale-Desk-Banner2-24March23.jpg",
      "https://example.com/image2.jpg",
      "https://example.com/image3.jpg",
    ],
    description: "Product 2 Description",
    price: "39.99",
    clothType: "Polyester",
    brand: "Brand B",
  },
  // Add more products with multiple images
];

const Product = ({ images, description, price, clothType, brand }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} boxShadow="md">
      <Slider {...settings}>
        {images.map((src, index) => (
          <Image key={index} src={src} alt={description} borderRadius="20px" />
        ))}
      </Slider>
      <VStack align="start" mt={4}>
        <Text fontWeight="semibold">{brand}</Text>
        <Text>{description}</Text>
        <Text>${price}</Text>
        <Text>{clothType}</Text>
      </VStack>
    </Box>
  );
};

function SampleNextArrow({ onClick }) {
  return (
    <Box
      fontSize={{ base: "20px", sm: "25px", md: "30px", lg: "30px" }}
      padding={{
        base: "2px 2px",
        sm: "3px 5px",
        md: "4px 8px",
        lg: "5px 12px",
      }}
      borderRadius="50%"
      color="black"
      boxShadow="0 0 5px 3px #ccc"
      display="flex"
      width={{ base: "20px", sm: "30px", md: "40px", lg: "50px" }}
      position="absolute"
      top="45%"
      right={"-5px"}
      backgroundColor="white"
      className="arrow arrow-right"
      onClick={onClick}
    >
      <IoIosArrowForward />
    </Box>
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
            slidesToScroll: 1,
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
      <Box marginTop={{ base: 3, sm: 4, md: 6, lg: 7 }}>
        <Slider {...settings}>
          {data.map((item, i) => (
            <Product
              key={i}
              images={item.images}
              description={item.description}
              price={item.price}
              clothType={item.clothType}
              brand={item.brand}
            />
          ))}
        </Slider>
      </Box>
    );
  }
}

import {
  Box,
  Divider,
  Flex,
  Grid,
  Image,
  Progress,
  Text,
  VStack,
  Button,
  useToast,
  IconButton,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import HomeSlider from "../Components/Home/HomeSlider";
import KidSlider from "../Components/Home/KidSlider";
import MenSlider from "../Components/Home/MensSlider";
import TrendingSlider from "../Components/Home/TrendingSlider";
import WomenSlider from "../Components/Home/WomenSlider";
import UnMissSlider from "../Components/Home/UnMissSlider";
import Footer from "../Components/Home/Footer";
import Navbar from "../Components/Home/Navbar";
import NavbarTop from "../Components/Home/NavbarTop";
import Cart from "./Cart";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaShoppingCart } from 'react-icons/fa';

const Product = ({ src, description, price, clothType, brand, onAddToCart }) => (
  <Box
    borderWidth="1px"
    borderRadius="lg"
    overflow="hidden"
    p={4}
    boxShadow="md"
    width={{ base: "100%", sm: "100%", md: "50%", lg: "20%" }}
  >
    <Image src={src} alt={description} />
    <VStack align="start" mt={4}>
      <Text fontWeight="semibold">{brand}</Text>
      <Text>{description}</Text>
      <Text>${price}</Text>
      <Text>{clothType}</Text>
      <Button colorScheme="orange" mt={4} onClick={() => onAddToCart({ src, description, price, clothType, brand })}>
        Add to Cart
      </Button>
    </VStack>
  </Box>
);

function HomePage() {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    console.log("Cart Items in HomePage:", cartItems);
  }, [cartItems]);

  const handleAddToCart = (product) => {
    console.log("Adding to cart:", product);
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(item => item.description === product.description);
      if (existingItem) {
        return prevItems.map(item =>
          item.description === product.description
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1, id: Date.now(), size: '' }];
    });

    // Show toast notification
    toast.success(`${product.brand} ${product.description} has been added to your cart.`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const handleIncrease = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrease = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const handleRemove = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const handleSizeChange = (id, newSize) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, size: newSize } : item
      )
    );
  };

  return (
    <Box bgColor={"#fdfdfd"}>
      <ToastContainer />
      <Box display={{ base: "none", sm: "none", md: "none", lg: "block" }}>
        <NavbarTop />
      </Box>
      <Navbar />
      <IconButton
        icon={<FaShoppingCart />}
        aria-label="Cart"
        position="fixed"
        top="20px"
        right="20px"
        onClick={() => setShowCart(true)}
      />
      <Box>
        <Progress
          colorScheme="pink"
          hasStripe
          height="42px"
          value={100}
          isAnimated
        />
        <Text
          color={"white"}
          fontSize={{ base: "80%", sm: "100%", lg: "100%" }}
          position="absolute"
          textAlign="center"
          top={{ base: "117px", sm: "115px", md: "142px", lg: "125px" }}
          left={{ base: "5%", sm: "27%", md: "30%", lg: "40%" }}
        >
          New arrivals in mens and womens wear upto 30% off
        </Text>
      </Box>

      <HomeSlider />

      <Box
        width={{ base: "90%", sm: "90%", md: "90%", lg: "85%" }}
        margin="auto"
        marginTop={{ base: "20px", sm: "30px", md: "30px", lg: "40px" }}
      >
        <Image
          width="100%"
          borderRadius={"20px"}
          src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Uber-HP-Desktop-PromoStrip2-14Mar23.jpg"
        />
      </Box>

      <Box
        width={{ base: "90%", sm: "90%", md: "90%", lg: "85%" }}
        margin="auto"
      >
        <Text
          width={{ base: "100px", sm: "150px", md: "150px", lg: "190px" }}
          fontSize={{ base: "100%", sm: "150%", md: "150%", lg: "200%" }}
          fontWeight={"semibold"}
          textAlign="left"
          borderBottom={"2px"}
          borderBottomWidth="5px"
          marginTop={{ base: 2, sm: 3, md: 7, lg: 10 }}
          borderBottomColor={"#f89f17"}
        >
          Our Benefits
        </Text>

        <Flex
          marginTop={{ base: 3, sm: 4, md: 6, lg: 7 }}
          gap="20px"
          flexWrap="wrap"
          width={{ base: "100%", sm: "100%", md: "100%", lg: "100%" }}
          justifyContent={{
            base: "center",
            sm: "center",
            md: "none",
            lg: "none",
          }}
        >
          <Product
            src="https://lmsin.net/cdn-cgi/image/w=410,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-DesktopUberHP-OurBenefit1-22Feb2023.jpg"
            description="Product 1 Description"
            price="29.99"
            clothType="Cotton"
            brand="Brand A"
            onAddToCart={handleAddToCart}
          />
          <Product
            src="https://lmsin.net/cdn-cgi/image/w=410,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-DesktopUberHP-OurBenefit2-13Oct2022.jpg"
            description="Product 2 Description"
            price="39.99"
            clothType="Polyester"
            brand="Brand B"
            onAddToCart={handleAddToCart}
          />
          <Product
            src="https://lmsin.net/cdn-cgi/image/w=410,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-DesktopUberHP-OurBenefit3-13Oct2022.jpg"
            description="Product 3 Description"
            price="49.99"
            clothType="Silk"
            brand="Brand C"
            onAddToCart={handleAddToCart}
          />
          <Product
            src="https://lmsin.net/cdn-cgi/image/w=410,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-DesktopUberHP-OurBenefit3-13Oct2022.jpg"
            description="Product 3 Description"
            price="49.99"
            clothType="Silk"
            brand="Brand D"
            onAddToCart={handleAddToCart}
          />
        </Flex>
      </Box>

      <Box
        width={{ base: "90%", sm: "90%", md: "90%", lg: "85%" }}
        margin="auto"
        marginTop={{ base: "20px", sm: "30px", md: "30px", lg: "40px" }}
      >
        <Image
          width="100%"
          borderRadius={"20px"}
          src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit-cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Uber-HP-Desktop-PromoStrip3-25Mar2023.jpg"
        />
      </Box>

      <Box
        width={{ base: "90%", sm: "90%", md: "90%", lg: "85%" }}
        margin="auto"
      >
        <Text
          width={{ base: "135px", sm: "200px", md: "200px", lg: "270px" }}
          fontSize={{ base: "100%", sm: "150%", md: "150%", lg: "200%" }}
          fontWeight={"semibold"}
          textAlign="left"
          borderBottom={"2px"}
          borderBottomWidth="5px"
          marginTop={{ base: 2, sm: 3, md: 7, lg: 10 }}
          borderBottomColor={"#f89f17"}
        >
          Unmissable Offers
        </Text>
        <UnMissSlider />
      </Box>

      <Box
        width={{ base: "90%", sm: "90%", md: "90%", lg: "85%" }}
        margin="auto"
      >
        <Text
          width={{ base: "110px", sm: "170px", md: "170px", lg: "220px" }}
          fontSize={{ base: "100%", sm: "150%", md: "150%", lg: "200%" }}
          fontWeight={"semibold"}
          textAlign="left"
          borderBottom={"2px"}
          borderBottomWidth="5px"
          marginTop={{ base: 5, sm: 6, md: 7, lg: 10 }}
          borderBottomColor={"#f89f17"}
        >
          Women's Store
        </Text>

        <Box marginTop={{ base: 3, sm: 4, md: 6, lg: 7 }}>
          <Image
            width="100%"
            borderRadius={"20px"}
            src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit-cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-PromoWidget24-Desk-Banner1-07Mar23.jpg"
          />
        </Box>
        <WomenSlider />
      </Box>

      <Box
        width={{ base: "90%", sm: "90%", md: "90%", lg: "85%" }}
        margin="auto"
      >
        <Text
          width={{ base: "100px", sm: "150px", md: "150px", lg: "190px" }}
          fontSize={{ base: "100%", sm: "150%", md: "150%", lg: "200%" }}
          fontWeight={"semibold"}
          textAlign="left"
          borderBottom={"2px"}
          borderBottomWidth="5px"
          marginTop={{ base: 5, sm: 6, md: 7, lg: 10 }}
          borderBottomColor={"#f89f17"}
        >
          Mens's Store
        </Text>

        <Box marginTop={{ base: 3, sm: 4, md: 6, lg: 7 }}>
          <Image
            borderRadius={"20px"}
            width="100%"
            src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit-cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-LS-UBERHP-GiftCard-13modblock-oneBythree-A-07Mar2023.jpg"
          />
        </Box>

        <MenSlider />
      </Box>

      <Box
        width={{ base: "90%", sm: "90%", md: "90%", lg: "85%" }}
        margin="auto"
      >
        <Text
          width={{ base: "100px", sm: "150px", md: "150px", lg: "190px" }}
          fontSize={{ base: "100%", sm: "150%", md: "150%", lg: "200%" }}
          fontWeight={"semibold"}
          textAlign="left"
          borderBottom={"2px"}
          borderBottomWidth="5px"
          marginTop={{ base: 5, sm: 6, md: 7, lg: 10 }}
          borderBottomColor={"#f89f17"}
        >
          Kids Store
        </Text>

        <Box marginTop={{ base: 3, sm: 4, md: 6, lg: 7 }}>
          <Image
            borderRadius={"20px"}
            width="100%"
            src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit-cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidget26-Desk-Banner1-08Mar23.jpg"
          />
        </Box>

        <KidSlider />
      </Box>

      <Box
        width={{ base: "90%", sm: "90%", md: "90%", lg: "85%" }}
        margin="auto"
      >
        <Text
          width={{ base: "135px", sm: "200px", md: "200px", lg: "270px" }}
          fontSize={{ base: "100%", sm: "150%", md: "150%", lg: "200%" }}
          fontWeight={"semibold"}
          textAlign="left"
          borderBottom={"2px"}
          borderBottomWidth="5px"
          marginTop={{ base: 5, sm: 6, md: 7, lg: 10 }}
          borderBottomColor={"#f89f17"}
        >
          Trending Add-Ons
        </Text>

        <Box marginTop={{ base: 3, sm: 4, md: 6, lg: 7 }}>
          <Image
            borderRadius={"20px"}
            width="100%"
            src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit-cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidget23-Desk-Banner1-14Mar23.gif"
          />
        </Box>

        <TrendingSlider />
      </Box>

      <Box
        width={{ base: "90%", sm: "90%", md: "90%", lg: "85%" }}
        margin="auto"
      >
        <Text
          width={{ base: "170px", sm: "250px", md: "250px", lg: "330px" }}
          fontSize={{ base: "100%", sm: "150%", md: "150%", lg: "200%" }}
          fontWeight={"semibold"}
          textAlign="left"
          borderBottom={"2px"}
          borderBottomWidth="5px"
          marginTop={{ base: 5, sm: 6, md: 7, lg: 10 }}
          borderBottomColor={"#f89f17"}
        >
          Season's Hottest Deals
        </Text>

        <Grid
          templateColumns={{
            base: "repeat(2, 1fr)",
            sm: "repeat(3, 1fr)",
            md: "repeat(4, 1fr)",
            lg: "repeat(4, 1fr)",
          }}
          gap={6}
          marginTop={{ base: 3, sm: 4, md: 6, lg: 7 }}
        >
          <Image src="https://lmsin.net/cdn-cgi/image/w=300,q=70,fit-cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LSUber-Desktop-Promowidget18-Banner1-01March23.jpg" />

          <Image
            display={{ base: "none", sm: "none", md: "block", lg: "block" }}
            src="https://lmsin.net/cdn-cgi/image/w=300,q=70,fit-cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LSUber-Desktop-Promowidget18-Banner8-01March23.jpg"
          />
        </Grid>
      </Box>

      <Box
        width={{ base: "90%", sm: "90%", md: "90%", lg: "85%" }}
        margin="auto"
      >
        <Text
          width={{ base: "190px", sm: "280px", md: "280px", lg: "370px" }}
          fontSize={{ base: "100%", sm: "150%", md: "150%", lg: "200%" }}
          fontWeight={"semibold"}
          textAlign="left"
          borderBottom={"2px"}
          borderBottomWidth="5px"
          marginTop={{ base: 5, sm: 6, md: 7, lg: 10 }}
          borderBottomColor={"#f89f17"}
        >
          Big Brands Big Discounts
        </Text>
        <Grid
          templateColumns={{
            base: "repeat(3, 1fr)",
            sm: "repeat(4, 1fr)",
            md: "repeat(5, 1fr)",
            lg: "repeat(6, 1fr)",
          }}
          gap={4}
          marginTop={{ base: 3, sm: 4, md: 6, lg: 7 }}
        >
          <Image src="https://lmsin.net/cdn-cgi/image/w=616,q=70,fit-cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Top-Brands-Desk-Banner1-09Feb2023.jpg" />

          <Image
            display={{ base: "block", sm: "none", md: "block", lg: "block" }}
            src="https://lmsin.net/cdn-cgi/image/w=616,q=70,fit-cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Top-Brands-Desk-Banner8-16Dec2022.jpg"
          />

          <Image
            display={{ base: "none", sm: "none", md: "block", lg: "block" }}
            src="https://lmsin.net/cdn-cgi/image/w=616,q=70,fit-cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Top-Brands-Desk-Banner11-16Mar2023.jpg"
          />

        </Grid>
      </Box>

      <Box
        width={{ base: "90%", sm: "90%", md: "90%", lg: "85%" }}
        margin="auto"
      >
        <Text
          width={{ base: "140px", sm: "200px", md: "200px", lg: "270px" }}
          fontSize={{ base: "100%", sm: "150%", md: "150%", lg: "200%" }}
          fontWeight={"semibold"}
          textAlign="left"
          borderBottom={"2px"}
          borderBottomWidth="5px"
          marginTop={{ base: 5, sm: 6, md: 7, lg: 10 }}
          borderBottomColor={"#f89f17"}
        >
          Welcome Summer
        </Text>
        <Grid
          templateColumns={{
            base: "repeat(2, 1fr)",
            sm: "repeat(3, 1fr)",
            md: "repeat(4, 1fr)",
            lg: "repeat(4, 1fr)",
          }}
          gap={6}
          marginTop={{ base: 3, sm: 4, md: 6, lg: 7 }}
        >
          <Image src="https://lmsin.net/cdn-cgi/image/w=300,q=70,fit-cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidget21-Desk-Banner1-14Feb23.jpg" />

          <Image
            display={{ base: "none", sm: "none", md: "block", lg: "block" }}
            src="https://lmsin.net/cdn-cgi/image/w=300,q=70,fit-cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidget21-Desk-Banner7-14Feb23.jpg"
          />

        </Grid>
      </Box>

      <Box
        width={{ base: "90%", sm: "90%", md: "90%", lg: "85%" }}
        margin="auto"
        mb={"30px"}
      >
        <Text
          width={{ base: "190px", sm: "280px", md: "280px", lg: "370px" }}
          fontSize={{ base: "100%", sm: "150%", md: "150%", lg: "200%" }}
          fontWeight={"semibold"}
          textAlign="left"
          borderBottom={"2px"}
          borderBottomWidth="5px"
          marginTop={{ base: 5, sm: 6, md: 7, lg: 10 }}
          borderBottomColor={"#f89f17"}
        >
          Brands We Love
        </Text>
        <Grid
          templateColumns={{
            base: "repeat(3, 1fr)",
            sm: "repeat(4, 1fr)",
            md: "repeat(5, 1fr)",
            lg: "repeat(6, 1fr)",
          }}
          gap={4}
          marginTop={{ base: 3, sm: 4, md: 6, lg: 7 }}
        >
          <Image src="https://lmsin.net/cdn-cgi/image/w=616,q=70,fit-cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LSUber-Desktop-Promowidget19-Banner1-17Mar23.jpg" />

          <Image src="https://lmsin.net/cdn-cgi/image/w=616,q=70,fit-cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LSUber-Desktop-Promowidget19-Banner2-29Nov22.jpg" />

          <Image
            display={{ base: "block", sm: "none", md: "block", lg: "block" }}
            src="https://lmsin.net/cdn-cgi/image/w=616,q=70,fit-cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LSUber-Desktop-Promowidget19-Banner9-24Mar23.jpg"
          />

        </Grid>
      </Box>

      <Divider />
      <Box
        width={{ base: "90%", sm: "90%", md: "90%", lg: "85%" }}
        margin="auto"
      >
        <Footer />
      </Box>

      {showCart && (
        <Box
          position="fixed"
          top="0"
          left="0"
          width="100%"
          height="100%"
          bg="rgba(0, 0, 0, 0.5)"
          zIndex="1000"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Box bg="white" p={4} borderRadius="md" width="80%" maxWidth="600px">
            <IconButton
              icon={<FaShoppingCart />}
              aria-label="Close Cart"
              position="absolute"
              top="10px"
              right="10px"
              onClick={() => setShowCart(false)}
            />
            <Cart
              cartItems={cartItems}
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
              onRemove={handleRemove}
              onSizeChange={handleSizeChange}
              // onClose={handleClose}
            />
          </Box>
        </Box>
      )}
    </Box>
  );
}

export default HomePage;

/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-lone-blocks */
import React, { useEffect } from "react";
import {
  Box,
  Table,
  Thead,
  Tbody,
  Flex,
  Tr,
  Th,
  Td,
  Button,
  TableContainer,
  Text,
  Heading,
  Image,
  useToast,
} from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "../redux/cartReducer/action";
import Navbar from "../Components/Home/Navbar";
import Footer from "../Components/Home/Footer";

export const Cart = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const dispatch = useDispatch();
  const { cartItems } = useSelector((store) => store.cartReducer);

  let saved = 0;

  const handleAddToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      // If the product already exists, increase its quantity
      dispatch(incrementQuantity(product.id));
    } else {
      // If the product does not exist, add it
      const newProduct = { ...product, quantity: 1 };
      dispatch(addToCart([newProduct]));
      toast({
        title: `${product.title}`,
        description: "Added to Cart",
        status: "success",
        duration: 2000,
        position: "top",
        isClosable: true,
      });
    }
  };

  const handleDelete = (e) => {
    let { id, title } = e;
    dispatch(removeFromCart(id));
    toast({
      title: `${title}`,
      description: "Deleted from Cart",
      status: "success",
      duration: 2000,
      position: "top",
      isClosable: true,
    });
  };

  const handleINC = (id) => {
    dispatch(incrementQuantity(id));
  };

  const handleDEC = (id) => {
    dispatch(decrementQuantity(id));
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, e) => total + e.price * e.quantity, 0);
  };

  useEffect(() => {
    // No need to fetch data from API, as we are using Redux state
  }, []);

  return (
    <>
      <Navbar />
      <Box width="100%">
        <Text
          fontSize={"24px"}
          textAlign={"left"}
          fontWeight={300}
          borderBottom={"1px solid #e8e8e8"}
          pb={"6px"}
        >
          YOUR BASKET
        </Text>
        <TableContainer width="99%">
          <Table variant="simple">
            <Thead width="99%">
              <Tr bg={"#555555"} color={"white"} justifyContent={"space-between"}>
                <Th color={"white"}>ITEM DESCRIPTION</Th>
                <Th color={"white"}>UNIT PRICE</Th>
                <Th color={"white"}>QUANTITY</Th>
                <Th color={"white"}>SUBTOTAL</Th>
                <Th color={"#555555"}>......</Th>
                <Th color={"black"} bg={"#c6cc74"}>
                  Saving
                </Th>
              </Tr>
            </Thead>
            {cartItems.length === 0 ? (
              <Box padding={"100px"} textAlign={"center"}>
                <Heading>Your Basket Is Empty</Heading>
              </Box>
            ) : (
              <Tbody>
                {cartItems?.map((e) => {
                  saved +=
                    (Math.floor(e.price) -
                      Math.floor(e.price - (10 * e.price) / 100)) *
                    e.quantity;
                  return (
                    <Tr key={e.id} fontSize={"12px"} justifyContent={"space-between"}>
                      <Td fontSize={"12px"}>
                        <Image
                          width={"100px"}
                          height={"100px"}
                          src={e.image}
                          alt={e.title}
                        />
                        {e.brand}
                        <br />
                        {e.title}
                      </Td>
                      <Td>
                        <Text>Original Price</Text>
                        <span textDecoration={"line-through"}>
                          Rs {Math.floor(e.price)}
                        </span>
                        <br />
                        <Text>Discounted Price</Text>
                        Rs {Math.floor(e.price - (10 * e.price) / 100)}
                      </Td>
                      <Td>
                        <Button
                          isDisabled={e.quantity === 1}
                          variant={"outline"}
                          m={"2px"}
                          onClick={() => handleDEC(e.id)}
                        >
                          -
                        </Button>
                        <Button variant={"outline"} m={"2px"}>
                          {e.quantity}
                        </Button>
                        <Button
                          variant={"outline"}
                          m={"2px"}
                          onClick={() => handleINC(e.id)}
                        >
                          +
                        </Button>
                      </Td>
                      <Td>
                        Rs{" "}
                        {Math.floor(e.price - (10 * e.price) / 100) * e.quantity}
                      </Td>
                      <Td>
                        <CloseIcon onClick={() => handleDelete(e)} />
                      </Td>
                      <Td>
                        Rs{" "}
                        {Math.floor(
                          e.price - Math.floor(e.price - (10 * e.price) / 100)
                        ) * e.quantity}
                      </Td>
                    </Tr>
                  );
                })}
              </Tbody>
            )}
          </Table>
        </TableContainer>
        <Flex justifyContent={"space-between"} mt={8}>
          <Box width={"45%"} border="1px solid #e8e8e8">
            <Flex
              justifyContent={"space-between"}
              p="1rem"
              textAlign={"left"}
              fontSize="14px"
              fontWeight={400}
            >
              <Box>
                <Text>SubTotal</Text>
                <Text>Delivery Charges</Text>
              </Box>
              <Box>
                <Text>Rs {getTotalPrice() - saved}</Text>
                <Text>***</Text>
              </Box>
              <Box borderLeft={"1px solid #e8e8e8"} color="red" pl="2px">
                <Text>You saved!</Text>
                <Text>Rs {Math.floor(saved)}</Text>
              </Box>
            </Flex>
            <Flex
              textAlign={"left"}
              border={"1px solid #e8e8e8"}
              padding="2rem"
              justify={"space-around"}
            >
              <Heading as={"h6"} fontWeight="250">
                TOTAL{" "}
              </Heading>
              <Heading as={"h6"} fontWeight="250">
                Rs {getTotalPrice() - saved}
              </Heading>
            </Flex>
            <Box float={"right"}>
              <Button
                variant={"outline"}
                onClick={() => {
                  if (cartItems.length !== 0) {
                    navigate("/checkout");
                  } else {
                    toast({
                      title: "Cart is Empty.",
                      description: "Please add some products.",
                      status: "error",
                      duration: 2000,
                      isClosable: true,
                      position: "top",
                    });
                    navigate("/");
                  }
                }}
              >
                CheckOut
              </Button>
            </Box>
          </Box>
        </Flex>
      </Box>
      <Footer />
    </>
  );
};

export default Cart;

import React, { useEffect } from 'react';
import {
  VStack,
  Text,
  Button,
  Select,
  Image,
  Box,
  HStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react';

export const Cart = ({ cartItems = [], onIncrease, onDecrease, onRemove, onSizeChange }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    console.log("Cart Items in Cart Component:", cartItems);
  }, [cartItems]);

  const handlePayment = () => {
    // Implement Razorpay payment logic here
    console.log("Proceed to payment");
  };

  if (cartItems.length === 0) {
    return (
      <VStack align="start" spacing={4}>
        <Text>Your cart is empty.</Text>
      </VStack>
    );
  }

  return (
    <>
      <Button onClick={onOpen}>Open Cart</Button>
      <Modal isOpen={isOpen} onClose={onClose} size="full">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Your Cart</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack align="start" spacing={4}>
              {cartItems.map((item) => (
                <Box key={item.id} borderWidth="1px" p={4} borderRadius="md" width="100%">
                  <HStack align="start" spacing={4}>
                    <Image src={item.src} alt={item.description} boxSize="100px" objectFit="cover" />
                    <VStack align="start" spacing={2}>
                      <Text fontWeight="semibold">{item.brand}</Text>
                      <Text>{item.description}</Text>
                      <Text>${Number(item.price).toFixed(2)}</Text>
                      <Text>{item.clothType}</Text>
                      <Select
                        value={item.size}
                        onChange={(e) => onSizeChange(item.id, e.target.value)}
                        placeholder="Select size"
                      >
                        <option value="S">Small</option>
                        <option value="M">Medium</option>
                        <option value="L">Large</option>
                        <option value="XL">Extra Large</option>
                      </Select>
                      <Text>Quantity: {item.quantity}</Text>
                      <HStack spacing={2}>
                        <Button onClick={() => onIncrease(item.id)}>+</Button>
                        <Button onClick={() => onDecrease(item.id)}>-</Button>
                        <Button colorScheme="red" onClick={() => onRemove(item.id)}>
                          Remove
                        </Button>
                      </HStack>
                    </VStack>
                  </HStack>
                </Box>
              ))}
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="green" onClick={handlePayment}>
              Proceed to Payment
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Cart;

import React, { useState } from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();
  const navigate = useNavigate();

  const onClickSubmit = (e) => {
    e.preventDefault();

    // Mock login logic
    const mockCredentials = {
      email: "admin@example.com",
      password: "admin123",
    };

    if (email === mockCredentials.email && password === mockCredentials.password) {
      toast({
        title: "Login Successful",
        description: "Redirecting to the admin page.",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
      navigate("/admin");
    } else {
      toast({
        title: "Login Failed",
        description: "Invalid email or password.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      setEmail("");
      setPassword("");
    }
  };

  return (
    <Flex
      minH="100vh"
      align="center"
      justify="center"
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx="auto" maxW="lg" py={12} px={6}>
        <Stack align="center">
          <Heading fontSize="4xl">Sign in to your account</Heading>
          <Text fontSize="lg" color="gray.600">
            to access the admin page ✌️
          </Text>
        </Stack>
        <Box
          rounded="lg"
          bg={useColorModeValue("white", "gray.700")}
          boxShadow="lg"
          p={8}
        >
          <Stack spacing={4}>
            <FormControl>
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
            <Stack spacing={10}>
              <Checkbox>Remember me</Checkbox>
              <Button
                bg="blue.400"
                color="white"
                _hover={{ bg: "blue.500" }}
                onClick={onClickSubmit}
              >
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}

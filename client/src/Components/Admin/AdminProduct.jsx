import React, { useState } from "react";
import "./Admin.css";
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  ButtonGroup,
  Button,
  Grid,
  Select,
  useToast,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import AdminNavbar from "./AdminNavbar";

const mockData = {
  men: [
    { id: 1, image: "men1.jpg", title: "Men's Shirt", price: 1000 },
    { id: 2, image: "men2.jpg", title: "Men's Jeans", price: 2000 },
  ],
  women: [
    { id: 3, image: "women1.jpg", title: "Women's Dress", price: 1500 },
    { id: 4, image: "women2.jpg", title: "Women's Top", price: 800 },
  ],
};

function AdminProduct() {
  const [category, setCategory] = useState("women");
  const [products, setProducts] = useState(mockData[category]);
  const toast = useToast();

  const handleDelete = (id) => {
    setProducts((prev) => prev.filter((product) => product.id !== id));
    toast({
      title: "Product Deleted",
      description: "Product removed from the list.",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    setCategory(selectedCategory);
    setProducts(mockData[selectedCategory]);
  };

  return (
    <>
      <AdminNavbar />
      <AdminSidebar />
      <Select
        onChange={handleCategoryChange}
        width="20%"
        margin="20px auto"
        bg="#f7f8f7"
      >
        <option value="women">Women</option>
        <option value="men">Men</option>
      </Select>

      <Grid
        width="70%"
        margin="20px auto"
        templateColumns="repeat(3, 1fr)"
        gap="20px"
      >
        {products.map((product) => (
          <Card key={product.id} maxW="sm">
            <CardBody>
              <Image src={product.image} alt={product.title} borderRadius="lg" />
              <Stack mt="6" spacing="3">
                <Heading size="md">{product.title}</Heading>
                <Text color="blue.600" fontSize="2xl">
                  ₹ {product.price}
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing="2">
                <Link to={`/editProduct/${product.id}`}>
                  <Button colorScheme="blue">Edit</Button>
                </Link>
                <Button colorScheme="red" onClick={() => handleDelete(product.id)}>
                  Delete
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        ))}
      </Grid>
    </>
  );
}

export default AdminProduct;

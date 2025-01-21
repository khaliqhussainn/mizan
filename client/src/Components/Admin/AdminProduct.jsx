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
import AdminManageProduct from "./AdminManageProduct";

function AdminProduct() {
  const [category, setCategory] = useState("women");
  const [products, setProducts] = useState([]);
  const toast = useToast();

  const handleAddProduct = (product) => {
    setProducts((prev) => [...prev, { ...product, id: Date.now() }]);
    toast({
      title: "Product Added",
      description: "Product added to the list.",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

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
  };

  const filteredProducts = products.filter((product) => product.gender === category);

  return (
    <>
      <AdminNavbar />
      <AdminSidebar />
      <AdminManageProduct onAddProduct={handleAddProduct} />
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
        {filteredProducts.map((product) => (
          <Card key={product.id} maxW="sm">
            <CardBody>
              <Image src={product.images[0]} alt={product.brand} borderRadius="lg" />
              <Stack mt="6" spacing="3">
                <Heading size="md">{product.brand}</Heading>
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

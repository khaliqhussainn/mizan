import React, { useState } from "react";
import "./Admin.css";
import {
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
  useToast,
} from "@chakra-ui/react";
import AdminNavbar from "./AdminNavbar";
import AdminSidebar from "./AdminSidebar";

const initialState = {
  image: "",
  img1: "",
  img2: "",
  img3: "",
  img4: "",
  price: 0,
  actualPrice: 0,
  title: "",
  gender: "",
  category: "",
};

const AdminManageProduct = () => {
  const [product, setProduct] = useState(initialState);
  const [products, setProducts] = useState([]); // Local state for managing products
  const toast = useToast();

  const handleChange = ({ target: { name, value } }) => {
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProducts((prev) => [...prev, { ...product, id: Date.now() }]);
    toast({
      title: "Product added successfully.",
      description: "Product added to the local list.",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
    setProduct(initialState);
  };

  return (
    <>
      <AdminNavbar />
      <AdminSidebar />
      <form
        onSubmit={handleSubmit}
        style={{
          width: "30%",
          margin: "20px auto",
          border: "1px solid gainsboro",
          padding: "20px",
          background: "#f7f8f7",
        }}
      >
        <FormControl>
          <FormLabel>Image</FormLabel>
          <Input
            type="text"
            value={product.image}
            name="image"
            onChange={handleChange}
          />

          <FormLabel>Image1</FormLabel>
          <Input type="text" value={product.img1} name="img1" onChange={handleChange} />

          <FormLabel>Price</FormLabel>
          <Input
            type="number"
            value={product.price}
            name="price"
            onChange={handleChange}
          />

          <FormLabel>Gender</FormLabel>
          <Select name="gender" placeholder="Select Gender" onChange={handleChange}>
            <option value="men">Men</option>
            <option value="women">Women</option>
          </Select>

          <FormLabel>Category</FormLabel>
          <Select name="category" placeholder="Select Category" onChange={handleChange}>
            {product.gender === "women" ? (
              <>
                <option value="Kurtas and Kurtis">Kurtas and Kurtis</option>
                <option value="Dresses and Jumpsuits">Dresses and Jumpsuits</option>
              </>
            ) : (
              <>
                <option value="Casual Shirts">Casual Shirts</option>
                <option value="Jeans">Jeans</option>
              </>
            )}
          </Select>

          <Button type="submit" colorScheme="blue" mt="20px">
            Add Product
          </Button>
        </FormControl>
      </form>
    </>
  );
};

export default AdminManageProduct;

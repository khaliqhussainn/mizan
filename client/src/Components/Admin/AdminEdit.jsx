import React, { useState, useEffect } from "react";
import "./Admin.css";
import { FormControl, FormLabel, Input, Select, Button, useToast } from "@chakra-ui/react";

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

const AdminEdit = () => {
  const [product, setProduct] = useState(initialState);
  const toast = useToast();

  const handleChange = ({ target: { name, value } }) => {
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Product Edited Successfully",
      description: "The product has been updated locally.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    console.log("Updated Product:", product);
  };

  useEffect(() => {
    // Mock fetching product data
    const mockProduct = {
      image: "mock-image.jpg",
      img1: "mock-img1.jpg",
      img2: "mock-img2.jpg",
      img3: "mock-img3.jpg",
      img4: "mock-img4.jpg",
      price: 100,
      actualPrice: 150,
      title: "Mock Product",
      gender: "men",
      category: "Casual Shirts",
    };
    setProduct(mockProduct);
  }, []);

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <FormControl>
        <FormLabel>Image</FormLabel>
        <Input type="text" value={product.image} name="image" onChange={handleChange} />

        {/* Other Input Fields */}
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

        <Button type="submit" bg="skyblue" mt="20px">
          Edit Product
        </Button>
      </FormControl>
    </form>
  );
};

export default AdminEdit;

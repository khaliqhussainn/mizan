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

const initialState = {
  images: [""],
  price: 0,
  brand: "",
  description: "",
  clothType: "",
  sizes: [],
  sizeChart: [],
  outfitType: "",
  subCategory: "",
  colorType: "",
  numberOfPieces: "",
  productType: "",
  season: "",
  shirtFabrics: "",
  trouserFabric: "",
  dupattaFabric: "",
  workTechnique: "",
  gender: "",
  category: "",
  section: "", // Add section field
};

const AdminManageProduct = ({ onAddProduct }) => {
  const [product, setProduct] = useState(initialState);
  const toast = useToast();

  const handleChange = ({ target: { name, value } }) => {
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (index, value) => {
    const images = [...product.images];
    images[index] = value;
    setProduct((prev) => ({ ...prev, images }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddProduct(product);
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
        {product.images.map((image, index) => (
          <div key={index}>
            <FormLabel>{`Image ${index + 1}`}</FormLabel>
            <Input
              type="text"
              value={image}
              name={`image${index + 1}`}
              onChange={(e) => handleImageChange(index, e.target.value)}
            />
          </div>
        ))}

        <FormLabel>Price</FormLabel>
        <Input
          type="number"
          value={product.price}
          name="price"
          onChange={handleChange}
        />

        <FormLabel>Brand</FormLabel>
        <Input
          type="text"
          value={product.brand}
          name="brand"
          onChange={handleChange}
        />

        <FormLabel>Description</FormLabel>
        <Input
          type="text"
          value={product.description}
          name="description"
          onChange={handleChange}
        />

        <FormLabel>Cloth Type</FormLabel>
        <Input
          type="text"
          value={product.clothType}
          name="clothType"
          onChange={handleChange}
        />

        <FormLabel>Sizes</FormLabel>
        <Input
          type="text"
          value={product.sizes}
          name="sizes"
          onChange={handleChange}
        />

        <FormLabel>Size Chart</FormLabel>
        <Input
          type="text"
          value={product.sizeChart}
          name="sizeChart"
          onChange={handleChange}
        />

        <FormLabel>Outfit Type</FormLabel>
        <Input
          type="text"
          value={product.outfitType}
          name="outfitType"
          onChange={handleChange}
        />

        <FormLabel>Sub-Category</FormLabel>
        <Input
          type="text"
          value={product.subCategory}
          name="subCategory"
          onChange={handleChange}
        />

        <FormLabel>Color Type</FormLabel>
        <Input
          type="text"
          value={product.colorType}
          name="colorType"
          onChange={handleChange}
        />

        <FormLabel>Number of Pieces</FormLabel>
        <Input
          type="text"
          value={product.numberOfPieces}
          name="numberOfPieces"
          onChange={handleChange}
        />

        <FormLabel>Product Type</FormLabel>
        <Input
          type="text"
          value={product.productType}
          name="productType"
          onChange={handleChange}
        />

        <FormLabel>Season</FormLabel>
        <Input
          type="text"
          value={product.season}
          name="season"
          onChange={handleChange}
        />

        <FormLabel>Shirt Fabrics</FormLabel>
        <Input
          type="text"
          value={product.shirtFabrics}
          name="shirtFabrics"
          onChange={handleChange}
        />

        <FormLabel>Trouser Fabric</FormLabel>
        <Input
          type="text"
          value={product.trouserFabric}
          name="trouserFabric"
          onChange={handleChange}
        />

        <FormLabel>Dupatta Fabric</FormLabel>
        <Input
          type="text"
          value={product.dupattaFabric}
          name="dupattaFabric"
          onChange={handleChange}
        />

        <FormLabel>Work Technique</FormLabel>
        <Input
          type="text"
          value={product.workTechnique}
          name="workTechnique"
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

        <FormLabel>Section</FormLabel>
        <Select name="section" placeholder="Select Section" onChange={handleChange}>
          <option value="stitched">Stitched</option>
          <option value="unstitched">Unstitched</option>
          <option value="sale">Sale</option>
        </Select>

        <Button type="submit" colorScheme="blue" mt="20px">
          Add Product
        </Button>
      </FormControl>
    </form>
  );
};

export default AdminManageProduct;

import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Cart  from "../pages/Cart";
import CartPage  from "../pages/CartPage";
import AdminProduct from "./Admin/AdminProduct";
import AdminManageProduct from "./Admin/AdminManageProduct";
import AdminEdit from "./Admin/AdminEdit";
import ManageUsers from "./Admin/ManageUsers";
import AdminLogin from "./Admin/AdminLogin";
import Admin from "../pages/Admin";
import ProductDetail from "../Components/Home/ProductDetail";
import WomenSlider from "../Components/Home/WomenSlider";
  

function MainRoutes() {
  const handleAddToCart = (product) => {
    console.log("Product added to cart:", product);
  };
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/" element={<HomePage />} />

      {/* <Route
        path="/checkout"
        element={
          <PrivateRoutes>
            <Checkout />
          </PrivateRoutes>
        }
      /> */}
      {/* <Route path="/payment" element={<Payment />} /> */}
      <Route path="/cart" element={<Cart />} />
      <Route path="/products" element={<AdminProduct />}></Route>
      <Route path="/manageProduct" element={<AdminManageProduct />}></Route>
      <Route path="/editProduct/:id" element={<AdminEdit />}></Route>
      <Route path="/users" element={<ManageUsers />}></Route>
      <Route path="/adminLogin" element={<AdminLogin />}></Route>
      <Route path="/admin" element={<Admin />}></Route>
      <Route path="/" element={<WomenSlider handleAddToCart={handleAddToCart} />} />
      <Route path="/product-detail" element={<ProductDetail />} />
      <Route path="/cartPage" element={<CartPage />} />
    </Routes>
  );
}

export default MainRoutes;

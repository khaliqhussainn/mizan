import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Cart from "../pages/Cart";
import AdminProduct from "./Admin/AdminProduct";
import AdminManageProduct from "./Admin/AdminManageProduct";
import AdminEdit from "./Admin/AdminEdit";
import ManageUsers from "./Admin/ManageUsers";
import AdminLogin from "./Admin/AdminLogin";
import Admin from "../pages/Admin";
import ProductDetail from "../Components/Home/ProductDetail";
import WomenSlider from "../Components/Home/WomenSlider";
import SaleSlider from "../Components/Home/SaleSlider";
import ContactForm from "./Home/ContactForm";

function MainRoutes({ cartItems, onAddToCart, onIncrease, onDecrease, onRemove, onSizeChange }) {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <HomePage
            cartItems={cartItems}
            onAddToCart={onAddToCart}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
            onRemove={onRemove}
            onSizeChange={onSizeChange}
          />
        }
      />
      <Route
        path="/cart"
        element={
          <Cart
            cartItems={cartItems}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
            onRemove={onRemove}
            onSizeChange={onSizeChange}
          />
        }
      />
      <Route path="/products" element={<AdminProduct />} />
      <Route path="/manageProduct" element={<AdminManageProduct />} />
      <Route path="/editProduct/:id" element={<AdminEdit />} />
      <Route path="/users" element={<ManageUsers />} />
      <Route path="/adminLogin" element={<AdminLogin />} />
      <Route path="/admin" element={<Admin />} />
      <Route
        path="/contact"
        element={<ContactForm />}
      />
      <Route
        path="/sale"
        element={<SaleSlider handleAddToCart={onAddToCart} />}
      />
      <Route
        path="/women"
        element={<WomenSlider handleAddToCart={onAddToCart} />}
      />
      <Route
        path="/product-detail"
        element={<ProductDetail onAddToCart={onAddToCart} />}
      />
    </Routes>
  );
}

export default MainRoutes;

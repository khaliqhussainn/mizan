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
import UnMissSlider from "./Home/UnMissSlider";
import TrendingSlider from "./Home/TrendingSlider";
import AuthPage from "../pages/AuthPage"; // Import the AuthPage component
// import SignUpPage from "../pages/SignUpPage";
import Profile from "./Home/Profile";

function MainRoutes({
  cartItems,
  onAddToCart,
  onIncrease,
  onDecrease,
  onRemove,
  onSizeChange,
}) {
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
      <Route path="/contact" element={<ContactForm />} />
      <Route
        path="/sale"
        element={<SaleSlider handleAddToCart={onAddToCart} />}
      />
      <Route
        path="/women"
        element={<WomenSlider handleAddToCart={onAddToCart} />}
      />
      <Route
        path="/unmiss"
        element={<UnMissSlider handleAddToCart={onAddToCart} />}
      />
      <Route
        path="/Trending"
        element={<TrendingSlider handleAddToCart={onAddToCart} />}
      />
      <Route
        path="/product-detail"
        element={
          <ProductDetail
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
        path="/auth"
        element={
          <AuthPage
            cartItems={cartItems}
            onAddToCart={onAddToCart}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
            onRemove={onRemove}
            onSizeChange={onSizeChange}
          />
        }
      />{" "}
      {/* <Route path="/signup" element={<SignUpPage />} /> */}
      <Route
        path="profile"
        element={
          <Profile
            cartItems={cartItems}
            onAddToCart={onAddToCart}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
            onRemove={onRemove}
            onSizeChange={onSizeChange}
          />
        }
      />
    </Routes>
  );
}

export default MainRoutes;

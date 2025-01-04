import React, { useState } from 'react';
import "./App.css";
import MainRoutes from "./Components/MainRoutes";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) => item.description === product.description
      );
      if (existingItem) {
        return prevItems.map((item) =>
          item.description === product.description
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [
        ...prevItems,
        { ...product, quantity: 1, id: product.id || Date.now(), size: "" },
      ];
    });
  };

  const handleIncrease = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrease = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const handleRemove = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const handleSizeChange = (id, newSize) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, size: newSize } : item
      )
    );
  };

  return (
    <div className="App">
      <MainRoutes
        cartItems={cartItems}
        onAddToCart={handleAddToCart}
        onIncrease={handleIncrease}
        onDecrease={handleDecrease}
        onRemove={handleRemove}
        onSizeChange={handleSizeChange}
      />
    </div>
  );
}

export default App;

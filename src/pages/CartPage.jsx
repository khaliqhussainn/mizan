import React, { useEffect, useState } from 'react';
import { FaTimes } from 'react-icons/fa';

export const CartPage = ({ cartItems = [], onIncrease, onDecrease, onRemove, onSizeChange, onClose }) => {
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    console.log("Cart Items in Cart Component:", cartItems);
    const calculateTotalPrice = () => {
      return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };
    setTotalPrice(calculateTotalPrice());
  }, [cartItems]);

  const handlePayment = () => {
    // Implement Razorpay payment logic here
    console.log("Proceed to payment");
  };

  if (cartItems.length === 0) {
    return (
      <div className="cart-empty">
        <p>Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="cart-header">
        <h2>Your Cart</h2>
        <FaTimes className="close-button" onClick={onClose} />
      </div>
      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.src} alt={item.description} className="cart-item-image" />
            <div className="cart-item-details">
              <h3>{item.brand}</h3>
              <p>{item.description}</p>
              <p>${Number(item.price).toFixed(2)}</p>
              <p>{item.clothType}</p>
              <select
                value={item.size}
                onChange={(e) => onSizeChange(item.id, e.target.value)}
                className="size-select"
              >
                <option value="S">Small</option>
                <option value="M">Medium</option>
                <option value="L">Large</option>
                <option value="XL">Extra Large</option>
              </select>
              <p>Quantity: {item.quantity}</p>
              <div className="quantity-buttons">
                <button onClick={() => onIncrease(item.id)}>+</button>
                <button onClick={() => onDecrease(item.id)}>-</button>
                <button className="remove-button" onClick={() => onRemove(item.id)}>Remove</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-footer">
        <p>Total: ${totalPrice.toFixed(2)}</p>
        <button className="payment-button" onClick={handlePayment}>Proceed to Payment</button>
      </div>
    </div>
  );
};

export default CartPage;

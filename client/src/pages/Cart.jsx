import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import "./style.css";

const Cart = ({ cartItems = [], onIncrease, onDecrease, onRemove, onSizeChange }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [user, setUser] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [showLoginPopup, setShowLoginPopup] = useState(false);

  useEffect(() => {
    const calculateTotalPrice = () => {
      return cartItems.reduce((total, item) => {
        const itemPrice = item.price ? parseFloat(item.price) : 0;
        const itemQuantity = item.quantity ? parseInt(item.quantity, 10) : 0;
        return total + itemPrice * itemQuantity;
      }, 0);
    };
    setTotalPrice(calculateTotalPrice());

    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          uid: user.uid,
          displayName: user.displayName,
          email: user.email,
          phoneNumber: user.phoneNumber
        });
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, [cartItems]);

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    if (!user) {
      setShowLoginPopup(true);
      return;
    }

    const res = await loadRazorpayScript();

    if (!res) {
      alert('Razorpay SDK failed to load. Are you online?');
      return;
    }

    try {
      const orderResponse = await axios.post('https://mizan-backend.vercel.app/create-order', {
        amount: totalPrice,
        currency: 'INR'
      });

      const options = {
        key: process.env.REACT_APP_RAZORPAY_KEY,
        amount: orderResponse.data.amount,
        currency: orderResponse.data.currency,
        name: "Your Store Name",
        description: "Payment for your order",
        order_id: orderResponse.data.id,
        handler: async (response) => {
          console.log(response);
          setSuccessMessage('Payment Successful');

          // Send payment success notification
          await axios.post('https://mizan-backend.vercel.app/payment-success', {
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_order_id: response.razorpay_order_id,
            razorpay_signature: response.razorpay_signature,
            cartItems: cartItems,
            user: {
              email: user.email,
              uid: user.uid,
              displayName: user.displayName,
              phoneNumber: user.phoneNumber
            }
          });

          // Remove successfully ordered items from the cart
          cartItems.forEach(item => onRemove(item.id));
        },
        prefill: {
          name: user ? user.displayName : "Customer Name",
          email: user ? user.email : "customer@example.com",
          contact: user ? user.phoneNumber : "9999999999"
        },
        notes: {
          address: "Corporate Office"
        },
        theme: {
          color: "#3399cc"
        }
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (error) {
      console.error('Error creating order:', error);
      alert('Error creating order. Please try again.');
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="cart-empty">
        <p>Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {successMessage && (
        <div className="success-message">
          <p>{successMessage}</p>
        </div>
      )}
      {showLoginPopup && (
        <div className="login-popup">
          <p>Please sign up or log in to proceed to payment.</p>
          <button onClick={() => setShowLoginPopup(false)}>Close</button>
        </div>
      )}
      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img
              src={item.images && item.images[0] ? item.images[0] : 'path/to/default/image.jpg'}
              alt={item.description}
              className="cart-item-image"
            />
            <div className="cart-item-details">
              <h3>{item.brand}</h3>
              <p>{item.description}</p>
              <p>₹{Number(item.price).toFixed(2)}</p>
              <p>{item.clothType}</p>
              <select
                value={item.size}
                onChange={(e) => onSizeChange(item.id, e.target.value)}
                className="size-select"
              >
                <option value="">Select Size</option>
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
        <p>Total: ₹{totalPrice.toFixed(2)}</p>
        <button className="payment-button" onClick={handlePayment}>Proceed to Payment</button>
      </div>
    </div>
  );
};

export default Cart;

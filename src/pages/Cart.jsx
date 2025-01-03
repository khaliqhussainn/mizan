import React, { useEffect, useState } from 'react';

const Cart = ({ cartItems = [], onIncrease, onDecrease, onRemove, onSizeChange }) => {
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    console.log("Cart Items in Cart Component:", cartItems);
    const calculateTotalPrice = () => {
      return cartItems.reduce((total, item) => {
        const itemPrice = item.price ? parseFloat(item.price) : 0;
        const itemQuantity = item.quantity ? parseInt(item.quantity, 10) : 0;
        return total + itemPrice * itemQuantity;
      }, 0);
    };
    setTotalPrice(calculateTotalPrice());
  }, [cartItems]);

  // const handlePayment = () => {
  //   // Implement Razorpay payment logic here
  //   console.log("Proceed to payment");
  //   // Example Razorpay integration (you need to replace with actual Razorpay code)
  //   const options = {
  //     key: "YOUR_RAZORPAY_KEY", // Replace with your actual Razorpay key
  //     amount: totalPrice * 100, // Amount in paise
  //     currency: "INR",
  //     name: "Your Store Name",
  //     description: "Test Transaction",
  //     handler: function (response) {
  //       console.log(response);
  //       alert("Payment Successful");
  //     },
  //     prefill: {
  //       name: "Customer Name",
  //       email: "customer@example.com",
  //       contact: "9999999999"
  //     },
  //     notes: {
  //       address: "Corporate Office"
  //     },
  //     theme: {
  //       color: "#3399cc"
  //     }
  //   };

  //   const paymentObject = new window.Razorpay(options);
  //   paymentObject.open();
  // };
  const handlePayment = () => {
    const options = {
      key: "YOUR_RAZORPAY_KEY",
      amount: totalPrice * 100,
      currency: "INR",
      name: "Your Store Name",
      handler: (response) => {
        console.log(response);
        alert("Payment Successful");
      },
    };
  
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
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
              <p>${Number(item.price).toFixed(2)}</p>
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
        <p>Total: ${totalPrice.toFixed(2)}</p>
        <button className="payment-button" onClick={handlePayment}>Proceed to Payment</button>
      </div>
    </div>
  );
};

export default Cart;

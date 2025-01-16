const express = require('express');
const Razorpay = require('razorpay');
const cors = require('cors');
const bodyParser = require('body-parser');
const crypto = require('crypto'); // Import the crypto module
const twilio = require('twilio');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET
});

const twilioClient = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

// In-memory storage for order history (replace with a real database)
let orderHistory = {};

app.post('/create-order', async (req, res) => {
  const { amount, currency } = req.body;

  const options = {
    amount: amount * 100, // amount in the smallest currency unit (paisa for INR)
    currency: currency,
    payment_capture: 1
  };

  console.log('Order creation options:', options);

  try {
    const order = await razorpay.orders.create(options);
    res.json(order);
  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).json({ error: error.message, details: error });
  }
});

app.post('/payment-success', async (req, res) => {
  const { razorpay_payment_id, razorpay_order_id, razorpay_signature, cartItems, user } = req.body;

  // Verify the payment signature (optional but recommended)
  const hmac = crypto.createHmac('sha256', process.env.RAZORPAY_KEY_SECRET);
  hmac.update(razorpay_order_id + "|" + razorpay_payment_id);
  const generated_signature = hmac.digest('hex');

  if (generated_signature === razorpay_signature) {
    // Store order history
    if (!orderHistory[user.uid]) {
      orderHistory[user.uid] = [];
    }
    orderHistory[user.uid].push({
      order_id: razorpay_order_id,
      amount: cartItems.reduce((total, item) => total + item.price * item.quantity, 0) * 100,
      status: 'Successful',
      created_at: Date.now()
    });

    // Send SMS notification
    try {
      await twilioClient.messages.create({
        body: `Payment successful for order ID: ${razorpay_order_id}\nProducts:\n${cartItems.map(item => `${item.brand} - ${item.description} - ₹${item.price}`).join('\n')}`,
        from: process.env.TWILIO_PHONE_NUMBER, // Change to your Twilio number
        to: user.phoneNumber // Change to the phone number you want to notify
      });
      console.log('SMS sent');
    } catch (error) {
      console.error('Error sending SMS:', error);
    }

    res.json({ message: 'Payment successful and notifications sent' });
  } else {
    res.status(400).json({ error: 'Invalid payment signature' });
  }
});

app.get('/order-history/:uid', async (req, res) => {
  const { uid } = req.params;

  try {
    const history = orderHistory[uid] || [];
    res.json(history);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

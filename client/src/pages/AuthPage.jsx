import React, { useState } from "react";
import { initializeApp } from "firebase/app";
import Navbar from "../Components/Home/Navbar";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

const firebaseConfig = {
  apiKey: "AIzaSyBlESnGYU627MqtHuPlnfFPkcU4Q9bnA4s",
  authDomain: "mizan-489df.firebaseapp.com",
  projectId: "mizan-489df",
  storageBucket: "mizan-489df.firebasestorage.app",
  messagingSenderId: "298862257383",
  appId: "1:298862257383:web:e475d35a3bd122a5d9ee42",
  measurementId: "G-74B0XFZ7FG",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const styles = `
  .auth-container {
    min-height: 100vh;
    background-color: #f5f5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    font-family: 'Arial', sans-serif;
  }

  .auth-box {
    background: white;
    padding: 40px;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 400px;
  }

  .auth-header {
    text-align: center;
    margin-bottom: 30px;
  }

  .auth-header h2 {
    color: #333;
    font-size: 24px;
    margin-bottom: 10px;
  }

  .auth-toggle {
    color: #666;
    font-size: 14px;
  }

  .auth-toggle button {
    background: none;
    border: none;
    color: #4a90e2;
    cursor: pointer;
    text-decoration: underline;
    padding: 0;
    margin-left: 5px;
  }

  .auth-toggle button:hover {
    color: #357abd;
  }

  .input-group {
    margin-bottom: 20px;
  }

  .input-field {
    width: 100%;
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 6px;
    font-size: 14px;
    transition: border-color 0.3s;
    box-sizing: border-box;
    margin-bottom: 10px;
  }

  .input-field:focus {
    border-color: #4a90e2;
    outline: none;
  }

  .auth-button {
    width: 100%;
    padding: 12px;
    border: none;
    border-radius: 6px;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s;
    margin-bottom: 15px;
  }

  .primary-button {
    background-color: #4a90e2;
    color: white;
  }

  .primary-button:hover {
    background-color: #357abd;
  }

  .primary-button:disabled {
    background-color: #9cc7f3;
    cursor: not-allowed;
  }

  .google-button {
    background-color: white;
    color: #333;
    border: 1px solid #ddd;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  .google-button:hover {
    background-color: #f5f5f5;
  }

  .divider {
    display: flex;
    align-items: center;
    text-align: center;
    margin: 20px 0;
  }

  .divider::before,
  .divider::after {
    content: '';
    flex: 1;
    border-bottom: 1px solid #ddd;
  }

  .divider span {
    padding: 0 10px;
    color: #666;
    font-size: 14px;
    background: white;
  }

  .message {
    padding: 12px;
    border-radius: 6px;
    margin-top: 15px;
    font-size: 14px;
  }

  .message.success {
    background-color: #d4edda;
    color: #155724;
    border: 1px solid #c3e6cb;
  }

  .message.error {
    background-color: #f8d7da;
    color: #721c24;
    border: 1px solid #f5c6cb;
  }

  .loading {
    animation: pulse 1.5s infinite;
  }

  @keyframes pulse {
    0% { opacity: 1; }
    50% { opacity: 0.5; }
    100% { opacity: 1; }
  }

  @media (max-width: 480px) {
    .auth-box {
      padding: 20px;
    }
  }
`;

const AuthPage = (cartItems, onAddToCart, onIncrease, onDecrease, onRemove, onSizeChange) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleMessage = (text, type = "error") => {
    setMessage(text);
    setMessageType(type);
    setLoading(false);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^\+[1-9]\d{1,14}$/;
    return phoneRegex.test(phone);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const googleSignIn = async () => {
    setLoading(true);
    const provider = new GoogleAuthProvider();
    try {
      const userCredential = await signInWithPopup(auth, provider);
      handleMessage(`Welcome ${userCredential.user.email}!`, "success");
      setTimeout(() => navigate("/profile"), 1500);
    } catch (error) {
      handleMessage(error.message);
    }
  };

  const signUp = async () => {
    if (!validateEmail(email)) {
      handleMessage("Please enter a valid email address");
      return;
    }
    if (password.length < 6) {
      handleMessage("Password must be at least 6 characters long");
      return;
    }
    if (!phoneNumber || !validatePhone(phoneNumber)) {
      handleMessage("Please enter a valid phone number (e.g., +1234567890)");
      return;
    }

    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      // Here you can store the phone number in your database associated with the user
      // For example, using Firestore or your backend service
      handleMessage(
        `Account created successfully! Welcome ${userCredential.user.email}`,
        "success"
      );
      setTimeout(() => navigate("/profile"), 1500);
    } catch (error) {
      handleMessage(error.message);
    }
  };

  const signIn = async () => {
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      handleMessage(`Welcome back ${userCredential.user.email}!`, "success");
      setTimeout(() => navigate("/"), 1500);
    } catch (error) {
      handleMessage(error.message);
    }
  };

  return (
    <>
      <style>{styles}</style>
      <Navbar
        cartItems={cartItems}
        onIncrease={onIncrease}
        onDecrease={onDecrease}
        onRemove={onRemove}
        onSizeChange={onSizeChange}
      />
      <div className="auth-container">
        <div className="auth-box">
          <div className="auth-header">
            <h2>
              {isSignUp ? "Create your account" : "Sign in to your account"}
            </h2>
            <div className="auth-toggle">
              <span>Or</span>
              <button onClick={() => setIsSignUp(!isSignUp)}>
                {isSignUp
                  ? "sign in to existing account"
                  : "create a new account"}
              </button>
            </div>
          </div>

          <div className="input-group">
            <input
              type="email"
              className="input-field"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              className="input-field"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {isSignUp && (
              <input
                type="tel"
                className="input-field"
                placeholder="Phone number (e.g., start with +91)"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            )}
          </div>

          <button
            onClick={isSignUp ? signUp : signIn}
            disabled={loading}
            className={`auth-button primary-button ${loading ? "loading" : ""}`}
          >
            {loading ? "Processing..." : isSignUp ? "Sign up" : "Sign in"}
          </button>

          <div className="divider">
            <span>Or continue with</span>
          </div>

          <button
            onClick={googleSignIn}
            disabled={loading}
            className="auth-button google-button"
          >
            <svg width="18" height="18" viewBox="0 0 48 48">
              <path
                fill="#FFC107"
                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
              />
              <path
                fill="#FF3D00"
                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
              />
              <path
                fill="#4CAF50"
                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
              />
              <path
                fill="#1976D2"
                d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
              />
            </svg>
            Sign in with Google
          </button>

          {message && <div className={`message ${messageType}`}>{message}</div>}
        </div>
      </div>
    </>
  );
};

export default AuthPage;

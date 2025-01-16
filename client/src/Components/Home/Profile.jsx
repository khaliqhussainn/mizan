import React, { useEffect, useState } from "react";
import { getAuth, updateProfile, signOut } from "firebase/auth";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import {
  Camera,
  Mail,
  User,
  LogOut,
  Save,
  Calendar,
  Phone,
  MapPin,
  Globe,
  Twitter,
  Instagram,
  Facebook,
  ShoppingBag,
  Clock,
  CreditCard,
} from "lucide-react";
import "../../CSS/auth.css";
import axios from "axios";

const Profile = ({ cartItems, onAddToCart, onIncrease, onDecrease, onRemove, onSizeChange }) => {
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [displayName, setDisplayName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [location, setLocation] = useState("");
  const [bio, setBio] = useState("");
  const [twitter, setTwitter] = useState("");
  const [instagram, setInstagram] = useState("");
  const [facebook, setFacebook] = useState("");
  const [joinDate] = useState(new Date().toLocaleDateString());
  const [updateMessage, setUpdateMessage] = useState({ type: "", message: "" });
  const [orderHistory, setOrderHistory] = useState([]);
  const navigate = useNavigate();
  const auth = getAuth();
  const storage = getStorage();

  useEffect(() => {
    const currentUser = auth.currentUser;
    if (!currentUser) {
      setUser(null);
    } else {
      setUser({
        uid: currentUser.uid,
        displayName: currentUser.displayName || "",
        email: currentUser.email,
        phoneNumber: currentUser.phoneNumber || "",
        location: currentUser.location || "",
        bio: currentUser.bio || "",
        twitter: currentUser.twitter || "",
        instagram: currentUser.instagram || "",
        facebook: currentUser.facebook || "",
      });

      // Fetch order history
      const fetchOrderHistory = async () => {
        try {
          const response = await axios.get(
            `http://localhost:5000/order-history/${currentUser.uid}`
          );
          setOrderHistory(response.data);
        } catch (error) {
          console.error("Error fetching order history:", error);
        }
      };

      fetchOrderHistory();
    }
  }, [auth, navigate]);

  const handleImageUpload = async (event) => {
    try {
      setIsLoading(true);
      const file = event.target.files[0];

      // Create a reference to the storage location
      const storageRef = ref(storage, `profile_images/${user.uid}`);

      // Upload the file
      await uploadBytes(storageRef, file);

      // Get the download URL
      const downloadURL = await getDownloadURL(storageRef);

      // Update user profile with new photo URL
      await updateProfile(auth.currentUser, {
        photoURL: downloadURL,
      });

      setUser({ ...auth.currentUser, photoURL: downloadURL });
      setUpdateMessage({
        type: "success",
        message: "Profile picture updated successfully!",
      });
    } catch (error) {
      setUpdateMessage({
        type: "error",
        message: "Failed to update profile picture.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleUpdateProfile = async () => {
    try {
      setIsLoading(true);
      await updateProfile(auth.currentUser, {
        displayName: displayName,
      });

      // Update other fields in the user's custom claims or a separate database
      // For example, using Firestore or your backend service
      // Here we are just updating the local state for demonstration
      setUser({
        ...auth.currentUser,
        displayName,
        phoneNumber,
        location,
        bio,
        twitter,
        instagram,
        facebook,
      });

      setIsEditing(false);
      setUpdateMessage({
        type: "success",
        message: "Profile updated successfully!",
      });
    } catch (error) {
      setUpdateMessage({ type: "error", message: "Failed to update profile." });
    } finally {
      setIsLoading(false);
    }
    setTimeout(() => setUpdateMessage({ type: "", message: "" }), 3000);
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  if (!user) {
    return (
      <div className="auth-container">
        <div className="auth-box">
          <div className="auth-header">
            <h2>Please sign up or log in to edit your profile</h2>
          </div>
          <button
            onClick={() => navigate("/auth")}
            className="auth-button primary-button"
          >
            Go to Sign Up/Log In
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <Navbar
        cartItems={cartItems}
        onIncrease={onIncrease}
        onDecrease={onDecrease}
        onRemove={onRemove}
        onSizeChange={onSizeChange}
      />
      <div className="profile-container">
        <div className="profile-card">
          <div className="profile-header">
            <div className="header-content">
              <h1>My Profile</h1>
              <p>Manage your personal information</p>
            </div>
            <div className="profile-image-container">
              <div className="image-wrapper">
                <img
                  src={user.photoURL || "/api/placeholder/120/120"}
                  alt="Profile"
                  className="profile-image"
                />
                {isLoading && (
                  <div className="image-loading-overlay">
                    <div className="loading-spinner-small"></div>
                  </div>
                )}
              </div>
              <label className="camera-button">
                <Camera size={16} />
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  style={{ display: "none" }}
                />
              </label>
            </div>
          </div>

          <div className="profile-content">
            {updateMessage.message && (
              <div className={`alert ${updateMessage.type}`}>
                {updateMessage.message}
              </div>
            )}

            <div className="profile-name">
              {isEditing ? (
                <div className="edit-name-container">
                  <input
                    type="text"
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                    className="name-input"
                    placeholder="Enter your name"
                  />
                  <button
                    onClick={handleUpdateProfile}
                    className="save-button"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <div className="loading-spinner-tiny"></div>
                    ) : (
                      <Save size={20} />
                    )}
                  </button>
                </div>
              ) : (
                <div className="display-name">
                  <h2>{user.displayName || "Set your display name"}</h2>
                  <button
                    onClick={() => setIsEditing(true)}
                    className="edit-button"
                  >
                    <User size={20} />
                  </button>
                </div>
              )}
            </div>

            <div className="profile-details">
              <div className="detail-item">
                <Mail className="icon" />
                <div className="detail-content">
                  <p className="label">Email</p>
                  <p className="value">{user.email}</p>
                </div>
              </div>

              <div className="detail-item">
                <Phone className="icon" />
                <div className="detail-content">
                  <p className="label">Phone</p>
                  {isEditing ? (
                    <input
                      type="tel"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="detail-input"
                      placeholder="Enter your phone number"
                    />
                  ) : (
                    <p className="value">{user.phoneNumber}</p>
                  )}
                </div>
              </div>

              <div className="detail-item">
                <MapPin className="icon" />
                <div className="detail-content">
                  <p className="label">Location</p>
                  {isEditing ? (
                    <input
                      type="text"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="detail-input"
                      placeholder="Enter your location"
                    />
                  ) : (
                    <p className="value">{user.location}</p>
                  )}
                </div>
              </div>

              <div className="detail-item">
                <Calendar className="icon" />
                <div className="detail-content">
                  <p className="label">Joined</p>
                  <p className="value">{joinDate}</p>
                </div>
              </div>

              <div className="detail-item">
                <Globe className="icon" />
                <div className="detail-content">
                  <p className="label">Bio</p>
                  {isEditing ? (
                    <textarea
                      value={bio}
                      onChange={(e) => setBio(e.target.value)}
                      className="detail-textarea"
                      placeholder="Write something about yourself"
                    />
                  ) : (
                    <p className="value">{user.bio}</p>
                  )}
                </div>
              </div>

              <div className="detail-item">
                <Twitter className="icon" />
                <div className="detail-content">
                  <p className="label">Twitter</p>
                  {isEditing ? (
                    <input
                      type="text"
                      value={twitter}
                      onChange={(e) => setTwitter(e.target.value)}
                      className="detail-input"
                      placeholder="Enter your Twitter handle"
                    />
                  ) : (
                    <p className="value">{user.twitter}</p>
                  )}
                </div>
              </div>

              <div className="detail-item">
                <Instagram className="icon" />
                <div className="detail-content">
                  <p className="label">Instagram</p>
                  {isEditing ? (
                    <input
                      type="text"
                      value={instagram}
                      onChange={(e) => setInstagram(e.target.value)}
                      className="detail-input"
                      placeholder="Enter your Instagram handle"
                    />
                  ) : (
                    <p className="value">{user.instagram}</p>
                  )}
                </div>
              </div>

              <div className="detail-item">
                <Facebook className="icon" />
                <div className="detail-content">
                  <p className="label">Facebook</p>
                  {isEditing ? (
                    <input
                      type="text"
                      value={facebook}
                      onChange={(e) => setFacebook(e.target.value)}
                      className="detail-input"
                      placeholder="Enter your Facebook handle"
                    />
                  ) : (
                    <p className="value">{user.facebook}</p>
                  )}
                </div>
              </div>
            </div>

            <div className="order-history">
              <h2>Order History</h2>
              {orderHistory.length > 0 ? (
                orderHistory.map((order, index) => (
                  <div key={index} className="order-item">
                    <div className="order-header">
                      <ShoppingBag size={20} />
                      <p>Order ID: {order.order_id}</p>
                    </div>
                    <div className="order-details">
                      <div className="order-detail-item">
                        <CreditCard size={20} />
                        <p>Amount: ₹{order.amount / 100}</p>
                      </div>
                      <div className="order-detail-item">
                        <Clock size={20} />
                        <p>Status: {order.status}</p>
                      </div>
                      <div className="order-detail-item">
                        <Calendar size={20} />
                        <p>Date: {new Date(order.created_at).toLocaleDateString()}</p>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p>No order history available.</p>
              )}
            </div>

            <div className="profile-actions">
              <button
                onClick={handleSignOut}
                className="sign-out-button"
              >
                <LogOut size={20} />
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;

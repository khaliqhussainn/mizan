import React, { useState } from "react";
import "./contact.css";
import { FaGlobe, FaAnchor, FaHourglassHalf, FaDatabase, FaUpload, FaCamera } from "react-icons/fa";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="contact-wrapper">
      <div className="feat bg-gray pt-5 pb-5">
        <div className="container-contact">
          <div className="row-contact">
            <div className="section-head col-sm-12">
              <h4>
                <span>Why Choose</span> Us?
              </h4>
              <p>
                When you choose us, you'll feel the benefit of 10 years'
                experience of Web Development. Because we know the digital world
                and we know that how to handle it. With working knowledge of
                online, SEO and social media.
              </p>
            </div>
            <div className="why-choose-contact">
              <div className="col-lg-4 col-sm-6">
                <div className="item-contact">
                  <span className="icon-contact feature_box_col_one">
                    <FaGlobe />
                  </span>
                  <h6>Modern Design</h6>
                  <p>
                    We use latest technology for the latest world because we
                    know the demand of peoples.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="item-contact">
                  <span className="icon-contact feature_box_col_two">
                    <FaAnchor />
                  </span>
                  <h6>Creative Design</h6>
                  <p>
                    We are always creative and and always lisen our costomers and we mix these two things and make beast design.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="item-contact">
                  <span className="icon-contact feature_box_col_three">
                    <FaHourglassHalf />
                  </span>
                  <h6>24 x 7 User Support</h6>
                  <p>
                    If our customer has any problem and any query we are always
                    happy to help then.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="item-contact">
                  <span className="icon-contact feature_box_col_four">
                    <FaDatabase />
                  </span>
                  <h6>Business Growth</h6>
                  <p>
                    Everyone wants to live on top of the mountain, but all the
                    happiness and growth occurs while you're climbing it
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="item-contact">
                  <span className="icon-contact feature_box_col_five">
                    <FaUpload />
                  </span>
                  <h6>Market Strategy</h6>
                  <p>
                    Holding back technology to preserve broken business models
                    is like allowing blacksmiths to veto the internal combustion
                    engine in order to protect their horseshoes.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="item-contact">
                  <span className="icon-contact feature_box_col_six">
                    <FaCamera />
                  </span>
                  <h6>Affordable cost</h6>
                  <p>
                    Love is a special word, and I use it only when I mean it.
                    You say the word too much and it becomes cheap.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-container">
        {/* Left Side - Image and Social */}
        <div className="contact-left">
          <div className="image-overlay"></div>
          <div className="contact-image">
            <div className="social-banner">
              <h3>Follow us on social media</h3>
              <div className="social-icons">
                <a href="/" className="social-icon">
                  <svg viewBox="0 0 24 24" className="icon instagram">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a href="/" className="social-icon">
                  <svg viewBox="0 0 24 24" className="icon facebook">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
                <a href="/" className="social-icon">
                  <svg viewBox="0 0 24 24" className="icon twitter">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
              </div>
              <p className="social-text">Stay connected with us!</p>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="contact-right">
          <div className="form-header">
            <h2>Get in Touch</h2>
            <p>We'd love to hear from you. Send us a message!</p>
          </div>

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message"
                rows="4"
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-button">
              Send Message
              <svg
                className="send-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

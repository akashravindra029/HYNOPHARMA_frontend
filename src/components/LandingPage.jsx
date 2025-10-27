import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="landing-page"
    >
      {/* 🟢 NAVBAR */}
      <header className="navbar">
        <nav>
          <h2>HynoPharma</h2>
          <div className="navbar-links">
            <Link to="/">Home</Link>
            <Link to="/products">Medicines</Link>
            <Link to="/about">About</Link>
            <Link to="/login" className="login-btn">Login</Link>
          </div>
        </nav>
      </header>

      {/* 🟢 HERO SECTION */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Trusted Online Pharmacy at Your Fingertips</h1>
          <p>
            Order medicines, book health tests, and consult doctors — all from
            the comfort of your home.
          </p>

          {/* Search bar */}
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search for medicines, health products..."
            />
            <button>🔍</button>
          </div>

          <Link to="/products">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="shop-now-btn"
            >
              Shop Now
            </motion.button>
          </Link>
        </div>
      </section>

      {/* 🟢 SERVICES */}
      <section className="services-section">
        <h2>Why Choose HynoPharma?</h2>
        <div className="services-grid">
          {[
            {
              icon: "🚚",
              title: "Super Fast Delivery",
              text: "Get medicines delivered within 2 hours in major cities.",
            },
            {
              icon: "💊",
              title: "Genuine Medicines",
              text: "100% verified and quality-checked pharmacy products.",
            },
            {
              icon: "🧾",
              title: "Easy Prescription Upload",
              text: "Upload your prescription and let our pharmacist assist you.",
            },
            {
              icon: "💬",
              title: "Doctor Consultation",
              text: "Chat with certified doctors anytime, anywhere.",
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="service-card"
            >
              <div className="icon">{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🟢 POPULAR CATEGORIES */}
      <section className="categories-section">
        <h2>Shop by Popular Categories</h2>
        <div className="categories-grid">
          {[
            "Pain Relief",
            "Diabetes Care",
            "Baby Care",
            "Skin Care",
            "Ayurvedic",
            "Supplements",
          ].map((category, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="category-card"
            >
              {category}
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🟢 TRUST SECTION */}
      <section className="trust-section">
        <h2>Trusted by 1 Million+ Customers</h2>
        <p>
          We take pride in delivering health and happiness across India with
          authentic products, expert pharmacists, and reliable customer support.
        </p>
      </section>

      {/* 🟢 APP SECTION */}
      <section className="app-section">
        <h2>Download Our Mobile App</h2>
        <p>Order medicines, consult doctors, and track deliveries instantly.</p>
        <div className="app-badges">
          <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Play Store"
            />
          </a>
          <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="App Store"
            />
          </a>
        </div>
      </section>

      {/* 🟢 FOOTER */}
      <footer className="footer">
        <h3>HynoPharma</h3>
        <p>Your trusted partner for quality healthcare products.</p>
        <p className="copyright">© 2025 HynoPharma. All Rights Reserved.</p>
      </footer>
    </motion.div>
  );
};

export default LandingPage;

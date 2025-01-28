import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
    <div className="footer-container">
                               {/* Quick Links Section */}
    <div className="footer-links">
          <h3>Quick Links</h3>

          <a href="/contact">Contact Us</a>
          <a href="/terms">Terms of Service</a>
          <a href="/privacy">Privacy Policy</a>

    </div>

                               {/* Social Links Section */}

    <div className="footer-social">

        <h3>Who Iam? </h3>

          <a href="https://www.linkedin.com/in/sayednowshad/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/sayednowshad" target="_blank" rel="noopener noreferrer">GitHub</a>

    </div>

                               {/* Tagline Section */}

    <div className="footer-tagline">
          <p>🚀 Empowering Developers Worldwide 🌐</p>
    </div>
    </div>

    <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} YourWebsite. All rights reserved.</p>
    </div>
    </footer>
  );
};

export default Footer;


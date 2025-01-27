import React from "react";
import { useNavigate } from "react-router-dom";  // Import useNavigate
import "./HeroSection.css";

const HeroSection = () => {
  const navigate = useNavigate(); // Initialize the navigation function

  // Function to handle Explore button click
  const handleExploreClick = () => {
    navigate("/explore");  // Navigates to /explore page
  };

  return (
    <section className="hero-section" id="home">
      <div className="content">
        <h1>Welcome To SAYED (Master) Education Website</h1>
        <p className="texts">
          This platform provides all the resources & available links through
          this platform
        </p>

        <div className="hero-cont">
          <div className="hero-stats">
            <span>20+ Platforms</span>
            <span>100+ Multiple Resources</span>
            <span>10+ Courses</span>
          </div>
        </div>

        {/* Button that triggers the navigation */}
        <button className="explore-btn" onClick={handleExploreClick}>
          Explore
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
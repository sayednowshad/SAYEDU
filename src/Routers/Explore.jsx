import React from "react";
import { useNavigate } from "react-router-dom"; //Import navigation hook
import Navbar from "../Components/Navbar";
import "./Explore.css";
import Footer from "../Components/Footer";

const Explore = () => {
  const navigate = useNavigate(); // Hook for navigation

  const categories = [
    { title: "Front-End Development", img: "front-end-development.jpg", route: "/front-end" },
    { title: "Backend Development", img: "backend-development.jpg", route: "/backend" },
    { title: "UI/UX Designer", img: "ui-ux.jpg", route: "/ui-ux" },
    { title: "Devops Engineer", img: "devops.jpg", route: "/devops" },
    { title: "App Development", img: "app-development.jpg", route: "/app-development" },
    { title: "Data Analyst", img: "data-science.jpg", route: "/data-science" },
    { title: "AI/ML", img: "ai-ml.jpg", route: "/ai-ml" }, 
    { title: "Cyber Security", img: "cyber-security.jpg", route: "/cyber-security" },
    { title: "Git & GitHub", img: "git-github.jpg", route: "/git-github" },
  ];

  const tools = ["Tool 1", "Tool 2", "Tool 3", "Tool 4", "Tool 5"];

  return (
    <>
      <Navbar />

      <div className="explore-container">
        <h1> Welcome To Our Website, Explore Your Domain😁</h1>

        <div className="section">
          {categories.map((category, index) => (
            <div className="category" key={index}>
              <img src={category.img} alt={category.title} />
              {/* On click of title, navigate to respective route */}
              <p onClick={() => navigate(category.route)} style={{ cursor: "pointer", color: "black", fontSize: "20px" }}> 
                {category.title}
              </p>
            </div>
          ))}
        </div>

        <h2>Top AI Tools For You Guy's😉</h2>

        <div className="tools-section">
          {tools.map((tool, index) => (
            <div className="tool-card" key={index}>
              {tool}
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Explore;
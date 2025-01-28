import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Benefits from './Components/Benefits';
import HeroSection from "./Components/HeroSection";
import Mission from "./Components/Mission";
import FAQ from "./Components/FAQ";
import Footer from "./Components/Footer";
import Explore from "./Routers/Explore";
import FrontEnd from "./Pages/FrontEnd";  // Import Explore component
import BackEnd from "./Pages/BackEnd";  // Import Explore component

const App = () => {
  return (
    <Router>
      {/* Routes for different pages */}
      <Routes>
        {/* Home page - Displays Navbar, HeroSection, Mission, Benefits, FAQ, and Footer */}
        <Route path="/" element={
          <>
            <Navbar />
            <HeroSection />
            <Mission />
            <Benefits />
            <FAQ />
            <Footer />
          </>
        } />

       
        <Route path="/explore" element={<Explore />} />
        <Route path="/front-end" element={<FrontEnd />} />
        <Route path="/backend" element={<BackEnd />} />
      </Routes>
    </Router>
  );
};

export default App;

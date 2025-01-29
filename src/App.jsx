import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Benefits from './Components/Benefits';
import HeroSection from "./Components/HeroSection";
import Mission from "./Components/Mission";
import FAQ from "./Components/FAQ";
import Footer from "./Components/Footer";


import Explore from "./Routers/Explore";


import FrontEnd from "./Pages/FrontEnd";
import BackEnd from "./Pages/BackEnd";  
import UIUX from "./Pages/UIUX";
import DS from "./Pages/DS";
import AppDev from "./Pages/AppDev";
import AI_ML from "./Pages/AiMl";
import GitHub from "./Pages/GitHub";
import CyberSec from "./Pages/CyberSec";
import DevOps from "./Pages/DevOps";


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
        <Route path="/ui-ux" element={<UIUX />} />
        <Route path="/data-science" element={<DS />} />
        <Route path="/app-development" element={<AppDev />} />
        <Route path="/ai-ml" element={<AI_ML />} />
        <Route path="/git-github" element={<GitHub />} />
        <Route path="/cyber-security" element={<CyberSec />} />
        <Route path="/devops" element={<DevOps />} />


      </Routes>
    </Router>
  );
};

export default App;

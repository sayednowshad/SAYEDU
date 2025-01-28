import React from "react";
import "./FrontEnd.css"; // Import CSS
import Navbar from "../Components/Navbar";

const FrontEnd = () => { 
  return (

    <>
    
    <Navbar />
    <div className="container">

      {/* HEADER SECTION */}

      <header className="header"> 
        <div>
          <h1>Front-End Development</h1>
        <img src="/front-end-development.jpg" alt="Front-End Roadmap" />
          <p>
            All the resources are available through the links and kindly refer to this.
            We are providing the recommended platform not for any other promotion.
          </p>

          <ul className="story" >

          <li>1. HEllo WEorld </li>
          <li>2. This is an another feature i had been enabled</li>
          <li>3. Thank you guys with this beautiful</li>
          <li>4. Awesome Weather Today</li>
          <li>5. Finally i setup My PC YEAHHHH</li>

          </ul>
          <span className="rating">Rating: <strong>4.4</strong></span>
          <p className="creator">
         Created by <a href="https://www.linkedin.com/in/sayednowshad/" target="_blank" rel="noopener noreferrer" style={{fontSize : "14px;"}}>
        Sayed Nowshad
  </a>
</p>
        </div>
        {/* Access Image from Public Folder */}
      </header>

      {/* CONTENT SECTION */}
      <section className="roadmap">
        <p>Steps You need To Follow</p>
        <ul>
          <li>1. Click the below topics to unlock the Concepts 🎉</li>
          <li>2. Easy to navigate and access the resources given in the platform🚀</li>
          <li>3. Providing the best resources. Share with your friends!🤝</li>
          <li>4. Thanks a lot, “Stay Hard”💪 & “Stay Consistent”😉</li>
        </ul>

        {/* DOWNLOAD SECTION */}
        <div className="downloadSection">
          <h3>Download The Roadmap</h3>
          <p style={{fontFamily : 'Roboto'}}>
            In the Roadmap, we provide  <b> “Exact Steps” </b>  & <b>“Enough Concepts”</b> 
            to learn by doing on your own. 😊
          </p>
          <button className="downloadBtn">Download Now ⬇</button>
        </div>
      </section>
    </div>
    </>
  );
};

export default FrontEnd;

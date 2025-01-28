import React from "react";
import "./FrontEnd.css"; // Import CSS from the FrontEnd Bro
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const BackEnd = () => { 
  return (

    <>
    
    <Navbar />
    <div className="container">

                                      {/* HEADER SECTION */}

      <header className="header"> 
      <div>

          <h1>Back-End Development</h1>
        <img src="/backend-development.jpg" alt="Front-End Roadmap" /> 
    <p>
            Maximum resources are available through the links and kindly refer to this.
            We are providing the Available Free platform.
    </p>

      <ul className="story" >

          <li>1. This Website Providing the Available Resources🔗 </li>
          <li>2. Searching & Finding🔎 it takes time⌛right? We take care of that </li>
          <li>3. Click the Links for the Related Domain and Get It🎉</li>
          <li>4. Check Out The Road Maps Follow The Steps😉</li>
          <li>5. Do Your Own Projects to Gain Experience 😃</li>

      </ul>
          <span className="rating">Rating: <strong>4.4</strong></span>
      <p className="creator">
         Created by <a href="https://www.linkedin.com/in/sayednowshad/" target="_blank" rel="noopener noreferrer" style={{fontSize : "14px;"}}>
        Sayed Nowshad </a>

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

          <p>
            In the Roadmap, we provide  <b> “Exact Steps” </b>  & <b>“Enough Concepts”</b> 
            to learn by doing on your own. 😊
          </p>

          <button className="downloadBtn">Download Now ⬇</button>

        </div>

      </section>
    </div>
    <Footer />
    </>
  );
};

export default BackEnd; 
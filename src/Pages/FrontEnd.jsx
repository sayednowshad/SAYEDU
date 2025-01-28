import React from "react";
import "./FrontEnd.css"; // Import CSS

const FrontEnd = () => {
  return (
    <div className="container">
      {/* HEADER SECTION */}
      <header className="header">
        <div>
          <h1>Front-End Development</h1>
          <p>
            All the resources are available through the links and kindly refer to this.
            We are providing the recommended platform not for any other promotion.
          </p>
          <span className="rating">Rating: <strong>4.4</strong></span>
          <p className="creator">
         Created by <a href="https://www.linkedin.com/in/sayednowshad/" target="_blank" rel="noopener noreferrer">
        <strong>Sayed Nowshad</strong>
  </a>
</p>
        </div>
        {/* Access Image from Public Folder */}
        <img src="/front-end-development.jpg" alt="Front-End Roadmap" />
      </header>

      {/* CONTENT SECTION */}
      <section className="roadmap">
        <h2>Front-End Development</h2>
        <ul>
          <li>1. Click the below topics to unlock the Concepts</li>
          <li>2. Easy to navigate and access the resources given in the platform</li>
          <li>3. Providing the best resources. Share with your friends!</li>
          <li>4. Thanks a lot, “Stay Hard” & “Stay Consistent”</li>
        </ul>

        {/* DOWNLOAD SECTION */}
        <div className="downloadSection">
          <h3>Download The Roadmap</h3>
          <p>
            In the Roadmap, we provide <strong>“Exact Steps” & “Enough Concepts”</strong> 
            to learn by doing on your own. 😊
          </p>
          <button className="downloadBtn">Download Now ⬇</button>
        </div>
      </section>
    </div>
  );
};

export default FrontEnd;

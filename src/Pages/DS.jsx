import React, { useState } from "react";
import "./FrontEnd.css"; 
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const faqData = [
  {
    title: "Learn Basics😍",
    content: (
      <>
        <h4>YouTube Playlist</h4>

        <h3> Learn Excel Tools </h3>

    <ul>
          <li>Introduction To HTML / CSS - <a href="#">Click here</a></li>
          <li>Apna College Complete HTML / CSS - <a href="#">Click here</a></li>
          <li>SuperSimpleDev Html / Css - <a href="#">Click here</a></li>
          <li>Coding Ninja for Beginners Html / Css - <a href="#">Click here</a></li>
          
    </ul>
        <h3> Programming Language  </h3>

        <ul>
          <li>Introduction To HTML / CSS - <a href="#">Click here</a></li>
          <li>Apna College Complete HTML / CSS - <a href="#">Click here</a></li>
          <li>SuperSimpleDev Html / Css - <a href="#">Click here</a></li>
          <li>Coding Ninja for Beginners Html / Css - <a href="#">Click here</a></li>
          
    </ul>

    <h3> Basic Statistics  </h3>

            <ul>
            <li>Introduction To HTML / CSS - <a href="#">Click here</a></li>
            <li>Apna College Complete HTML / CSS - <a href="#">Click here</a></li>
            <li>SuperSimpleDev Html / Css - <a href="#">Click here</a></li>
            <li>Coding Ninja for Beginners Html / Css - <a href="#">Click here</a></li>
            
            </ul>


      
        <h4>Coursera (Certification)</h4> 

    <ul>
          <li>Meta Introduction to HTML / CSS - <a href="#">Click here</a></li>
          <li>IBM Intro to Web Development - <a href="#">Click here</a></li>
          <li>Introduction to Web Technology - <a href="#">Click here</a></li>
          <li>Beginners to HTML / CSS - <a href="#">Click here</a></li>
    </ul>

          <p><a href="#">Download</a> Most Important Concepts</p>
          <h4>Other Important Topics</h4>
          <p>1. Learn Bootstrap | 2. Tailwind CSS | 3. Git / GitHub</p>

      </>

    ),
},

    {
          title: "Data Manipulation & Analysis🤝",
          content: (
            <>  
                      {/* This is for the JS  */}

    <h4>YouTube Playlist</h4> 

    <h4>Numpy & Pandas</h4> 

    <ul>
          <li>Introduction To HTML / CSS - <a href="#">Click here</a></li>
          <li>Apna College Complete HTML / CSS - <a href="#">Click here</a></li>
          <li>SuperSimpleDev Html / Css - <a href="#">Click here</a></li>
          <li>Coding Ninja for Beginners Html / Css - <a href="#">Click here</a></li>
          
    </ul>

    <h4>Data Cleaning (basics) </h4> 

    <ul>
          <li>Introduction To HTML / CSS - <a href="#">Click here</a></li>
          <li>Apna College Complete HTML / CSS - <a href="#">Click here</a></li>
          <li>SuperSimpleDev Html / Css - <a href="#">Click here</a></li>
          <li>Coding Ninja for Beginners Html / Css - <a href="#">Click here</a></li>
          
    </ul>

    <h4>Data Visualization (basics) </h4> 

    <ul>
          <li>Introduction To HTML / CSS - <a href="#">Click here</a></li>
          <li>Apna College Complete HTML / CSS - <a href="#">Click here</a></li>
          <li>SuperSimpleDev Html / Css - <a href="#">Click here</a></li>
          <li>Coding Ninja for Beginners Html / Css - <a href="#">Click here</a></li>
          
    </ul>



        {/* <h4>Coursera (free)</h4>

    <ul>
          <li>Meta Introduction to HTML / CSS - <a href="#">Click here</a></li>
          <li>IBM Intro to Web Development - <a href="#">Click here</a></li>
          <li>Introduction to Web Technology - <a href="#">Click here</a></li>
          <li>Beginners to HTML / CSS - <a href="#">Click here</a></li>
    </ul>

          <h4>Top 5 Projects</h4>
          <p>Click on <a href="#">Projects</a> to access all content</p>
          <h4>Enough Important Topics</h4>
          <p><a href="#">Download</a> Most Important Concepts</p>
          <h4>Other Important Topics</h4>
          <p>1. Learn Bootstrap | 2. Tailwind CSS | 3. Git / GitHub</p> */}
      
      </>              

          ),
    },


    {
      title: " DBMS (Recommended SQL)🔥",
      content: (
        <>
          <h4>YouTube Playlist</h4>
  
      <ul>
            <li>Introduction To HTML / CSS - <a href="#">Click here</a></li>
            <li>Apna College Complete HTML / CSS - <a href="#">Click here</a></li>
            <li>SuperSimpleDev Html / Css - <a href="#">Click here</a></li>
            <li>Coding Ninja for Beginners Html / Css - <a href="#">Click here</a></li>
            
      </ul>
  
          <h4>Coursera (Certification)</h4> 
  
      <ul>
            <li>Meta Introduction to HTML / CSS - <a href="#">Click here</a></li>
            <li>IBM Intro to Web Development - <a href="#">Click here</a></li>
            <li>Introduction to Web Technology - <a href="#">Click here</a></li>
            <li>Beginners to HTML / CSS - <a href="#">Click here</a></li>
      </ul>
  
            <h4>Other Important Topics</h4>
            <p>1. Learn Bootstrap | 2. Tailwind CSS | 3. Git / GitHub</p>
  
        </>

      ),
  },

  {
      title: " Data Visualization Tools🔥",
      content: (
        <>
          <h4>YouTube Playlist</h4>

          <h4>Power BI🎯</h4> 
  
      <ul>
            <li>Introduction To HTML / CSS - <a href="#">Click here</a></li>
            <li>Apna College Complete HTML / CSS - <a href="#">Click here</a></li>
            <li>SuperSimpleDev Html / Css - <a href="#">Click here</a></li>
            <li>Coding Ninja for Beginners Html / Css - <a href="#">Click here</a></li>
            
      </ul>

      <h4> Tableau😉</h4> 
  
      <ul>
            <li>Introduction To HTML / CSS - <a href="#">Click here</a></li>
            <li>Apna College Complete HTML / CSS - <a href="#">Click here</a></li>
            <li>SuperSimpleDev Html / Css - <a href="#">Click here</a></li>
            <li>Coding Ninja for Beginners Html / Css - <a href="#">Click here</a></li>
            
      </ul>
  
          {/* <h4>Coursera (Certification)</h4> 
  
      <ul>
            <li>Meta Introduction to HTML / CSS - <a href="#">Click here</a></li>
            <li>IBM Intro to Web Development - <a href="#">Click here</a></li>
            <li>Introduction to Web Technology - <a href="#">Click here</a></li>
            <li>Beginners to HTML / CSS - <a href="#">Click here</a></li>
      </ul> */}
  
            <h4>Other Important Topics</h4>
            <p>1. Learn Bootstrap | 2. Tailwind CSS | 3. Git / GitHub</p>
  
        </>

      ),
  },
  {
      title: " Real-World Projects🔥",
      content: (
        <>
          <h5 style={{textAlign : 'center'}}>Updating Soon😉</h5>

        </>

      ),
  },

];

const DS = () => { 
const [openIndex, setOpenIndex] = useState(null);

const toggleFAQ = (index) => {
setOpenIndex(openIndex === index ? null : index);
};
const handleDownload = () => {
alert("Downloading Roadmap...");

};

  return (

    <>
      <Navbar />

      <div className="container">

        {/* HEADER SECTION */}

<header className="header"> 

    <div>
            <h1> Data Science </h1> 
        <img src="/data-science.jpg" alt="Front-End Roadmap" />

            <p>
              Maximum resources are available through the links and kindly refer to this.
              We are providing the Available Free platform.
            </p>

      <ul className="story">
              <li>1. This Website Providing the Available Resources 🔗</li>
              <li>2. Searching & Finding 🔎 it takes time ⌛ right? We take care of that</li>
              <li>3. Click the Links for the Related Domain and Get It 🎉</li>
              <li>4. Check Out The Road Maps Follow The Steps 😉</li>
              <li>5. Do Your Own Projects to Gain Experience 😃</li>
      </ul>

            <span className="rating">Rating: <strong>4.4</strong></span>

      <p className="creator">
              Created by <a 
                href="https://www.linkedin.com/in/sayednowshad/" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ fontSize: "14px" }}>
                Sayed Nowshad
              </a>
      </p>

          </div>
</header>

        {/* CONTENT SECTION */}

<section className="roadmap">

          <p>Steps You need To Follow</p>
    <ul>
            <li>1. Click the below topics to unlock the Concepts 🎉</li>
            <li>2. Easy to navigate and access the resources given in the platform 🚀</li>
            <li>3. Providing the best resources. Share with your friends! 🤝</li>
            <li>4. Thanks a lot, “Stay Hard” 💪 & “Stay Consistent” 😉</li>
    </ul>

          {/* DOWNLOAD SECTION */}

    <div className="downloadSection">
            <h3>Download The Roadmap</h3>
        <p>
              In the Roadmap, we provide <b>“Exact Steps”</b> & <b>“Enough Concepts”</b> 
              to learn by doing on your own. 😊
        </p>
              <button className="downloadBtn" onClick={handleDownload}>Download Now ⬇</button>
          </div>

</section>
    </div>

      {/* Resources SECTION */}

    <div className="faq-container">

        <h2> Content / Topics:</h2>

        {faqData.map((faq, index) => (

          <div key={index} className="faq-item"> 

          <div className="faq-title" onClick={() => toggleFAQ(index)}>
              {index + 1}. {faq.title}
              <span className={`faq-arrow ${openIndex === index ? "open" : ""}`}>▼</span>
          </div>
            
            {openIndex === index && <div className="faq-content">{faq.content}</div>}
      </div>
        ))}

</div>

      <Footer />
    </>
  );
};

export default DS;

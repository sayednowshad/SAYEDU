import React from "react";
import "./Benefits.css";

const Benefits = () => {

  return (

  <section className="benefits-section"> 

      <h2 style={{fontFamily: 'cursive', textAlign : 'center'}}> Benefits That We Provide From This Website</h2>

      <div className="benefits-container">

        <div className="benefit">

        <h1 style={{marginTop : '15px', fontSize : '20px', fontFamily : 'cursive'}}>Save Your Searching Time</h1>
        <p style={{fontSize : '16px' , marginTop : '30px'}}>Instead of searching on different platforms, just getting bored, right?</p>
        <button>Explore</button>
        </div> 

        <div className="benefit">
          
        <h3 style={{marginTop : '-9px', fontSize : '20px',fontFamily : 'cursive'}}>Fast & Quick Search Option</h3>
        <p style={{fontSize : '16px' , marginTop : '30px'}}>Our platforms provide all the resources in one place.</p>
        <button>Explore</button>
        </div>

        <div className="benefit">
        <h3 style={{marginTop : '-9px', fontSize : '20px',fontFamily : 'cursive'}}>Multiple Platform Resources</h3>
        <p style={{fontSize : '16px' , marginTop : '30px'}}>Instead of searching on different platforms, we provide all the resources.</p>
        <button>Explore</button>
        </div>

      </div> 
      
  </section> 

   );
};

export default Benefits;

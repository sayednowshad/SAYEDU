import React from 'react'
import "./Mission.css";

export const Mission = () => {

  return (

    <>
    <div className="containers">

    <section className="bullet-section">

      <h2 className='Mission-matt'  >Learn from 100+ Playlists and Quality Resources with Trusted Platforms😉</h2>

      <ul>
        <li>Explore over 100 curated playlists covering topics like programming, web development and more🔥.</li>
        <li>Access trusted platforms such as Coursera, GitHub, YouTube & More for reliable learning materials🤩.</li>
        <li>Gain hands-on experience with projects and real-world examples💪.</li>
        <li>Founded free and affordable resources tailored for students and beginners😃.</li>
        <li>Learn at your own pace with flexible video tutorials and downloadable materials😉.</li>
        <li>Stay updated with the latest industry trends through expert-guided courses🤝.</li>
        <li>Access a wide range of topics, from basic concepts to advanced skills, in one place🎉.</li>
      </ul>
    <h2 className='heading' style={{textAlign : 'center', fontFamily : 'sans-serif', alignItems : 'center'}}> Popular </h2>

    </section>

    </div>


    <div className="popular-categories"> 

        <button className='categorys'> Font-End </button>
        <button className='categorys'> Full Stack Web Dev </button>
        <button className='categorys'> Data Science </button>
        <button className='categorys'> AI/ML </button>
        <button className='categorys'> UI/UX Designer </button>
        <button className='categorys'> Devops Engineer </button>
        <button className='categorys'> Cyber Security </button>
        <button className='categorys'> Git & GitHub </button>
        <button className='categorys'> Top AI Tools </button>
        <button className='categorys'> etc... </button>

    </div>
    
    </>

  );

}
export default Mission;
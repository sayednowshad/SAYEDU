import React from "react";
import "./SocialButtons.css";

const SocialButtons = () => {
  const handleClick = (url) => {
    window.open(url, "_blank"); // Opens link in a new tab
  };

  return (

<div className="social-buttons">

      <button className="reddit-btn" onClick={() => handleClick("https://www.reddit.com/")}>
        Reddit
      </button>

      <button className="telegram-btn" onClick={() => handleClick("https://t.me/")}>
        Telegram
      </button>

      <button className="instagram-btn" onClick={() => handleClick("https://www.whatsapp.com/")}>
        WhatsApp
      </button>

</div>

  );
};

export default SocialButtons;
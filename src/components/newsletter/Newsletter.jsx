import React from "react";
import "./Newsletter.css";

const Newsletter = () => {
  return (
    <div className="newsletter">
      <h1>Get exclusive offers by email!</h1>
      <p>Subscribe to our newsletter and stay updated.</p>
      <div className="input">
        <input type="email" placeholder="Your email address" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default Newsletter;

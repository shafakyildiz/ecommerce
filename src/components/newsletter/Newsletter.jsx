import React from "react";
import "./Newsletter.css";

const Newsletter = () => {
  return (
    <div className="newsletter">
      <h1>Get Exclusive Offers on your email...</h1>
      <p>Subscribe to our newsletter and stay updated.</p>
      <div className="">
        <input type="email" placeholder="Your email address" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default Newsletter;

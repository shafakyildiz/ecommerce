import React from "react";
import arrow_icon from "../assets/arrow_icon.png";
import hand_icon from "../assets/hand_icon.png";
import hero_image from "../assets/hero_image.png";
import "./Hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div className="">
          <div className="hero-hand-icon">
            <p>new</p>
            <img src={hand_icon} alt="" className="hand-icon" />
          </div>
          <p>collections</p>
          <p>for everyone</p>
        </div>
        <Link to="/women">
          <div className="hero-latest-btn">
            <div className="">Latest Collection</div>
            <img src={arrow_icon} alt="" className="arrow-icon" />
          </div>
        </Link>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="" />
      </div>
    </div>
  );
};

export default Hero;

import React from "react";
import exclusive_image from "../assets/exclusive_image.png";
import "./Offers.css";
import { Link } from "react-router-dom";

const Offers = () => {
  return (
    <div className="offers">
      <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>ONLY ON BESTSELLER PRODUCTS</p>
        <Link to="/men">
          <button>Check Now</button>
        </Link>
      </div>
      <div className="offers-right">
        <img src={exclusive_image} alt="" className="exclusive_image" />
      </div>
    </div>
  );
};

export default Offers;

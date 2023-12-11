import React from "react";
import "./Navbar.css";

import logo from "../assets/logo.png";
import cart_icon from "../assets/cart_icon.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="Navbar logo" />
        <p>Shopio</p>
      </div>
      <ul className="nav-menu">
        <li>
          Shop
          <hr />
        </li>
        <li>
          Men
          <hr />
        </li>
        <li>
          Women
          <hr />
        </li>
        <li>
          Kids
          <hr />
        </li>
      </ul>
      <div className="nav-login-cart">
        <button>Login</button>
        <img src={cart_icon} alt="" />
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};

export default Navbar;

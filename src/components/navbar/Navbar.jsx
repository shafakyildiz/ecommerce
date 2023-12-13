import React, { useState } from "react";
import "./Navbar.css";

import { Link } from "react-router-dom";
import cart_icon from "../assets/cart_icon.png";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  return (
    <div className="navbar">
      <div className="nav-logo">
        <Link
          to="/"
          onClick={() => {
            setMenu("shop");
          }}
        >
          <img src={logo} alt="Navbar logo" className="logo-img" />
          <p>Shopio</p>
        </Link>
      </div>
      <ul className="nav-menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link to="/">
            Shop
            {(menu === "shop" || menu === "") && <hr />}
          </Link>
        </li>
        <li
          onClick={() => {
            setMenu("men");
          }}
        >
          <Link to="/men">
            Men
            {menu === "men" && <hr />}
          </Link>
        </li>
        <li
          onClick={() => {
            setMenu("women");
          }}
        >
          <Link to="/women">
            Women
            {menu === "women" && <hr />}
          </Link>
        </li>
        <li
          onClick={() => {
            setMenu("kid");
          }}
        >
          <Link to="/kid">
            Kids
            {menu === "kid" && <hr />}
          </Link>
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>

        <Link to="/cart">
          <img src={cart_icon} alt="" className="cart-img" />
        </Link>

        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};

export default Navbar;

import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { useLocation } from "react-router-dom";
import men_banner from "../components/assets/men_banner.jpg";
import women_banner from "../components/assets/women_banner.jpg";
import kid_banner from "../components/assets/kid_banner.jpg";
import "./styles/ShopCategory.css";

const ShopCategory = () => {
  const location = useLocation();
  let path = location.pathname;

  console.log(path);
  const MEN_PATH = "/men";
  const WOMEN_PATH = "/women";
  const KID_PATH = "/kid";

  const { new_collections } = useContext(ShopContext);

  return (
    <div className="shop-category">
      {path === MEN_PATH && <img src={men_banner} alt="" />}
      {path === WOMEN_PATH && <img src={women_banner} alt="" />}
      {path === KID_PATH && <img src={kid_banner} alt="" />}
    </div>
  );
};

export default ShopCategory;

import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

const ShopCategory = () => {
  const { new_collections } = useContext(ShopContext);
  console.log(new_collections);
  return <div className="shop-category">asdfsf</div>;
};

export default ShopCategory;

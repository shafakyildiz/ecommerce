import React from "react";
import { product_data } from "../assets/product_data.js";
import Item from "../item/Item.jsx";
import "./Popular.css";

const Popular = () => {
  console.log(product_data);
  return (
    <div className="popular">
      <h1>POPULAR IN GENERAL CATEGORY</h1>
      <hr />
      <div className="popular-item">
        {product_data.map((item, index) => {
          return (
            <Item
              key={index}
              id={item.id}
              name={item.name}
              image={item.image}
              old_price={item.old_price}
              new_price={item.new_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Popular;

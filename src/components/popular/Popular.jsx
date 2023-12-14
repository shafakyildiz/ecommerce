import React from "react";
import "./Popular.css";
import Item from "../item/Item";
import { Link } from "react-router-dom";
import { product_data } from "../assets/product_data.js";

const Popular = () => {
  return (
    <div className="popular">
      <h1>POPULAR IN GENERAL CATEGORY</h1>
      <hr />
      <div className="popular-item">
        {product_data.map((item, index) => {
          return (
            <Link key={index} to={`/product/${item.id}`}>
              <Item
                key={index}
                id={item.id}
                name={item.name}
                image={item.image}
                old_price={item.old_price}
                new_price={item.new_price}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Popular;

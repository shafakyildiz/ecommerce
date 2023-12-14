import React from "react";
import Item from "../item/Item";
import { product_data } from "../assets/product_data.js";
import "./NewCollections.css";
import { Link } from "react-router-dom";

const NewCollections = () => {
  return (
    <div className="new-collections">
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="new-collections-item">
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

export default NewCollections;

import React from "react";
import Item from "../Item/Item";
import { new_collections } from "../assets/new_collections.js";
import "./NewCollections.css";

const NewCollections = () => {
  return (
    <div className="new-collections">
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="new-collections-item">
        {new_collections.map((item, index) => {
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

export default NewCollections;

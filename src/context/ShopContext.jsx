import React, { createContext, useState } from "react";
import { new_collections } from "../components/assets/new_collections";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const [cartCount, setCartCount] = useState(0);
  const contextValue = { new_collections };

  //Increase counter
  const increment = () => {
    return setCartCount(cartCount + 1);
  };

  //Decrease counter
  const decrement = () => {
    return setCartCount(cartCount - 1);
  };

  return (
    <ShopContext.Provider
      value={{ ...contextValue, cartCount, increment, decrement }}
    >
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;

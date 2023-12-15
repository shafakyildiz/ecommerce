import React, { createContext, useState } from "react";
import { product_data } from "../components/assets/product_data";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const [cartCount, setCartCount] = useState(0);
  const contextValue = { product_data };

  // Increase cart count
  const increment = () => {
    return setCartCount(cartCount + 1);
  };

  // Decrease cart count
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

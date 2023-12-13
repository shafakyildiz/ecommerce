import React from "react";
import Hero from "../components/hero/Hero";
import NewCollections from "../components/newcollections/NewCollections";
import Newsletter from "../components/newsletter/Newsletter";
import Offers from "../components/offers/Offers";
import Popular from "../components/popular/Popular";

const Shop = () => {
  return (
    <div className="shop-container">
      <Hero />
      <Popular />
      <Offers />
      <NewCollections />
      <Newsletter />
    </div>
  );
};

export default Shop;

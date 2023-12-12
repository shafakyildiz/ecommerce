import React from "react";
import Hero from "../components/hero/Hero";
import Offers from "../components/offers/Offers";
import Popular from "../components/popular/Popular";
import NewCollections from "../components/newcollections/NewCollections";

const Shop = () => {
  return (
    <>
      <Hero />
      <Popular />
      <Offers />
      <NewCollections />
    </>
  );
};

export default Shop;

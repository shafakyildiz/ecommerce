import React from "react";
import Footer from "../components/footer/Footer";
import Hero from "../components/hero/Hero";
import NewCollections from "../components/newcollections/NewCollections";
import Newsletter from "../components/newsletter/Newsletter";
import Offers from "../components/offers/Offers";
import Popular from "../components/popular/Popular";
import "./styles/Shop.css";

const Shop = () => {
  return (
    <div className="shop-container">
      <Hero />
      <Popular />
      <Offers />
      <NewCollections />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Shop;

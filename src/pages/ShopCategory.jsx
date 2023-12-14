import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import kid_banner from "../components/assets/kid_banner.jpg";
import men_banner from "../components/assets/men_banner.jpg";
import women_banner from "../components/assets/women_banner.jpg";
import { ShopContext } from "../context/ShopContext";
import "./styles/ShopCategory.css";
import Item from "../components/item/Item";

const ShopCategory = () => {
  const location = useLocation();
  let path = location.pathname;

  console.log(path);
  const MEN_PATH = "/men";
  const WOMEN_PATH = "/women";
  const KID_PATH = "/kid";

  const MEN_CATEGORY = "men";
  const WOMEN_CATEGORY = "women";
  const KID_CATEGORY = "kid";

  const { new_collections } = useContext(ShopContext);
  console.log(new_collections);

  return (
    <>
      {path === MEN_PATH && (
        <div className="container">
          <img src={men_banner} alt="" />
          <h1>POPULAR IN MEN</h1>
          <hr />
          <div className="container-item">
            {new_collections
              .filter((x) => x.category === MEN_CATEGORY)
              .map((item, index) => {
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
      )}
      {path === WOMEN_PATH && (
        <div className="container">
          <img src={women_banner} alt="" />
          <h1>POPULAR IN WOMEN</h1>
          <hr />
          <div className="container-item">
            {new_collections
              .filter((x) => x.category === WOMEN_CATEGORY)
              .map((item, index) => {
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
      )}
      {path === KID_PATH && (
        <div className="container">
          <img src={kid_banner} alt="" />
          <h1>POPULAR IN WOMEN</h1>
          <hr />
          <div className="container-item">
            {new_collections
              .filter((x) => x.category === KID_CATEGORY)
              .map((item, index) => {
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
      )}
    </>
  );
};

export default ShopCategory;

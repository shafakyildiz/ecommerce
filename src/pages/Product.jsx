import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import "./styles/Product.css";

const Product = ({ match }) => {
  const { productId } = useParams();
  const products = [
    {
      id: 1,
      name: "Product A",
      price: 50,
      description: "Description for Product A",
    },
    {
      id: 2,
      name: "Product B",
      price: 75,
      description: "Description for Product B",
    },
    // Add more products as needed
  ];

  const { product_data } = useContext(ShopContext);

  // Find the product based on the ID from the route parameter
  const product = product_data.find((p) => p.id === productId);
  console.log(product);

  // Render the product details
  return (
    <div>
      {product ? (
        <div className="product-container">
          <div className="product-image-container">
            <img src={product.image} alt="" />
          </div>
          <h2>{product.name}</h2>
          <div>
            <p className="item-price-old">${product.old_price}</p>
            Price: ${product.new_price}{" "}
          </div>

          <p>Category: {product.category.toUpperCase()}</p>
        </div>
      ) : (
        <p>Product not found</p>
      )}
    </div>
  );
};

export default Product;

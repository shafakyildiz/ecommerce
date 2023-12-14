import React, { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import "./styles/Cart.css";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  const { cartCount, setCartCount, increment, decrement } =
    useContext(ShopContext);

  const addToCart = (item) => {
    const updatedCart = [...cartItems, item];
    setCartItems(updatedCart);
    updateTotal(updatedCart);
    increment();
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
    updateTotal(updatedCart);
    decrement();
  };

  const updateTotal = (cart) => {
    const newTotal = cart.reduce((acc, item) => acc + item.price, 0);
    setTotal(newTotal);
  };

  return (
    <div style={styles.cartContainer}>
      <h2>Your Cart</h2>
      <ul style={styles.cartItemsList}>
        {cartItems.map((item, index) => (
          <li key={index} style={styles.cartItem}>
            {item.name} - ${item.price}
            <button
              style={styles.removeButton}
              onClick={() => removeFromCart(index)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <p style={styles.total}>Total: ${total}</p>
      <div style={styles.availableProducts}>
        <h3>Available Products</h3>
        <button
          style={styles.addButton}
          onClick={() => {
            addToCart({ name: "Product 1", price: 10 });
            increment;
          }}
        >
          Add Product 1
        </button>
        <button
          style={styles.addButton}
          onClick={() => addToCart({ name: "Product 2", price: 20 })}
        >
          Add Product 2
        </button>
        {/* Add more products as needed */}
      </div>
    </div>
  );
};

const styles = {
  cartContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    border: "3px solid #ddd",
    padding: "6em",
    borderRadius: "8px",
    margin: "5% auto",
  },
  cartItemsList: {
    listStyle: "none",
    padding: "0",
  },
  cartItem: {
    borderBottom: "1px solid #ddd",
    padding: "10px 0",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  removeButton: {
    background: "#dc3545",
    color: "#fff",
    border: "none",
    padding: "5px 10px",
    cursor: "pointer",
    borderRadius: "4px",
  },
  total: {
    fontWeight: "bold",
    marginTop: "10px",
  },
  availableProducts: {
    marginTop: "20px",
  },
  addButton: {
    background: "#28a745",
    color: "#fff",
    border: "none",
    padding: "8px 12px",
    cursor: "pointer",
    borderRadius: "4px",
    marginRight: "10px",
    marginBottom: "0.5em",
  },
};

export default Cart;

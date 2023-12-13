import React, { useState } from "react";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  const addToCart = (item) => {
    const updatedCart = [...cartItems, item];
    setCartItems(updatedCart);
    updateTotal(updatedCart);
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
    updateTotal(updatedCart);
  };

  const updateTotal = (cart) => {
    const newTotal = cart.reduce((acc, item) => acc + item.price, 0);
    setTotal(newTotal);
  };

  return (
    <div>
      <h2>Your Cart</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price}
            <button onClick={() => removeFromCart(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <p>Total: ${total}</p>
      <div>
        <h3>Available Products</h3>
        {/* Example products */}
        <button onClick={() => addToCart({ name: "Product 1", price: 10 })}>
          Add Product 1
        </button>
        <button onClick={() => addToCart({ name: "Product 2", price: 20 })}>
          Add Product 2
        </button>
        {/* Add more products as needed */}
      </div>
    </div>
  );
};

export default Cart;

import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import "../css/ShoppingCart.css";

const ShoppingCart = () => {
  const cart = useContext(CartContext);

  const getCartTotal = () => {
    return cart.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  };

  return (
    <div className="shopping-cart">
      <h2>Your Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                <span>{item.title}</span>
                <span>${item.price}</span>
                <span>Quantity: {item.quantity}</span>
              </li>
            ))}
          </ul>
          <p>Total: ${getCartTotal()}</p>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;

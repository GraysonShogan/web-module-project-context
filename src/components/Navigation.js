import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import "../css/Navigation.css";
const Navigation = () => {
  const cart = useContext(CartContext);

  return (
    <nav className="navigation">
      <Link to="/">Products</Link>
      <Link to="/cart">Cart ({cart.length})</Link>
    </nav>
  );
};

export default Navigation;

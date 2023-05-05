import React, { useState } from "react";
import { Route } from "react-router-dom";
import data from "./data";

// Components
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";

// Context
import { ProductContext } from "./contexts/ProductContext";
import { CartContext } from "./contexts/CartContext";

function App() {
  const [products] = useState(data);
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    // Check if the item is already in the cart
    const itemInCart = cart.find((cartItem) => cartItem.id === item.id);

    if (itemInCart) {
      // If the item is already in the cart, update the quantity
      setCart(
        cart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      // If the item is not in the cart, add it with a quantity of 1
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  return (
    <div className="App">
      <ProductContext.Provider value={{ products, addItem }}>
        <CartContext.Provider value={cart}>
          <Navigation />
          <Route exact path="/" component={Products} />
          <Route path="/cart" component={ShoppingCart} />
        </CartContext.Provider>
      </ProductContext.Provider>
    </div>
  );
}

export default App;

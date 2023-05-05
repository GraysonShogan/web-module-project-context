import React, { useState } from "react";
import { Route } from "react-router-dom";
import data from "./data";

// Components
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";

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
      <Navigation cart={cart} />

      {/* Routes */}
      <Route exact path="/">
        <Products products={products} addItem={addItem} />
      </Route>

      <Route path="/cart">
        <ShoppingCart cart={cart} />
      </Route>
    </div>
  );
}

export default App;

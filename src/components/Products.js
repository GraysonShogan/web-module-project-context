import React, { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import "../css/Products.css";
const Products = () => {
  const { products, addItem } = useContext(ProductContext);

  return (
    <div className="products-container">
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <h2>{product.title}</h2>
          <p>{product.price}</p>
          <button onClick={() => addItem(product)}>Add to cart</button>
        </div>
      ))}
    </div>
  );
};

export default Products;

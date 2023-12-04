import React from "react";
import Product from "./Product";
const ProductList = ({ products, className }) => {
  return (
    <ul className={className}>
      {products.map((product) => (
        <Product
          key={product.name + product.price}
          name={product.name}
          description={product.description}
          price={product.price}
          product_image={product.product_image}
          discount_amount={product.discount_amount}
        />
      ))}
    </ul>
  );
};

export default ProductList;

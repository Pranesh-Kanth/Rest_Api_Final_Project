import React from 'react';
import img from '../assets/nav.jpg'
const ProductList = ({ products, addToCart }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product">
          <img src='https://img.freepik.com/premium-vector/medicine-jar-pills-strip-cartoon-icon-illustration-healthcare-medicine-icon-concept-isolated-premium-flat-cartoon-style_138676-1621.jpg?w=2000' alt={product.name} />
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>${product.price}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;

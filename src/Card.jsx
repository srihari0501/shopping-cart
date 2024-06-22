import React from 'react';

function Card({ product }) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={product.img} className="card-img-top" alt={product.title} />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">{product.price ? `$${product.price}` : 'Price Not Available'}</p>
        <a href="#" className="btn btn-primary">Add to cart</a>
      </div>
    </div>
  );
}

export default Card;

import React from 'react';
import { BiRupee } from "react-icons/bi";


function Card({ product, handleCartChange, isInCart }) {
  return (
   <div>
      <div className="card">
      {product.type === "sale" && (
          <button type="button" className="button position-absolute top-0 end-0">Sale</button>
        )}
        <img src={product.img} className="img-thumbnail" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text"><BiRupee />{product.price}</p>
          <p className="card-text"><b>Description:</b> {product.text}</p>
          <button href="#" className="btn btn-primary" onClick={() => handleCartChange(product)}>
            {isInCart ? "Remove from cart" : "Add to cart"}
          </button>
        </div>
      </div>
      </div>
  );
}

export default Card;


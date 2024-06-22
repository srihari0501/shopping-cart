import React from 'react';

function Home({ products, addToCart, removeFromCart, isProductInCart }) {
  return (
    <div className="container">
      <h1>Home</h1>
      <div className="row">
        {products.map(product => (
          <div key={product.id} className="col-md-4">
            <div className="card">
              <img src={product.img} className="card-img-top" alt={product.title} />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">${product.price}</p>
                {isProductInCart(product) ? (
                  <button className="btn btn-danger" onClick={() => removeFromCart(product)}>Remove from Cart</button>
                ) : (
                  <button className="btn btn-primary" onClick={() => addToCart(product)}>Add to Cart</button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;

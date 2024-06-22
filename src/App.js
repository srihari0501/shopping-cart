import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
// import Shop from './Shop';
import Navbar from './Navbar'; // Import the Navbar component

const products = [
  { id: 1, img: "/necklace.jpg", title: "Necklace", price: "200" },
  { id: 2, img: "/alphanumber.jpg", title: "Alphanumber", price: "100" },
  { id: 3, img: "/bag.jpg", title: "Bag", price: "500" },
  { id: 4, img: "/dartboard.jpg", title: "Dartboard", price: "850" },
  { id: 5, img: "/ganesh.jpg", title: "Ganesh", price: "1000" },
  { id: 6, img: "/sandart.jpg", title: "Sand Art", price: "2500" },
  { id: 7, img: "/nightlamp.jpg", title: "Night Lamp", price: "300" },
  { id: 8, img: "/robocar.jpg", title: "Car", price: "500" }
];

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (product) => {
    setCart(cart.filter(item => item.id !== product.id));
  };

  const isProductInCart = (product) => {
    return cart.some(item => item.id === product.id);
  };

  return (
    <div className="App">
      <Navbar count={cart.length} /> {/* Include Navbar and pass cartCount */}

      <Routes>
        <Route path="/" element={<Home products={products} addToCart={addToCart} removeFromCart={removeFromCart} isProductInCart={isProductInCart} />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/shop" element={<Shop products={products} addToCart={addToCart} removeFromCart={removeFromCart} isProductInCart={isProductInCart} />} /> */}
      </Routes>

      <footer className="bg-dark text-white text-center py-3">
        <div className="container">
          <p>Copyright © Your Website 2024</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Card from './Card';
import Navbar from './Navbar';

function App() {
  const [cartItems, setCartItems] = useState([]); // State to keep track of cart items

  // Function to handle adding or removing items from the cart
  const handleCartChange = (product) => {
    const existingIndex = cartItems.findIndex(item => item.id === product.id);
    if (existingIndex !== -1) {
      // Remove item if already in cart
      const updatedCart = [...cartItems];
      updatedCart.splice(existingIndex, 1);
      setCartItems(updatedCart);
    } else {
      // Add item if not in cart
      setCartItems([...cartItems, product]);
    }
  };


const products = [
  {id:1,
    img:"/sand.jpg", 
    title:"Sand Art", 
     price:"2500", 
  text:"Sand art pictures moving with water, each time you turn the direction, you will get different shapes of mountains, oceans, snow-capped mountains.Moving sand art decor can create a unique atmosphere and style for your space." },
 ,
  {
    id:2,
    img:"/badge.jpg", 
  title:"Badge", 
  type:"sale", 
  price:"100", 
  text:"India Flag Badges is Attractive, very stunning. High quality plastic and steel material. India Flag Badges Comes With Glossy Finish Which gives Extra Shine. The Badges is 58mm diameter with stainless steel pin backside. Proudly Made In India" },

  {id:3,
    img:"/buddha.jpg", 
  title:"Buddha Idol", 
  price:"500", 
  text:"Global Grabbers Polyresin Sitting Buddha Idol Statue for Home Decor Decoration. Material: Polyresin. Size (L x W x H): 18.5 cm x 8 cm x 24 cm: Weight : 300 gm. Colour: Orange White Glossy. Care Instruction: Wipe with soft clean cloth.Made In India" },
  {id:4,
    img:"/baby.jpg",
   title:"Beaded Bracelet Set", 
   type:"sale", 
    price:"320", 
    text:"Beaded bracelets sets (contain 4 pcs) made of crystal, resin beads, designs of multi-colored and sparkle, that will make your daughter mesmerized. The diameter of each bead is about 8 mm, stretchable size and suitable for most age of girls to wear" },
  {id:5,
    img:"/pocketwatch.jpg",
   title:"Pocket Watch",  
   type:"sale",  
   price:"850", 
   text:"WATCH Pendant with Chain Material : Zinc Alloy Color : ANTIQUE METAL , color and design as in picture. Cute Owl Pocket Watch Pendant Diameter 25 mm , Chain Length : 80 cm Package contents - 1. Watch movement type-Automatic" },
   { id:6, 
    img: "/bracelet.jpg", 
    title: "Bracelet",
     price: "530",
    text: "Combo of two rose gold plated stylish bracelets. Five layer rose gold plated for high durability, Nickel free and lead free as per international standards, Anti-allergic and safe for skin. Free size with 6 cm extended adjustable chain" },
  {id:7,
    img:"./colors.jpg",
     title:"Camlin Color Pencils",   
     price:"220", 
  text:"Camlin triangular colour pencils are break-resistant and are designed to provide bright, vibrant and precise colouring. Comes in a pack of 24 shades with an attractive glitter sharpener. The triangular shape gives a better hold and makes colouring easy" },
  {id:8,
    img:"./robocar.jpg", 
    title:"Cable World Robot Car", 
    type:"sale",  
    price:"450", 
  text:"Robot Races Car Toy (Battery Operated) 2 in 1 Transform Car Toy with 4D Light Bright Lights and Music.Cable World.The colourful cars will keep your child's attention and leave them having endless fun. Recommended for ages 2 years" }
];

return (
  <div className="App">
          <Navbar count={cartItems.length} />
    <header>
    <div className="col-12 p-5" id="header">
<h1 >Shop in style</h1>
<p className="text">With this shop hompeage template</p>
</div>
    </header>
   
      <div className="row row-cols-lg-4 row-cols-md-3 row-cols-sm-2 g-4 m-5">
        {products.map((product) => (
          <Card key={product.id} product={product} handleCartChange={handleCartChange} isInCart={cartItems.some(item => item.id === product.id)} />
        ))}
      </div>
    
    <footer>
    <div className="col-12">
<p className="text p-5">Copyright © Your Website 2023</p>
</div>
    </footer>
  </div>
);
}

export default App;

// Navbar.jsx

import React from 'react';
import { BsFillCartFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

function Navbar({ count }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Shopping Cart
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
          </ul>
          <div className="d-flex">
            <button className="btn btn-outline-dark" type="button">
              <BsFillCartFill /> Cart ({count})
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

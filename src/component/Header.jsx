// src/component/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import image1 from './images/logo.png';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container nav">
        <h1 className="logo">
          <img src={image1} alt="Bag" id="img1" />
          <div className="logo-text">
            <p id="b1">Bag Store</p>
            <span id="slogan">Smart | Simple | Bagpacksy</span>
          </div>
        </h1>

        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><a href="/#shop">Shop</a></li>
            <li><Link to="/about">About</Link></li>
            <li><a href="/about#contact">Contact</a></li>
            <li><Link to="/login">Sign-in</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

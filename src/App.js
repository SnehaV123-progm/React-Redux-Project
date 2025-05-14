// src/App.jsx
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './component/Header';
import Hero from './component/Hero';
import ProductList from './component/ProductList';
import Cart from './component/Cart';
import About from './component/About';
import Footer from './component/Footer';
import 'antd/dist/reset.css';

function HomePage() {
  return (
    <>
      <Hero />
      <ProductList />
      <Cart />
    </>
  );
}

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

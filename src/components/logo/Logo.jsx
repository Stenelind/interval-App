import React from 'react';
import { Link } from 'react-router-dom'; 
import './logo.css';

function Logo() {
  return (
    <section className="logo">
      <Link to="/set-timer">
        <img src="./src/assets/Logo.svg" alt="" className="logo_img" />
      </Link>
      <h1 className="logo_header">Interval</h1>
      <p className="logo_text">For all your timing needs</p>
    </section>
  );
}

export default Logo;
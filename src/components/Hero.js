import React from 'react';
import './Hero.css';
import logo from '../assets/logo.svg'

const Hero = () => {
  return (
    <header className="header">
      <div className="content-container">
        <div className="navigation-container">
          <img src={logo} alt="Logo" />
          <nav>
            <ul>
              <li>
                <a href="#products">PRODUCTS</a>
              </li>
              <li>
                <a href="#about">ABOUT US</a>
              </li>
              <li>
                <a href="#contact">CONTACT</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Hero;

import React from 'react';
import './Header.css';
import logo from '../assets/logo.svg'

const Header = () => {
    return (
        <header>
            <img src={logo} alt="Logo" />
            <nav>
                <ul>
                    <li><a href="#products">PRODUCTS</a></li>
                    <li><a href="#about">ABOUT US</a></li>
                    <li><a href="#contact">CONTACT</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
import React from 'react';
import './Footer.css';
import footer from '../assets/footer.png';

const Footer = () => {
    return (
        <footer>
            <img src={footer} alt="Overlay with soaps" />
            <div className='content'>
                <div>
                    @yo.ya.cosmetics
                </div>
                <div>
                    Made by [logo]
                </div>
                <div> Impressum
                    Copywright YOYA 2023
                </div>
            </div>
        </footer>
    );
}

export default Footer;

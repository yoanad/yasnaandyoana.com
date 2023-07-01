import React from 'react';
import './Footer.css';
import footer from '../assets/footer.png';
import { ReactComponent as Logo } from '../assets/logo.svg';
import { ReactComponent as Instagram } from '../assets/instagram.svg'

const Footer = () => {
    return (
      <footer className="section footer">
        <img className="overlay" src={footer} alt="Overlay with soaps" />
        <div className="content-container">
          <div className="content">
            <div className="content-column">
              <span className="instagram">
                <Instagram />
                <a href="https://www.instagram.com/yo.ya.cosmetics/">
                  @yo.ya.cosmetics
                </a>
              </span>
            </div>
            <div className="content-column">
              <span className="logo">
                Made by <Logo />
              </span>
            </div>
            <div className="content-column copyright">
              <span>Copyright &copy; YOYA COSMETICS 2023</span>
            </div>
          </div>
        </div>
      </footer>
    );
}

export default Footer;

import React from 'react';
import './Overview.css';
import overlay from '../assets/soap-overview.jpg'
import overlay_mobile from '../assets/soap-overview-mobile.jpg'
import { useMediaQuery } from 'react-responsive';


const Overview = () => {
  const isMobile = useMediaQuery({ maxWidth: 480 });

  return (
    <section className="overview-container section" id="products">
      <div className="content-container">
        <h1>Give your skin a nourishing clean!</h1>
        <p className="text">Start today with our soap heroes!</p>
        <div className="image-wrapper">
          <img alt='Soap overview' src={isMobile ? overlay_mobile : overlay} loading="lazy" />
        </div>
        <div className="cta-wrapper">
          <h2>Did you find the right one for YOU?</h2>
          <a href="#contact">Contact us!</a>
        </div>
      </div>
    </section>
  );
};

export default Overview;

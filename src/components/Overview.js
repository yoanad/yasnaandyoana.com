import React from 'react';
import './Overview.css';
import overlay from '../assets/Soap_overlay.svg'


const Overview = () => {
    return (
        <section className="overview-container" href="products">
            <h1>Give your skin a nourishing clean!</h1>
            <p className='text'>Start today with our soap heroes!</p>
            <div className='image-wrapper'>
                <img src={overlay} />
            </div>
            <div className='cta-wrapper'>
                <h2>Did you find the right one for YOU?</h2>
                <a href="#contact">Contact us!</a>
            </div>
        </section>
    );
}

export default Overview;
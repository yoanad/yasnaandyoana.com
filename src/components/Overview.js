import React from 'react';
import './Overview.css';
import overlay from '../assets/Soap_overlay.svg'


const Overview = () => {
    return (
        <section className="overview-container">
            <h1>Give your skin a nourishing clean!</h1>
            <p className='text'>Start today with our soap heroes!</p>
            <img src={overlay} />
            <div>
                <h2>Did you find the right one for YOU?</h2>
                <button>Contact us!</button>
            </div>
        </section>
    );
}

export default Overview;
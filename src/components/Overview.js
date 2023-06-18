import React from 'react';
import overlay from '../assets/Soap_overlay.png'

const Overview = () => {
    return (
        <section className="overview-container">
            <h1>Give your skin a nourishing clean!</h1>
            <h2>Start today with our soap heroes!</h2>
            <img src={overlay} />
            <div>
                <h3>Did you find the right one for YOU?</h3>
                <button>Contact us!</button>
            </div>
        </section>
    );
}

export default Overview;
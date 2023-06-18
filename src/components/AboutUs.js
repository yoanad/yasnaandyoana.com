import React from 'react';
import './AboutUs.css';
import founders from '../assets/founders.png'

const AboutUs = () => {
    return (
        <section className="about-us-container">
            <h3>ABOUT US</h3>
            <div className="about-us-columns">
                <div className="about-us-column">
                    <p>Text about your company</p>
                </div>
                <div className="about-us-column">
                    <img src={founders} />
                </div>
            </div>
        </section>
    );
}

export default AboutUs;

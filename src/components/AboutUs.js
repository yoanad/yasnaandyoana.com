import React from 'react';
import './AboutUs.css';
import founders from '../assets/founders.png'

const AboutUs = () => {
    return (
        <section className="about-us-container">
            <h3>ABOUT US</h3>
            <div className="about-us-columns">
                <div className="about-us-column">
                    <p>Welcome to YOYA! We are Yasna and Yoana, two friends who share a passion for natural skincare.
                        <br />
                        <br />
                        Our journey began with a shared desire to promote a more natural and sustainable way of living. We started by making natural skincare products for ourselves and our friends, and soon realized that there was a demand for our products beyond our circle. Thus, YOYA was born.
                        <br />
                        <br />
                        We believe that nature provides us with everything we need to nourish and heal our skin. That's why we use only the best natural ingredients in our handmade soaps and ointments
                        <br />
                        <br />
                        We are proud to offer you soaps that are not only good for your skin but also good for the environment. Our commitment to sustainability extends beyond our ingredients, as we use eco-friendly packaging and strive to minimize waste.
                        <br />
                        <br />
                        Join us on our journey towards healthy and glowing skin, naturally. Follow us on social media (TODO: add insta link)</p>
                </div>
                <div className="about-us-column">
                    <img src={founders} />
                </div>
            </div>
        </section>
    );
}

export default AboutUs;

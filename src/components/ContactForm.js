import React from 'react';
import './ContactForm.css';

const ContactForm = () => {
    return (
        <section className="contact-form">
            <h3>Contact Us</h3>
            <form>
                <input type="email" placeholder="Your email" />
                <textarea placeholder="Your message"></textarea>
                <button type="submit">Send</button>
            </form>
        </section>
    );
}

export default ContactForm;

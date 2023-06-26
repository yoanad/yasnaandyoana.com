import React from 'react';
import './ContactForm.css';

const ContactForm = () => {
    return (
        <section className="contact-form" id="contact">
            <h1>We sparked your interest? Talk to us!</h1>
            <p>We are happy you landed here! Don't hesitate to ask us any questions about products and orders!</p>
            <form>
                <input type="email" placeholder="Your email" />
                <textarea placeholder="Your message"></textarea>
                <button type="submit">Send</button>
            </form>
        </section>
    );
}

export default ContactForm;

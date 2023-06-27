import React from 'react';
import './ContactForm.css';

const ContactForm = () => {
    return (
        <section className="contact-form" id="contact">
            <h1>We sparked your interest? Talk to us!</h1>
            <p>We are happy you landed here! Don't hesitate to ask us any questions about products and orders!</p>
            <form>
                <label for="email">Your email</label>
                <input type="email" id="email" />
                <label for="message">What do you want to share with us (orders, product wishes, ideas, questions)?</label>
                <textarea id="message"></textarea>
                <button type="submit">Submit</button>
            </form>
        </section>
    );
}

export default ContactForm;

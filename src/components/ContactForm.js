import React, { useState } from 'react';
import './ContactForm.css';

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}

const ContactForm = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({ email: "", message: "" });
    console.log(isSubmitted)

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const onSubmit = (e) => {
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...formData })
        })
            .then(() => setIsSubmitted(true))
            .catch(error => alert(error));

        e.preventDefault();
    }

    return (
        <section className="contact-form" id="contact">
            <h1>We sparked your interest? Talk to us!</h1>
            <p>We are happy you landed here! Don't hesitate to ask us any questions about products and orders!</p>
            <form name="contact" netlify netlify-honeypot="bot-field" hidden className='hidden-form'>
                <input type="email" name="email" />
                <textarea name="message"></textarea>
            </form>
            {isSubmitted ? <h2>Form succesfully submitted!</h2> : (<form onSubmit={onSubmit}>
                <input type="hidden" name="form-name" value="contact" />
                <label htmlFor="email">Your email</label>
                <input type="email" id="email" value={formData.email} name="email" onChange={onChange} required />
                <label htmlFor="message">What do you want to share with us (orders, product wishes, ideas, questions)?</label>
                <textarea id="message" required value={formData.message} name="message" onChange={onChange}></textarea>
                <button type="submit">Submit</button>
                {/* <span className='checkbox-container'>
                    <input type="checkbox" name="checkbox" />
                    <label for="checkbox">Keep me up to date about the official release and other news!</label>
                </span> */}
            </form>)}
        </section>
    );
}

export default ContactForm;

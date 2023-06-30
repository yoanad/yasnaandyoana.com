import React, { useState } from 'react';
import './ContactForm.css';

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}

const ContactForm = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({ email: "", message: "", consent: false });

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const onCheckboxChange = (e) => {
        setFormData({ ...formData, [e.target.name]: !formData.consent });
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
      <section className="contact-form section" id="contact">
        <div className="content-container">
          <h1>We sparked your interest? Talk to us!</h1>
          <p>
            We are happy you landed here! Don't hesitate to ask us any questions
            about products and orders!
          </p>
          {isSubmitted ? (
            <h2>Form succesfully submitted!</h2>
          ) : (
            <form onSubmit={onSubmit}>
              <input type="hidden" name="form-name" value="contact" />
              <label htmlFor="email">Your email</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                name="email"
                onChange={onChange}
                required
              />
              <label htmlFor="message">
                What do you want to share with us (orders, product wishes,
                ideas, questions)?
              </label>
              <textarea
                id="message"
                required
                value={formData.message}
                name="message"
                onChange={onChange}
              ></textarea>
              <span className="checkbox-container">
                <input
                  type="checkbox"
                  name="consent"
                  id="consent-checkbox"
                  onChange={onCheckboxChange}
                />
                <label htmlFor="consent-checkbox">
                  Keep me up to date about the official release and other news!
                </label>
              </span>
              <button type="submit">Submit</button>
            </form>
          )}
        </div>
      </section>
    );
}

export default ContactForm;

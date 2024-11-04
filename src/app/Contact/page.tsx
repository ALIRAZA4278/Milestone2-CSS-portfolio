// ContactForm.js
import React from 'react';
import './Contact.css';

export default function ContactForm() {
  return (
    <div className="form-container">
      <form action="https://api.web3forms.com/submit" method="POST" className="form">
        <input type="hidden" name="access_key" value="b60b9c26-8567-4e57-baa2-98262de4f80d" />

        <h2 className="title">Contact Us</h2>

        <div className="form-group">
          <label htmlFor="name" className="label">Name</label>
          <input type="text" name="name" id="name" required className="input" />
        </div>

        <div className="form-group">
          <label htmlFor="email" className="label">Email</label>
          <input type="email" name="email" id="email" required className="input" />
        </div>

        <div className="form-group">
          <label htmlFor="phone" className="label">Phone Number</label>
          <input type="tel" name="phone" id="phone" required className="input" />
        </div>

        <div className="form-group">
          <label htmlFor="subject" className="label">Subject</label>
          <input type="text" name="subject" id="subject" required className="input" />
        </div>

        <div className="form-group">
          <label htmlFor="message" className="label">Message</label>
          <textarea name="message" id="message" rows={5} required className="textarea"></textarea>
        </div>

        <div className="text-center">
          <button type="submit" className="submit-button">Submit Form</button>
        </div>
      </form>
    </div>
  );
}

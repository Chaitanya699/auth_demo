import React from 'react';
import '../csss/Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-form">
        <h2>Contact Us</h2>
        <form>
          <div className="form-group">
            <label htmlFor="mobile">Mobile Number:</label>
            <input type="tel" id="mobile" name="mobile" placeholder="Enter your mobile number" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" placeholder="Enter your message" className="form-control"></textarea>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">Send Message</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;

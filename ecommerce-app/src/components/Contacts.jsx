import React from 'react';
import { BsGeoAltFill, BsFillTelephoneFill, BsFillEnvelopeFill } from 'react-icons/bs';
import '../styles/contacts.css';

const Contacts = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        {/* Left column for contact information */}
        <div className="contact-info">
          <h2 className="contact-heading">Get in Touch</h2>
          <p className="contact-description">
            We would love to hear from you! Please feel free to reach out to us with any questions, comments, or suggestions.
          </p>

          <div className="contact-details">
            <div className="contact-item">
              <BsGeoAltFill className="contact-icon" />
              <div className="contact-text">
                <h4>Address</h4>
                <p>1234 E-Shop Lane, Suite 100, Tech City, 54321</p>
              </div>
            </div>
            <div className="contact-item">
              <BsFillTelephoneFill className="contact-icon" />
              <div className="contact-text">
                <h4>Phone</h4>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="contact-item">
              <BsFillEnvelopeFill className="contact-icon" />
              <div className="contact-text">
                <h4>Email</h4>
                <p>support@eshop.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right column for the contact form */}
        <div className="contact-form">
          <h2 className="form-heading">Send Us a Message</h2>
          <form className="form">
            <input type="text" placeholder="Your Name" className="form-input" required />
            <input type="email" placeholder="Your Email" className="form-input" required />
            <textarea placeholder="Your Message" rows="6" className="form-textarea" required></textarea>
            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
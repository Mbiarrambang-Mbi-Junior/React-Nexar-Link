import React from 'react';
import '../models/contact.css';

export default function Contact() {
    return (
        <>
            <section className="section contact-section" id="contact">
                <div className="section-header">
                    <h2 className="section-title">Get in touch</h2>
                    <p className="section-subtitle">Do you have a project in mind? Contact me here.</p>
                </div>
                <div className="contact-container">
                    <address className="contact-info">
                        <h3 className="contact-info-title">Find Me <i className="uil uil-corner-right-down"></i></h3>
                        <p className="contact-detail">
                            <i className="uil uil-envelope"></i>
                            <a href="mailto:mbiarrambangj@gmail.com" aria-label="Send an email to Mbiarrambang Mbi Junior">
                                Email: mbiarrambangj@gmail.com
                            </a>
                        </p>
                        <p className="contact-detail">
                            <i className="uil uil-phone"></i>
                            <a href="tel:+237679724959" aria-label="Call Mbiarrambang Mbi Junior">
                                Tel: +237 679 724 959
                            </a>
                        </p>
                    </address>

                    <form className="contact-form" action="#" method="POST" aria-label="Contact form for Mbiarrambang Mbi Junior">
                        <div className="form-group">
                            {/* In React, the 'for' attribute becomes 'htmlFor' */}
                            <label htmlFor="name" className="sr-only">Name</label> 
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="form-input"
                                placeholder="Name"
                                required
                            />
                        </div>
                        <div className="form-group">
                             <label htmlFor="email" className="sr-only">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="form-input"
                                placeholder="Email"
                                required
                            />
                        </div>
                        <div className="form-group">
                             <label htmlFor="message" className="sr-only">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                className="form-textarea"
                                placeholder="Message"
                                required
                            ></textarea>
                        </div>
                        <div className="form-actions">
                            <button type="submit" className="btn send-btn">
                                Send <i className="uil uil-message"></i>
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
}
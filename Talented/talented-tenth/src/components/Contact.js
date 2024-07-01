// src/components/Contact.js
import React from 'react';
import '../App.css';

const Contact = () => {
  return (
    <div className="contact container" id="contact">
      <div className="short-contact">
        <h2>Contact Us</h2>
        <p className="w3-xlarge">We would love to hear from you!</p>
        <div className="w3-large w3-margin-top contact-info">
          <i className="fa fa-location-arrow"></i>
          <span style={{ marginLeft: '10px' }}>
            <a href="https://maps.app.goo.gl/B1TQL2QRN3mdXMdB7" target="_blank" rel="noopener noreferrer">
              World of Inquiry School No.58
              <br />
               200 University Ave
              <br />
               Rochester, NY 14605
            </a>
          </span>
          <br />
          <br />
          <i className="fa fa-envelope-o"></i>
          <span style={{ marginLeft: '10px' }}>
            <a href="mailto:info@example.com">info@example.com</a>
          </span>
          <br />
          <br />
          <i className="fa fa-phone"></i>
          <span style={{ marginLeft: '10px' }}>
            <a href="tel:+1234567890">+1 (234) 567-890</a>
          </span>
          <br />
        </div>
        <div className="w3-large w3-margin-top contact-info">
          <i className="fa fa-linkedin"></i>
          <span style={{ marginLeft: '10px' }}>
            <a href="https://www.linkedin.com/in/talented-tenth-5a725126a/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              - LinkedIn
            </a>
          </span>
          <br />
          <i className="fa fa-facebook"></i>
          <span style={{ marginLeft: '10px' }}>
            <a href="https://www.facebook.com/groups/694597765787106/?ref=share&mibextid=NSMWBT" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              - Facebook
            </a>
          </span>
          <br />
        </div>
      </div>
      <div className="form w3-margin-top">
        <div className="form-container w3-round-xlarge">
          <form className="w3-black w3-padding-large w3-round-large">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Your name" />

            <label htmlFor="email">Email</label>
            <input type="text" id="email" name="email" placeholder="Your email" />

            <label htmlFor="subject">Subject</label>
            <textarea id="subject" name="subject" placeholder="subject"></textarea>

            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="Write something.." style={{ height: '200px' }}></textarea>

            <input className="w3-metro-blue" type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

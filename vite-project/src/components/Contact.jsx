import React from 'react';
import '../App.css';

const Contact = () => {
  return (
    <div className="contact">
      <h2>Contact Me</h2>
      <p>
        I'd love to hear from you! Feel free to reach out to me through one of the following methods:
      </p>
      <ul>
        <li>
          <strong>Email:</strong> [Your Email Address]
        </li>
        <li>
          <strong>LinkedIn:</strong> [Your LinkedIn Profile]
        </li>
        <li>
          <strong>GitHub:</strong> [Your GitHub Profile]
        </li>
        <li>
          <strong>Twitter:</strong> [Your Twitter Profile]
        </li>
      </ul>
      <p>
        You can also use the contact form below to send me a message:
      </p>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4"></textarea>
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;

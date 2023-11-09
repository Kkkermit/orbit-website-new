import React from 'react';
import '../App.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="contact-info">
        </div>
        <div className="social-links">
          <h3>Connect with Me</h3>
          <ul>
            <p><a href="[Your LinkedIn URL]" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
            <p><a href="[Your GitHub URL]" target="_blank" rel="noopener noreferrer">GitHub</a></p>
            <p><a href="[Your Twitter URL]" target="_blank" rel="noopener noreferrer">Twitter</a></p>
          </ul>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; {new Date().getFullYear()} Kkermit. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

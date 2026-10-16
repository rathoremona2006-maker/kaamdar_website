import React from 'react';
import './footer.css';

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="ft-water left-water"></div>
      <div className="ft-water right-water"></div>

      <div className="footer-top">
        <div className="ft-logo">
          <div className="ft-logo-icon">🔧</div>
          <div>
            <h3>KAAMDAAR</h3>
            <span>Har Kaam Turant</span>
          </div>
        </div>

      
        <nav className="ft-nav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#features" className="active">Features</a>
          <a href="#app-intro">App Introduction • How It</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#faqs">FAQs</a>
          <a href="#contact">Contact</a>
          <a href="#services">Services</a>
          <a href="#blog">Blog</a>
          <a href="#terms">Terms & Conditions</a>
          <a href="#privacy">Privacy Policy</a>
          <a href="#delete">Delete Account</a>
        </nav>


        <div className="ft-lang">
          <span className="flag">🇺🇸</span>
          <span>English</span>
          <span className="arrow">˅</span>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 KAAMDAAR. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
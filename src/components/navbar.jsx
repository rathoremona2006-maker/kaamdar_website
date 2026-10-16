import React, { useState } from 'react';
import './navbar.css'

const Navbar = () => {
  // === HARDCODED (ACTIVE NOW) ===
  const logo = "/images/kaamdaar-logo.png";
  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'features', label: 'Features' },
    { id: 'appIntroduction', label: 'App Introduction • How It Works' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'faqs', label: 'FAQs' },
    { id: 'contact', label: 'Contact' },
  ];
  const [active, setActive] = useState('features');

  const scrollToSection = (id) => {
    setActive(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="KAAMDAAR" />
      </div>
      <ul className="nav-links">
        {navLinks.map(link => (
          <li key={link.id} className={active === link.id ? 'active' : ''} onClick={() => scrollToSection(link.id)}>
            {link.label}
          </li>
        ))}
      </ul>
      <button className="nav-cta" onClick={() => scrollToSection('download')}>Try Kaamdaar Now</button>
    </nav>
  );
};
export default Navbar;
import React from 'react';
import Navbar from './components/navbar.jsx';
import Hero from './components/hero.jsx';
import Features from './components/features.jsx';
import AppIntroduction from './components/appIntroduction.jsx';
import HowItWorks from './components/howItWorks.jsx';
import Testimonials from './components/testimonial.jsx';
import Faqs from './components/faqs.jsx';
import Contact from './components/contact.jsx';
import Download from './components/download.jsx';
import Footer from './components/footer.jsx';
import './App.css';

// HARDCODED ACTIVE - Continuous scroll website
function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <section id="home"><Hero /></section>
        <section id="features"><Features /></section>
        <section id="appIntroduction"><AppIntroduction /></section>
        <section id="howItWorks"><HowItWorks /></section>
        <section id="testimonials"><Testimonials /></section>
        <section id="faqs"><Faqs /></section>
        <section id="contact"><Contact /></section>
        <section id="download"><Download /></section>
      </main>
      <Footer />
    </div>
  );
}

// DYNAMIC COMMENTED - When you want independent pages with react-router-dom
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// function App() {
//   return (
//     <BrowserRouter>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<><Hero /><Features /><AppIntroduction /><HowItWorks /><Testimonials /><Faqs /><Contact /></>} />
//         <Route path="/features" element={<Features />} />
//         <Route path="/app-introduction" element={<AppIntroduction />} />
//         <Route path="/how-it-works" element={<HowItWorks />} />
//         <Route path="/testimonials" element={<Testimonials />} />
//         <Route path="/faqs" element={<Faqs />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//       <Footer />
//     </BrowserRouter>
//   );
// }

export default App;
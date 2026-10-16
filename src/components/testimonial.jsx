import React from 'react';
import './testimonial.css';
import profile_one from '../assets/profile_one.jpg';
import profile_two from '../assets/profile_two.png';
import profile_three from '../assets/profile_three.png';



export default function Testimonial() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="t-header">
        <span className="t-badge">KAAMDAAR • REAL STORIES</span>
        <h2>Trusted by Our <span>Community</span></h2>
        <p>Real Stories from Vetted Kaamdaar Users</p>
      </div>

      <div className="t-body">
        {/* Left 2 cards + Center blob */}
        <div className="t-cards-area">
          <div className="watercolor"></div>
          
          <div className="t-card t-card-1">
            <div className="blue-corner"></div>
            <div className="t-user">
              <img src={profile_one} alt="Aisha" />
              <div>
                <h4>Aisha</h4>
                <small>Lahore</small>
              </div>
            </div>
            <div className="t-stars">★★★★★</div>
            <p>Vetted electrician fixed my *Turant*! Safe and efficient. Har Kaam Har Kaam Turant!</p>
          </div>

          <div className="t-card t-card-2">
            <div className="blue-corner"></div>
            <div className="t-user">
              <img src={profile_two} alt="Rahul" />
              <div>
                <h4>Rahul</h4>
                <small>Dubai</small>
              </div>
            </div>
            <div className="t-stars">★★★★★</div>
            <p>Best moving service! Easy to book. Reliable pros.</p>
          </div>

          <div className="t-card t-card-3">
            <div className="blue-corner"></div>
            <div className="t-user">
              <img src={profile_three} alt="Sarah" />
              <div>
                <h4>Sarah</h4>
                <small>Noida</small>
              </div>
            </div>
            <div className="t-stars">★★★★★</div>
            <p>Cleaning lady was amazing. Tracked her arrival. Vetted quality.</p>
          </div>
        </div>
        </div>
      <div className="t-slogan">Har Kaam Turant</div>
    </section>
  );
}
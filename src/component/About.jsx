import React, { useState } from 'react';
import './About.css';

const About = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true); // Show popup
    e.target.reset(); // Clear form
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <section className="about" id="about">
      <div className="container about-content">
        <div className="about-text">
          <h2>About Backpacksy</h2>
          <p>
            At <strong>Backpacksy</strong>, we believe that bags are more than just accessories — they’re your everyday
            partners in work, travel, and style.
          </p>
          <p>
            Whether you're heading to the office, hiking trails, or casual outings,
            Backpacksy has the right bag for you.
          </p>
          <p>
            Our products stand for <strong>durability</strong>, <strong>minimalist design</strong>, and
            <strong> eco-conscious craftsmanship</strong>.
          </p>
          <p style={{ fontStyle: 'italic', marginTop: '1rem' }}>
            "Smart. Simple. Backpacksy."
          </p>
        </div>
      </div>

      {/* ✅ Contact Section */}
      <div className="contact-section" id="contact">
        <div className="container contact-content">
          <h2>Contact Us</h2>
          <p>We'd love to hear from you! Please leave your feedback or questions below.</p>
          <form className="contact-form" onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>

      {/* ✅ Custom Popup Modal */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <h3>Thanks for your feedback!</h3>
            <p>We appreciate you taking the time to contact us.</p>
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default About;

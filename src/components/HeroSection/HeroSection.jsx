import React from "react";
import { ArrowRight, Shield, Clock, Award } from "lucide-react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        {/* Left Content */}
        <div className="hero-left">
          <h1>
            Your Health, <span className="highlight">Our Priority</span>
          </h1>
          <p>
            Complete healthcare solutions at your fingertips. Buy medicines, book consultations, 
            and manage your wellness journey all in one place.
          </p>

          {/* CTA Buttons */}
          <div className="cta-buttons">
            <button className="btn primary">
              Book Consultation <ArrowRight />
            </button>
            <button className="btn secondary">
              Shop Medicines <ArrowRight />
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="trust-indicators">
            <div className="indicator">
              <Shield /> <span>FDA Approved</span>
            </div>
            <div className="indicator">
              <Clock /> <span>24/7 Support</span>
            </div>
            <div className="indicator">
              <Award /> <span>Licensed Professionals</span>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="hero-right">
          <div className="hero-image-container">
            <img
              src="https://images.pexels.com/photos/7659564/pexels-photo-7659564.jpeg"
              alt="Doctor consulting"
              className="hero-image"
            />
            <div className="image-overlay"></div>
          </div>

          {/* Floating Cards */}
          <div className="floating-card top-left">
            <div className="status-dot"></div>
            <span>Online Now</span>
            <p>150+ Doctors Available</p>
          </div>

          <div className="floating-card bottom-right">
            <div className="stats">
              <div className="number">50K+</div>
              <div className="label">Happy Customers</div>
            </div>
          </div>

          {/* Background decorations */}
          <div className="bg-circle top-right"></div>
          <div className="bg-circle bottom-left"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

import React from "react";
import "./hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-content">
        
        {/* Left */}
        <div className="hero-text">
          <h1>
            We Provide The Best <br />
            Possible <span>Legal Services</span>
          </h1>

          <p>
            Vitae auctor eu augue ut lectus arcu. Dictum fusce ut placerat orci
            nulla pellentesque dignissim enim. Enim nunc faucibus a pellentesque
            sit amet porttitor eget dolor.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">Contact Us</button>
            <button className="secondary-btn">
              Call Now: +234 XXX XXXX
            </button>
          </div>
        </div>

        {/* Right */}
        <div className="hero-image">
          <img src="./images/ladyjustice.png" alt="Lady Justice" />
        </div>

      </div>
    </section>
  );
};

export default Hero;

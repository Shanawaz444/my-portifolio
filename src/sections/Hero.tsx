import React from "react";
import "../styles/Hero.css";

const Hero: React.FC = () => {
  return (
    <section className="hero-section">
      {/* Navigation Bar */}
      <nav className="navbar">
        <ul className="nav-links">
          <li className="nav-item active">Home</li>
          <li className="nav-item">About</li>
          <li className="nav-item">Service</li>
          <li className="nav-item">Resume</li>
          <li className="nav-item">Project</li>
          <li className="nav-item">Contact</li>
        </ul>
      </nav>

      {/* Hero Main Content */}
      <div className="hero-content">
        {/* Left side: Text */}
        <div className="hero-text">
          <div className="title-block">
            <img src="/assets/title.png" alt="Shanawaz" className="title-img" />
          </div>

          {/* Testimonial */}
          <div className="testimonial">
            <div className="quote-block">
              <img
                src="/assets/quote-up.png"
                alt="Shanawaz"
                className="quote-img"
              />
            </div>
            <p>
              Shanawaz’s engineering expertise and sharp system design thinking
              <br />
              transformed our backend architecture, boosting performance
              <br />
              and reliability across the board. Truly exceptional. <br />
              Highly recommended
            </p>
          </div>
        </div>

        {/* Right side: Image and Experience */}
        <div className="hero-image-block">
          <div className="hero-image-block-flexing">
            {/* Background shape */}
            <img
              src="/assets/hero-img.png"
              alt="Shanawaz"
              className="profile-img"
            />

            {/* Experience Block */}
            <div className="experience-block">
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="star-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2L14.9 8.6L22 9.3L17 14.1L18.3 21.1L12 17.8L5.7 21.1L7 14.1L2 9.3L9.1 8.6L12 2Z"
                      fill="#fbbc04"
                    />
                  </svg>
                ))}
              </div>
              <div className="years">3 Years</div>
              <div className="label">Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

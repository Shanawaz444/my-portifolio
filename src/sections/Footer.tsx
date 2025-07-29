import React, { useState } from "react";
import "../styles/Footer.css";

const scrollToSection = (id: string) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

const Footer: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleInviteClick = () => {
    const yourEmail = "your@email.com"; // ← Replace with your real email
    const subject = encodeURIComponent("Hiring Inquiry");
    const body = encodeURIComponent(
      `Hi Shanawaz,\n\nI came across your portfolio and would like to connect regarding an opportunity.\n\nMy email: ${email}\n\nLooking forward to hearing from you.`
    );

    if (email.trim()) {
      window.location.href = `mailto:${yourEmail}?subject=${subject}&body=${body}`;
    } else {
      alert("Please enter your email address first.");
    }
  };
  return (
    <div id="footer-section" className="footer-section">
      <div className="footer-title">
        <span className="footer-title-first">Lets Connect There</span>
        <div className="btn">
          <button>
            {" "}
            <span>Hire Me</span>
          </button>
        </div>
      </div>
      <div className="divider"></div>
      <div className="footer-contact-me">
        <div className="footer-navigation">
          <span className="footer-navigation-title">Navigation</span>
          <span
            className="footer-navigation-links"
            onClick={() => scrollToSection("home")}
          >
            Home
          </span>
          <span
            className="footer-navigation-links"
            onClick={() => scrollToSection("service-section")}
          >
            My Services
          </span>
          <span
            className="footer-navigation-links"
            onClick={() => scrollToSection("experience-section")}
          >
            Experience
          </span>
          <span
            className="footer-navigation-links"
            onClick={() => scrollToSection("about-section")}
          >
            About Me
          </span>
          <span
            className="footer-navigation-links"
            onClick={() => scrollToSection("Project-section")}
          >
            Portfolio
          </span>
        </div>
        <div className="contact-me">
          <span className="contact-me-title">Contact</span>
          <span className="contact-me-info">+917780328593</span>
          <span className="contact-me-info">shanawaz0891@gmail.com</span>
          <span className="contact-me-info">current website link</span>
        </div>
        <div className="connect-with-me">
          <span className="connect-with-me-title">Connect with me</span>
          <div className="input-container">
            <input
              className=""
              placeholder="Email Address"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              className="invite-btn"
              type="button"
              onClick={handleInviteClick}
            >
              Invite
            </button>
          </div>
        </div>
      </div>
      <div className="divider"></div>
      <div className="end-credits">
        <div className="copyrights">
          © 2025 Shanawaz. All rights reserved. This portfolio is for personal
          and showcase purposes only.
        </div>
        <div className="made-with-info">
          Built with ❤️ — React ⚛️ + Tailwind 🌬️ + TypeScript 🧠 + JS ✨
        </div>
      </div>
    </div>
  );
};

export default Footer;

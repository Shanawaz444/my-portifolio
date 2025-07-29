import React, { useState } from "react";
import "../styles/LetsConnect.css";

const LetsConnect: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const yourEmail = "your@email.com"; // ← Replace with your real email
    const subject = encodeURIComponent("Hiring Inquiry");
    const body = encodeURIComponent(
      `Hi Shanawaz,\n\nI came across your portfolio and would like to connect regarding an opportunity.\n\nMy email: ${email}\n\nLooking forward to hearing from you.`
    );

    window.location.href = `mailto:${yourEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="LetsConnect-section">
      <div className="LetsConnect-title">
        <p>
          Have an Awsome Project? <br /> Wanna hire?{" "}
          <span className="letsConnect">Let's Connect</span>
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="email"
            className="form-input"
            id="Email"
            name="Email"
            placeholder="hr@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input className="button--submit" value="connect" type="submit" />
        </div>
      </form>
    </div>
  );
};

export default LetsConnect;

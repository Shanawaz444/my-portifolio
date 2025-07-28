import React from "react";
import "../styles/LetsConnect.css";

const LetsConnect: React.FC = () => {
  return (
    <div className="LetsConnect-section">
      <div className="LetsConnect-title">
        <p>
          Have an Awsome Project? <br /> Wanna hire?{" "}
          <span className="letsConnect">Let's Connect</span>
        </p>
      </div>
      <div className="input-group">
        <input
          type="email"
          className="form-input"
          id="Email"
          name="Email"
          placeholder="uiverse@verse.io"
        />
        <input className="button--submit" value="connect" type="submit" />
      </div>
    </div>
  );
};

export default LetsConnect;

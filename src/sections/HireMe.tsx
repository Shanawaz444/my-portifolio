import React from "react";
import "../styles/HireMe.css"

const HireMe: React.FC = () => {
    return (
        <div className="HireMe-section">
            <div className="flexing-image">
                <img
              src="/assets/Mask group.png"
              alt="Shanawaz"
            />
            </div>
            <div className="HireMe-section-content">
                <div className="HireMe-section-title">
                    <span className="HireMe-section-enclose">
                        Why
                    </span>
                    <span className="HireMe-section-middle">
                        Hire Me
                    </span>
                    <span className="HireMe-section-enclose">
                        ?
                    </span>
                </div>
                <div className="HireMe-section-description">
                    <span>
                        I design and build full-stack systems that are scalable, efficient, and user-centric — from backend architecture to frontend interfaces.
My leadership in code and design reviews has improved delivery speed by 20% and enhanced code quality across cross-functional teams.
                    </span>
                </div>
                <div className="HireMe-section-projects-section">
                    <div>
                        <span className="HireMe-section-first">
                        10+
                    </span>
                    <span className="HireMe-section-second">
                        Projects Completed
                    </span>
                    </div>
                    <div className="second">
                        <span className="HireMe-section-first">
                        2+
                    </span>
                    <span className="HireMe-section-second">
                        Years Experience
                    </span>
                    </div>
                </div>
                <div className="HireMe-section-button">
                    <button className="button type1"></button>
                </div>
            </div>
        </div>
    );
}

export default HireMe;
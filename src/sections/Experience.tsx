import React from "react";
import "../styles/Experience.css";
import Timeline from "../components/timeline/Timeline";


const Experience: React.FC = () => {
    return (
        <div className="experience-section">
            <div className="experience-section-title">
                <span className="experience-section-title-first">
                    My
                </span>
                <span className="experience-section-title-last">
                    Work Experience
                </span>
            </div>
            <Timeline/>
        </div>
    );
}

export default Experience;
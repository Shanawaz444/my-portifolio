import React from "react";
import { timelineData } from "./timelineData";
import "../../styles/components/Timeline.css";

const Timeline = () => {
  return (
    <div className="timeline-body">
      <div className="timeline">
        {timelineData.map((item, index) => (
        <div className="entry" key={index}>
          <div className="timeline-body-title">
            <h3>{item.period}</h3>
            <p>
              {item.title},{" "}
              <span className="company-title">{item.company}</span>
            </p>
          </div>
          <div className={`body ${index === timelineData.length - 1 ? "body-last" : ""}`}>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Timeline;

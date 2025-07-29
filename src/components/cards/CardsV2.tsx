import React from 'react';
import "../../styles/components/CardsV2.css"

interface CardProps {
  project: {
    id: string;
    title: string;
    shortDescription: string;
  };
  onHover: (id: string) => void;
}

const CardsV2: React.FC<CardProps> = ({ project, onHover }) => {
  return (
    <div
      className="cardv2"
      onMouseEnter={() => onHover(project.id)}
    >
      <div className="cardv2-first-content">
        <span>{project.title}</span>
      </div>
      <div className="cardv2-second-content">
        <span>{project.shortDescription}</span>
      </div>
    </div>
  );
};

export default CardsV2;

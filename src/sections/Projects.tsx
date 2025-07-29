import React, { useState } from "react";
import "../styles/Projects.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Card from "../components/cards/Cards";
import CardsV2 from "../components/cards/CardsV2";
import projectData from "./data/ProjectDetailsData";

const Projects: React.FC = () => {
  const [activeProjectId, setActiveProjectId] = useState(projectData[0].id);

  const activeProject = projectData.find((p) => p.id === activeProjectId)!;

  return (
    <div id="Project-section" className="ProjectSection">
      <div className="ProjectSection-title">
        <p className="ProjectSection-title-name">
          Lets have a look at
          <br /> my <span className="portfolio">portfoilo</span>
        </p>
        <div className="btn">
          <button>
            {" "}
            <span>See All</span>
          </button>
        </div>
      </div>

      <div className="ProjectSection-cards">
        <div className="swiper-box w-full px-4">
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={150}
            slidesPerView={2.5}
            pagination={{ clickable: true }}
            onSwiper={(swiper: SwiperType) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            autoplay={{
              delay: 3000, // 3 seconds
              disableOnInteraction: true, // Keep autoplay after interaction
            }}
          >
            {projectData.map((project) => (
              <SwiperSlide key={project.id}>
                <CardsV2 project={project} onHover={setActiveProjectId} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="ProjectSection-cards-details">
  <div
    key={activeProjectId} // triggers animation on change
    className="project-content-transition"
  >
    <div className="skills-box">
      {activeProject.skills.map((skill, idx) => (
        <div className="skills" key={idx}>
          <span>{skill}</span>
        </div>
      ))}
    </div>

    <div className="project-title">{activeProject.title}</div>

    <div className="project-description">
      {activeProject.fullDescription.split('\n').map((line, idx) => (
        <div key={idx}>{line}</div>
      ))}
    </div>
  </div>
</div>

    </div>
  );
};

export default Projects;

import React from "react";
import "../styles/Projects.css"
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



const Projects: React.FC = () => {
  return (
    <div id="ProjectSection" className="ProjectSection">
      <div className="ProjectSection-title">
        <p className="ProjectSection-title-name">
          Lets have a look at
          <br /> my <span className="portfolio">portfoilo</span>
        </p>
        <div className="btn">
            <button> <span>See All</span></button>
        </div>
      </div>
      <div className="ProjectSection-cards">
        <div className="swiper-box w-full px-4">
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination]}
            spaceBetween={100}
            slidesPerView={2.5}
            pagination={{ clickable: true }}
            onSwiper={(swiper: SwiperType) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide>
              <Card />
            </SwiperSlide>
            <SwiperSlide>
              <Card />
            </SwiperSlide>
            <SwiperSlide>
              <Card />
            </SwiperSlide>
            <SwiperSlide>
              <Card />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="ProjectSection-cards-details">
        <div className="skills-box">
            <div className="skills">
                <span>
                    Java Spring boot
                </span>
            </div>
            <div className="skills">
                <span>
                    AWS
                </span>
            </div>
            <div className="skills">
                <span>
                    Angular
                </span>
            </div>
        </div>
        <div className="project-title">Forex Pairs Stock Predector</div>
        <div className="project-description"> I design and build full-stack systems that are scalable, 
            <br/>efficient, and user-centric — from backend architecture to frontend interfaces.
<br/>My leadership in code and design reviews has improved delivery speed by
 <br/>20% and enhanced code quality across cross-functional teams.</div>
      </div>
    </div>
  );
};

export default Projects;

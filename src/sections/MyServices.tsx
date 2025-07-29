import React from "react";
import "../styles/MyServices.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import services from "./data/ServiceData";

const MyServices: React.FC = () => {
  return (
    <div id="service-section" className="section">
      <div className="title-service">
        <div className="title-service-name">
          <p className="title-service-name-first">My</p>
          <p className="title-service-name-last">Services</p>
        </div>
        <div className="title-service-description">
          <p className="leading-relaxed">
            I design and build intelligent, high-performance solutions tailored
            to real-world
            <br />
            problems. From predictive trading tools to responsive apps, every
            project blends
            <br /> clean code, smart design, and measurable impact.
          </p>
        </div>
      </div>

      <div className="services-reveal-grid">
      {services.map((service, idx) => (
        <div className="reveal-card" key={idx}>
          <div className="reveal-front">
            <div className="reveal-icon">{service.icon}</div>
            <div className="reveal-title">{service.title}</div>
          </div>
          <div className="reveal-back">
            <div className="reveal-skills-label">Skills:</div>
            <ul className="reveal-skills-list">
              {service.skills.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>

      {/* <div className="swiper-box w-full px-4">
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
      </div> */}
    </div>
  );
};

export default MyServices;

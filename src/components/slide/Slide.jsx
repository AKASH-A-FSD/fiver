import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./Slide.scss";

const Slide = ({ children, slidesToShow }) => {
  return (
    <div className="slide">
      <div className="container">
        <Swiper slidesPerView={slidesToShow} spaceBetween={10}>
          {React.Children.map(children, (child) => (
            <SwiperSlide>{child}</SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Slide;

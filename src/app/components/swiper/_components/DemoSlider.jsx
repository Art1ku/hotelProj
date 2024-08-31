"use client"

import React from "react";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./styles/style.scss"
import SliderButtons from "./SliderButtons";

const DemoSlider = ({ data }) => {


  return (
    <section className="w-full">
      <div className=" h-[571px]">
        <ul className="h-[571px] w-full">
          <Swiper
            navigation
            pagination={{ type: "bullets", clickable: true }}
            autoplay={true}
            loop={true}
            scrollbar={{ draggable: true }}
            modules={[Autoplay, Navigation, Pagination]}
          >
            {data.map(({ id, image, tagline, title, buttons }) => (
              <SwiperSlide key={id}>
                <div>
                  
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </ul>
      </div>
    </section>
  );
};

export default DemoSlider;

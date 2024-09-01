"use client"

import React from "react";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./styles/style.scss"
import SlideNextButton from '../buttonsGo'
import SlidePrevButton from '../buttonPrev'
import classes from "./Slider.module.scss"

import { useStore } from "zustand";
import { useEffect } from "react";
import { CardStore } from "../../../stores/cardStore/cardStore";

const DemoSlider = () => {

  const { data, loading, error, fetchData } = useStore(CardStore)

  useEffect(() => {
      fetchData()
  }, [])

  useEffect(() => {
      console.log(data, 'data') 
  }   , [data])   

  if (loading){
      return <div>Loading...</div>
  }
  if (error){
      return <div>Error: {error}</div>
  } 



  return (
    <section className="w-full">
      <div className="relative h-[571px] bg-white">
        <ul className="h-[100vh] w-full">
          <Swiper
            navigation = {{nextEl: '.swiper-button-next' , prevEl: '.swiper-button-prev'}}
            pagination={{ type: "bullets", clickable: true }}
            autoplay={true}
            loop={true}
            scrollbar={{ draggable: true }}
            modules={[Autoplay, Navigation, Pagination]}
          >
            {data?.banners?.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="h-full w-full absolute left-0 top-0"
                     style={{
                      background: `url(${item?.image}) center center / cover scroll no-repeat`,
                      filter: 'brightness(40%)',
                     }}>
                    <div>
                        <div>
                          <p key={item.id}>{item?.title}</p>
                        </div>
                        <div>
                          <p key={item.id}>{item?.description}</p>
                          <img src={item?.image} alt="" />
                        </div>
                    </div>
                </div> 
              </SwiperSlide>
            ))}
            <SlidePrevButton />
            <SlideNextButton />
          </Swiper>
        </ul>
      </div>
    </section>
    
  );
};

export default DemoSlider;

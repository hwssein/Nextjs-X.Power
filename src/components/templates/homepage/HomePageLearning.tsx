"use client";

import { useRef } from "react";
import LearningCard from "@/components/modules/LearningCard";
import LearningVideoCard from "@/modules/LearningVideoCard";
import { learningData } from "@/constants/homePageData";

import { Swiper, SwiperSlide } from "swiper/react";
import { Controller } from "swiper/modules";
import "swiper/css";

import type SwiperCore from "swiper";

function HomePageLearning() {
  const mainSwiperRef = useRef<SwiperCore | null>(null);
  const videoSwiperRef = useRef<SwiperCore | null>(null);

  return (
    <section className="w-full flex flex-col items-center justify-center gap-4 mt-16 px-3">
      <div className="w-full flex flex-col items-center justify-start gap-3 lg:flex-row-reverse lg:justify-center lg:gap-10">
        <div className="w-full max-w-[400px] h-[400px] flex items-center justify-center">
          <Swiper
            onSwiper={(swiper) => {
              mainSwiperRef.current = swiper;
              if (videoSwiperRef.current) {
                swiper.controller.control = videoSwiperRef.current;
              }
            }}
            onSlideChange={(swiper) => {
              if (
                videoSwiperRef.current &&
                videoSwiperRef.current.activeIndex !== swiper.activeIndex
              ) {
                videoSwiperRef.current.slideTo(swiper.activeIndex);
              }
            }}
            slidesPerView={1}
            slidesPerGroup={1}
            spaceBetween={20}
            loop={false}
            modules={[Controller]}
            className="w-full h-full rounded-lg overflow-hidden cursor-pointer shadow-lg"
          >
            {learningData.map((item, index) => (
              <SwiperSlide key={index}>
                <LearningCard
                  title={item.title}
                  description={item.description}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="w-full max-w-[400px] max-h-[400px] flex items-center justify-center">
          <Swiper
            onSwiper={(swiper) => {
              videoSwiperRef.current = swiper;
              if (mainSwiperRef.current) {
                swiper.controller.control = mainSwiperRef.current;
              }
            }}
            onSlideChange={(swiper) => {
              if (
                mainSwiperRef.current &&
                mainSwiperRef.current.activeIndex !== swiper.activeIndex
              ) {
                mainSwiperRef.current.slideTo(swiper.activeIndex);
              }
            }}
            slidesPerView={1}
            loop={false}
            modules={[Controller]}
            allowTouchMove={false}
            noSwiping={true}
            className="w-full h-full rounded-lg overflow-hidden shadow-lg border-border border"
          >
            {learningData.map((item, index) => (
              <SwiperSlide key={index}>
                <LearningVideoCard image={item.image} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default HomePageLearning;

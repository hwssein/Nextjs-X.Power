"use client";

import { useRef } from "react";
import LearningCard from "@/components/modules/LearningCard";
import LearningVideoCard from "@/modules/LearningVideoCard";

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
            <SwiperSlide>
              <LearningCard
                title="آموزش جلو بازو ایستاده"
                description="برای رشد عضلات جلو بازو، از ترکیب حرکات تک‌مفصلی مثل جلو بازو دمبل و ترکیبی مثل جلو بازو هالتر استفاده کنید. هر حرکت جلو بازو ویژگی خاص خودش رو داره و به زیبایی و قدرت بازوها کمک می‌کنه. توجه به اجرای صحیح این حرکات، مخصوصاً جلو بازو هالتر، بسیار مهمه."
              />
            </SwiperSlide>

            <SwiperSlide>
              <LearningCard
                title="پرس سینه هالتر"
                description="پرس سینه هالتر یکی از بهترین حرکات برای تقویت عضلات سینه، شانه و سه سر بازو است. این حرکت با افزایش قدرت و حجم عضلات سینه، به بهبود عملکرد در حرکات دیگر کمک می‌کند. برای بیشترین بازده، توجه به تکنیک صحیح و کنترل وزن بسیار مهمه. اجرای درست پرس سینه هالتر، به‌ویژه در حفظ فرم بدن، تاثیر زیادی در پیشرفت شما خواهد داشت."
              />
            </SwiperSlide>

            <SwiperSlide>
              <LearningCard
                title="سرشانه نشر از جانب"
                description="برای تقویت عضلات سرشانه، از ترکیب حرکات نشر از جلو و نشر از جانب استفاده کنید. نشر از جانب عضلات میانه سرشانه رو هدف قرار می‌ده و به فرم بازوها کمک می‌کنه. این حرکت به‌خصوص وقتی با دقت و درستی انجام بشه، تاثیر زیادی در ساختن یک شانه قوی و خوش‌فرم داره."
              />
            </SwiperSlide>
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
            <SwiperSlide>
              <LearningVideoCard image="/images/homepage-learning1.png" />
            </SwiperSlide>

            <SwiperSlide>
              <LearningVideoCard image="/images/homepage-learning2.jpg" />
            </SwiperSlide>

            <SwiperSlide>
              <LearningVideoCard image="/images/homepage-learning3.jpg" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default HomePageLearning;

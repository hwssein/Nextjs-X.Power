"use client";

import StoreCard from "@/components/modules/StoreCard";
import { storeData } from "@/constants/homePageData";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

function HomePageStore() {
  return (
    <section
      className="w-full flex flex-col items-center justify-start gap-2 mt-10 px-4 md:mt-14"
      id="store"
    >
      <h2 className="w-full text-center text-[var(--highlight)] font-semibold">
        محصولات
      </h2>

      <h3 className="w-full text-center font-bold text-lg ">
        جدیدترین محصولات
      </h3>

      <div className="w-full p-3 relative">
        <Swiper
          slidesPerView={"auto"}
          centeredSlides={true}
          spaceBetween={10}
          pagination={{
            clickable: true,
            dynamicBullets: true,
            renderBullet: (index, className) =>
              `<span class="${className} !bg-primary/50 !w-3 !h-3 !mx-1.5"></span>`,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1.2,
              spaceBetween: 20,
            },
            400: {
              slidesPerView: 1.4,
              spaceBetween: 20,
            },
            500: {
              slidesPerView: 1.7,
              spaceBetween: 30,
            },
            650: {
              slidesPerView: 2.2,
              spaceBetween: 35,
            },
            850: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="!pb-12 custom-swiper cursor-pointer"
        >
          {storeData.map((item, index) => (
            <SwiperSlide
              className="!flex !items-center !justify-center py-6 group"
              key={index}
            >
              <StoreCard
                image={item.image}
                title={item.title}
                price={item.price}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default HomePageStore;

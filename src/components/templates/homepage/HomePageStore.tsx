"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import StoreCard from "@/components/modules/StoreCard";

function HomePageStore() {
  return (
    <section className="w-full flex flex-col items-center justify-start gap-2 mt-10 px-4 md:mt-14">
      <h2 className="w-full text-center text-primary font-semibold">محصولات</h2>

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
          <SwiperSlide className="!flex !items-center !justify-center py-6 group">
            <StoreCard
              image="/images/store-product1.png"
              title="پروتئین وی ژن استار 2270 گرم"
              price={2290000}
            />
          </SwiperSlide>

          <SwiperSlide className="!flex !items-center !justify-center py-6 group">
            <StoreCard
              image="/images/store-product2.png"
              title="پروتئین وی یوروویتال 1000 گرم"
              price={1800000}
            />
          </SwiperSlide>

          <SwiperSlide className="!flex !items-center !justify-center py-6 group">
            <StoreCard
              image="/images/store-product3.png"
              title="گینر ژن استار 3000 گرم"
              price={9600000}
            />
          </SwiperSlide>

          <SwiperSlide className="!flex !items-center !justify-center py-6 group">
            <StoreCard
              image="/images/store-product4.png"
              title="دلیشس وی پروتئین کیو ان تی"
              price={3180000}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default HomePageStore;

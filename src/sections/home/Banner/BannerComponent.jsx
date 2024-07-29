"use client";
import BannerPng from "../../../../public/home/BannerPng.png";
import bannerMobie from "../../../../public/home/bannerMobie.jpg";
import BannerSlide1 from "../../../../public/home/BannerSlide1.jpg";
import BannerSlide2 from "../../../../public/home/BannerSlide2.jpeg";
import BannerSlide3 from "../../../../public/home/BannerSlide3.jpeg";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import { Pagination, Navigation, Autoplay } from "swiper/modules";

import Image from "next/image";
import TitleContent from "./TitleContent";
import SubContent from "./SubContent";
import GridItemContent from "./GridItemContent";
const BannerComponent = () => {
  const resPonItem = " w-full h-[49.4375rem] sm:h-[55rem] lg:h-[68.375rem]";
  return (
    <section className="w-full relative ">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        className="bg-white"
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
      >
        <SwiperSlide>
          <Image
            src={BannerPng}
            alt="banner top"
            className={`${resPonItem} object-cover hidden sm:inline-block`}
          ></Image>
          <Image
            src={bannerMobie}
            alt="banner top"
            className={`${resPonItem}  sm:hidden inline-block`}
          ></Image>
          <div className="over_banner sm:block hidden"></div>
          <TitleContent></TitleContent>
          <SubContent></SubContent>
          <GridItemContent></GridItemContent>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={BannerSlide1}
            alt="banner top"
            className={resPonItem}
          ></Image>
          {/* <div className="over_banner"></div> */}
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={BannerSlide2}
            alt="banner top"
            className={resPonItem}
          ></Image>
          {/* <div className="over_banner"></div> */}
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={BannerSlide3}
            alt="banner top"
            className={resPonItem}
          ></Image>
          {/* <div className="over_banner"></div> */}
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default BannerComponent;

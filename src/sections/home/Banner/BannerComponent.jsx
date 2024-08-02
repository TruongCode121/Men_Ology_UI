"use client";
import BannerPng from "../../../../public/home/BannerPng.png";
import bannerMobie from "../../../../public/home/bannerMobie.jpg";
import BannerSlide1 from "../../../../public/home/BannerSlide1.jpg";
import BannerSlide2 from "../../../../public/home/BannerSlide2.jpeg";
import BannerSlide3 from "../../../../public/home/BannerSlide3.jpeg";
import SlideBannerMobie1 from "../../../../public/home/SlideBannerMobie1.jpeg";
import SlideBannerMobie2 from "../../../../public/home/SlideBannerMobie2.jpg";
import SlideBannerMobie3 from "../../../../public/home/SlideBannerMobie3.jpg";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import { Pagination, Navigation, Autoplay } from "swiper/modules";
// slideBannerMobie1
import Image from "next/image";
import TitleContent from "./TitleContent";
import SubContent from "./SubContent";
import GridItemContent from "./GridItemContent";
const BannerComponent = () => {
  // h-[49.4375rem]
  const resPonItemMin640px =
    " w-full sm:h-[100vh]  hidden md:inline-block  object-cover";
  return (
    <section className="w-full relative h-[100vh]">
      <Swiper
        modules={[Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        // className="bg-white"
        pagination={{ clickable: true }}
        // autoplay={{ delay: 3000, disableOnInteraction: false }}
      >
        <SwiperSlide>
          <Image
            src={BannerPng}
            alt="banner top"
            className={`${resPonItemMin640px} `}
            priority
          ></Image>
          <Image
            src={bannerMobie}
            alt="banner top"
            className={`w-full h-[100vh] md:hidden inline-block object-cover`}
            priority
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
            className={`${resPonItemMin640px}`}
            priority
          ></Image>
          <Image
            src={SlideBannerMobie1}
            alt="banner top"
            className={` w-full h-[100vh]  md:hidden inline-block`}
            priority
          ></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={BannerSlide2}
            alt="banner top"
            className={resPonItemMin640px}
            priority
          ></Image>
          <Image
            src={SlideBannerMobie2}
            alt="banner top"
            className={` w-full  h-[100vh] md:hidden inline-block`}
            priority
          ></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={BannerSlide3}
            alt="banner top"
            className={resPonItemMin640px}
            priority
          ></Image>
          <Image
            src={SlideBannerMobie3}
            alt="banner top"
            className={` w-full h-[100vh] md:hidden inline-block`}
            priority
          ></Image>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default BannerComponent;

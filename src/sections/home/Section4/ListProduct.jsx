"use client";
import Image from "next/image";
import trang_chu_v1_2 from "../../../../public/home/trang_chu_v1_2.jpg";
import product1 from "../../../../public/home/product1.jpg";
import product2 from "../../../../public/home/product2.jpg";
import product3 from "../../../../public/home/product3.jpg";
import TitleContentItem from "../TitleContentItem";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
import gsap from "gsap";
import handleUseScrollTrigger from "@/hooks/useScrollTriggerFromTo";
const cardImg = [{ img: product1 }, { img: product2 }, { img: product3 }];
const ListProduct = () => {
  const bodyImgRef = handleUseScrollTrigger(0, 0, 200, 0, 1);
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".container_Product", // Phần tử kích hoạt ScrollTrigger
      },
    });
    tl.fromTo(
      ".product1",
      { x: 200, opacity: 0 },
      { x: 0, opacity: 1, duration: 1 }
    )
      .fromTo(
        ".product2",
        { x: 200, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.75 }
      )
      .fromTo(
        ".product3",
        { x: 200, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5 }
      );
  }, []);
  return (
    <section className="w-full mt-[3.75rem] lg:mt-[8.2rem]">
      <div className="flex flex-col lg:flex-row justify-between items-center lg:space-x-[4.31rem]">
        <div className=" mt-[2.2rem] lg:mt-0 lg:order-1 order-2 flex lg:block items-center space-x-[0.81rem] lg:space-x-0">
          <div
            ref={bodyImgRef}
            className="p-[0.31rem] lg:p-[0.8rem] shadow-2xl rounded-2xl inline-block lg:-mt-[1rem]"
          >
            <Image
              src={trang_chu_v1_2}
              alt="trang_chu_v1_2"
              className="shadow-2xl rounded-xl w-[10.91069rem] lg:w-[20.8265rem] h-[21.92631rem] lg:h-[48.36569rem]"
            ></Image>
          </div>
          <Image
            src={product1}
            alt={`product1`}
            className="w-[9.375rem] h-[14.4375rem] block lg:hidden"
          ></Image>
        </div>
        <div className="lg:mt-[2rem] lg:order-2 order-1">
          <TitleContentItem
            title="Sản phẩm từ thiên nhiên"
            titleStyle="text-[1.5rem] lg:text-[3.5rem] mb-[1rem] tt_common_demibold"
            className="text-left lg:text-center w-full lg:w-[37.8rem] mx-auto text-ColorTitle "
          >
            <p className="hidden lg:inline-block text-[1.25rem] leading-[2rem] line-clamp-2">
              MEN O.LOGY luôn dẫn đầu xu hướng, sử dụng các thành phần thiên
              nhiên HOT NHẤT & ĐƯỢC YÊU THÍCH NHẤT trên thế giới.
            </p>
            <p className="inline-block lg:hidden text-[0.875rem] leading-[1.3125rem] line-clamp-4">
              Với cấu trúc thông tin đã định, chúng tôi tiến hành xây dựng grid
              các trang. Grid này cụ thể hoá việc sắp xếp các cột theo kích
              thước PC 1600px và 12 colum, Mobile 414px và 4 colum.
            </p>
          </TitleContentItem>
          <div className=" hidden container_Product lg:grid grid-cols-3 gap-x-[4.31rem] mt-[5.62rem] ">
            {cardImg.map((item, idx) => (
              <div
                key={idx}
                className={
                  idx == 0
                    ? "product1"
                    : idx == 1
                    ? "product2"
                    : idx == 2 && "product3"
                }
              >
                <Image
                  src={item.img}
                  alt={`product${idx}`}
                  className="w-[17.375rem] h-[26.275rem]"
                ></Image>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ListProduct;

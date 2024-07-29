"use client";
import handleUseScrollTrigger from "@/hooks/useScrollTriggerFromTo";

const TitleContentItem = ({
  title = "Tổng quan dự án ",
  titleStyle = " text-[1.5rem] sm:text-[2.5rem] lg:text-[3.75rem] tt_common_demibold ",
  className,
  children,
  refTitle,
  refContent,
}) => {
  const refH1 = handleUseScrollTrigger(0, 0, 100, 0, 1);
  const reftxt = handleUseScrollTrigger(0, 0, 150, 0, 1);
  return (
    <section
      className={` ${
        className ? className : "w-full lg:w-[43rem] text-[#1C1C1C]"
      } tt_common_regular`}
    >
      <h1 ref={refTitle ? refTitle : refH1} className={`${titleStyle}`}>
        {title}
      </h1>
      <div ref={refContent ? refContent : reftxt}>
        {children ? (
          children
        ) : (
          <p className="text-[0.875rem] sm:text-[1rem] lg:text-[1.5625rem] leading-[1.3125rem] lg:leading-[2rem] mt-[1.5rem] line-clamp-5 lg:line-clamp-4">
            Men O.logy là một thương hiệu làm đẹp, mỹ phẩm và chăm sóc cá nhân
            cao cấp tại Việt Nam. Với sức mạnh{" "}
            <span className="text-Loan-Men-Xanh tt_common_demibold">
              ngăn mùi đột phá
            </span>{" "}
            suốt 24h từ lợi khuẩn Probiotics, cùng 03 chất hương độc đáo cho các
            Men thoải mái “phá đảo” từ ngoài đường cho đến khi lên giường đi ngủ
          </p>
        )}
      </div>
    </section>
  );
};

export default TitleContentItem;

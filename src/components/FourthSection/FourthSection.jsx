import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { SkillsData } from "./SkillsData";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { SkillCard } from "../SkillCard";
import { useFourthSection } from "./useFourthSection";
export const FourthSection = () => {
  useFourthSection();
  return (
    <section
      id="skills-in-view"
      className="h-screen w-screen flex justify-center items-center absolute top-200"
    >
      <div className="relative h-full flex justify-center items-center">
        <h2 className="skills-title text-white text-2xl md:text-3xl absolute top-12 left-1/2 -translate-x-1/2">
          Technologies I&apos;ve worked with
        </h2>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="skills-swiper"
        >
          {SkillsData.map((skill, index) => {
            return (
              <SwiperSlide key={index + 5}>
                <SkillCard imageSource={skill.img} title={skill.title} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default FourthSection;

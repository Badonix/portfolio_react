import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { projectsData } from "./projectData";
import { ProjectCard } from "../ProjectCard/ProjectCard";
import { useProjectsSection } from "./useProjectsSection";
export const ProjectsSection = () => {
  useProjectsSection();
  return (
    <>
      <section
        id="projects-in-view"
        className="h-screen w-screen flex justify-center items-center absolute top-400 text-3xl"
      >
        <div className="relative w-full h-full flex flex-col justify-center items-center">
          <div>
            <h2 className="projects-title text-white text-2xl md:text-3xl absolute top-12 left-1/2 -translate-x-1/2">
              My Projects
            </h2>
            <p className="projects-title absolute top-24 left-1/2 -translate-x-1/2 text-white text-sm text-center">
              (Most of my projects are not hosted so you can view all of them on{" "}
              <a
                href="https://github.com/badonix/?tab=repositories"
                className="text-cyan-300"
              >
                github
              </a>
              )
            </p>
          </div>
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
            pagination={false}
            modules={[EffectCoverflow, Pagination]}
            className="projects-swiper w-full"
          >
            {projectsData.map((project, index) => {
              return (
                <SwiperSlide key={index + 5}>
                  <ProjectCard
                    description={project.description}
                    frontUrl={project.frontUrl}
                    backUrl={project.backUrl}
                    liveUrl={project.liveUrl}
                    imageSource={project.img}
                    title={project.title}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>
    </>
  );
};
export default ProjectsSection;

import { useEffect } from "react";
import { inView, animate } from "framer-motion";
export const useProjectsSection = () => {
  useEffect(() => {
    inView("#projects-in-view", () => {
      const projectsAnimation = animate(
        ".projects-swiper",
        { y: [-200, 0], opacity: [0, 1] },
        { type: "spring", stiffness: 200, duration: 1.5, delay: 0.5 },
      );
      const titleAnimation = animate(
        ".projects-title",
        { opacity: [0, 1] },
        { type: "spring", stiffness: 300, delay: 1, duration: 3 },
      );

      return () => {
        projectsAnimation.stop();
        titleAnimation.stop();
      };
    });
  });
};

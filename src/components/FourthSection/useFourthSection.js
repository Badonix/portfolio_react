import { useEffect } from "react";
import { inView, animate } from "framer-motion";
export const useFourthSection = () => {
  useEffect(() => {
    inView("#skills-in-view", () => {
      const skillsAnimation = animate(
        ".skills-swiper",
        { y: [-200, 0], opacity: [0, 1] },
        { type: "spring", stiffness: 200, duration: 1.5, delay: 0.5 }
      );
      const titleAnimation = animate(
        ".skills-title",
        { opacity: [0, 1] },
        { type: "spring", stiffness: 300, delay: 1, duration: 3 }
      );

      return () => {
        skillsAnimation.stop();
        titleAnimation.stop();
      };
    });
  });
};

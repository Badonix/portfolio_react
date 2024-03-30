import { useEffect } from "react";
import { inView, animate } from "framer-motion";
export const useExperience = () => {
  useEffect(() => {
    inView("#experience-in-view", () => {
      const titleAnimation = animate(
        ".experience-title",
        { y: [-200, 0], opacity: [0, 1] },
        { type: "spring", stiffness: 200, duration: 1.5, delay: 0.5 }
      );

      const card1Animation = animate(
        ".resume-card1",
        { y: [-200, 0], opacity: [0, 1] },
        { type: "spring", stiffness: 200, duration: 1.5, delay: 1 }
      );
      const card2Animation = animate(
        ".resume-card2",
        { y: [-200, 0], opacity: [0, 1] },
        { type: "spring", stiffness: 200, duration: 1.5, delay: 1.5 }
      );
      const card3Animation = animate(
        ".resume-card3",
        { y: [-200, 0], opacity: [0, 1] },
        { type: "spring", stiffness: 200, duration: 1.5, delay: 2 }
      );
      return () => {
        titleAnimation.stop();
        card1Animation.stop();
        card2Animation.stop();
        card3Animation.stop();
      };
    });
  });
};

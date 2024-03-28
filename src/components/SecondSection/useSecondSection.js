import { animate, inView } from "framer-motion";
import { useEffect } from "react";
export const useSecondSection = () => {
  useEffect(() => {
    inView("#in-view", () => {
      const aboutMeanimation = animate(
        ".about-me",
        { x: [-1000, 0] },
        { type: "spring", delay: 0.2 }
      );
      const descriptionAnimation = animate(
        ".description",
        { y: [500, 0], opacity: [0, 1] },
        { type: "spring", delay: 0.2 }
      );
      const imageAnimation = animate(
        ".me",
        { x: [500, 0], opacity: [0, 1] },
        { type: "spring", delay: 0.2 }
      );
      const authorAnimation = animate(
        ".author",
        { x: [-500, 0], opacity: [0, 1] },
        { type: "spring", delay: 0.2 }
      );
      return () => {
        aboutMeanimation.stop();
        descriptionAnimation.stop();
        imageAnimation.stop();
        authorAnimation.stop();
      };
    });
  });
};

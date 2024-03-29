import { useEffect } from "react";
import { inView, animate } from "framer-motion";
export const useContact = () => {
  useEffect(() => {
    inView("#contact-in-view", () => {
      const contactAnimation = animate(
        "#contact-form-cont",
        { y: [-200, 0], opacity: [0, 1] },
        { type: "spring", stiffness: 200, duration: 1.5, delay: 0.5 }
      );

      return () => {
        contactAnimation.stop();
      };
    });
  });
};

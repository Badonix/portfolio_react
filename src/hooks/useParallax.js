import { useEffect } from "react";

export const useParallax = () => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      let x = (e.clientX * 5) / 400;
      let y = (e.clientY * 5) / 400;
      let background = document.querySelector(".lines-cont");

      if (background) {
        background.style.backgroundPositionX = `${x}px`;
        background.style.backgroundPositionY = `${y}px`;
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
};

export default useParallax;

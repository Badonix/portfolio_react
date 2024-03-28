import { useInView } from "framer-motion";
import { useRef } from "react";

export const useFirstSection = () => {
  const helloRef = useRef(null);
  const navbarShouldShow = !useInView(helloRef);
  return {
    helloRef,
    navbarShouldShow,
  };
};

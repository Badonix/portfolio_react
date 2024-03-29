import { motion } from "framer-motion";
import { useFirstSection } from "./useFirstSection";
import Navbar from "../Navbar/Navbar";
export const FirstSection = () => {
  const { helloRef, navbarShouldShow } = useFirstSection();
  return (
    <div className="absolute w-screen">
      <Navbar navbarShouldShow={navbarShouldShow} />
      <div className="">
        <div className="hello flex justify-center items-center h-screen flex-col gap-8 relative">
          <motion.h1
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 2,
              delay: 1,
              type: "spring",
              stiffness: 200,
            }}
            initial={{ x: -3000, opacity: 0 }}
            className="text-center font-rubik text-white text-5xl md:text-8xl"
          >
            Hello there
          </motion.h1>
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            ref={helloRef}
          ></div>
          <motion.a
            href="#second-section"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            type="button"
            transition={{
              delay: 1.5,
              duration: 2,
              type: "spring",
              stiffness: 100,
            }}
            className="inline-block font-rubik rounded-full border-2 border-neutral-50 px-6  py-2  text-2xl uppercase leading-normal text-neutral-50   hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
          >
            Start
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;

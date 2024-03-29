import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { BiMenuAltRight } from "react-icons/bi";
import { FaLongArrowAltRight } from "react-icons/fa";

export const MobileNav = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <>
      <AnimatePresence>
        <motion.div className="progress-bar" style={{ scaleX }} />
        <div className="fixed top-5 right-5 z-40 text-white">
          <BiMenuAltRight className="w-8 h-8" />
        </div>
        <div className="fixed px-3 justify-center flex py-20 items-between h-full shadow-lg bg-black border-l z-40 top-0 right-0 w-2/3 ">
          <div className="fixed top-5 right-5 z-50 text-white">
            <FaLongArrowAltRight className="w-8 h-8" />
          </div>
          <div className="60 flex flex-col items-center  gap-5">
            <a className="text-white text-xl" href="#skills-in-view">
              Skills
            </a>
            <a href="#contact-in-view" className="text-xl  text-white">
              Contact
            </a>
            <a href="#contact-in-view" className="text-xl  text-white">
              Experience
            </a>
          </div>
        </div>
      </AnimatePresence>
    </>
  );
};

export default MobileNav;

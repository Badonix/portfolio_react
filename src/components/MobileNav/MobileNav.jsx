import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { useRef, useState } from "react";
import { BiDownload, BiMenuAltRight } from "react-icons/bi";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useClickOutside } from "../../hooks";

export const MobileNav = () => {
  const { scrollYProgress } = useScroll();
  const [isVisible, setIsVisible] = useState(false);
  const navRef = useRef(null);
  useClickOutside(navRef, () => {
    setIsVisible(false);
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <>
      <AnimatePresence>
        <motion.div className="progress-bar" style={{ scaleX }} />
        <AnimatePresence>
          {!isVisible && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1 }}
              exit={{ scale: 0 }}
              onClick={() => setIsVisible(true)}
              className="md:hidden fixed top-5 right-5 z-40 text-white"
            >
              <BiMenuAltRight className="w-8 h-8" />
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {isVisible && (
            <motion.div
              initial={{ x: 1000 }}
              animate={{ x: 0 }}
              exit={{ x: 1000 }}
              ref={navRef}
              className="fixed px-3 justify-center flex items-between h-1/2 border-b rounded-bl-md shadow-lg bg-black border-l z-40 top-0 right-0 w-2/3 "
            >
              <div
                onClick={() => setIsVisible(false)}
                className="fixed top-5 right-5 z-50 text-white"
              >
                <FaLongArrowAltRight className="w-8 h-8" />
              </div>
              <div className="60 flex flex-col items-center  justify-center gap-10">
                <a
                  onClick={() => setIsVisible(false)}
                  className="text-white text-xl"
                  href="#skills-in-view"
                >
                  Skills
                </a>
                <a
                  onClick={() => setIsVisible(false)}
                  href="#contact-in-view"
                  className="text-xl  text-white"
                >
                  Contact
                </a>
                <a
                  onClick={() => setIsVisible(false)}
                  href="#experience-in-view"
                  className="text-xl  text-white"
                >
                  Experience
                </a>
                <a
                  href="/assets/cv.pdf"
                  download
                  className="rounded-md hover:text-black hover:bg-white transition-colors cursor-pointer px-2 py-1 border-2 flex items-center gap-3 text-white"
                >
                  CV
                  <BiDownload />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </AnimatePresence>
    </>
  );
};

export default MobileNav;

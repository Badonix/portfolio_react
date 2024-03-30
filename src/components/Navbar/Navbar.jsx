import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { BiDownload } from "react-icons/bi";
export const Navbar = ({ navbarShouldShow }) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <>
      <motion.div className="progress-bar" style={{ scaleX }} />
      <AnimatePresence>
        {navbarShouldShow && (
          <motion.nav
            initial={{ y: -1000 }}
            animate={{ y: -0 }}
            exit={{ y: -1000 }}
            className="md:flex hidden items-center justify-between py-6 px-16 fixed w-full z-20 top-0 left-0"
          >
            <div></div>
            <ul className="flex text-white gap-8 items-center text-2xl">
              <a
                href="#experience-in-view"
                className="underline-hover cursor-pointer"
              >
                Experience
              </a>
              <a
                className="cursor-pointer underline-hover"
                href="#skills-in-view"
              >
                Skills
              </a>
              <a
                href="#contact-in-view"
                className="cursor-pointer underline-hover"
              >
                Contact
              </a>
              <a
                href="/assets/cv.pdf"
                download
                className="rounded-md hover:text-black hover:bg-white transition-colors cursor-pointer px-2 py-1 border-2 flex items-center gap-3 text-white"
              >
                CV
                <BiDownload />
              </a>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

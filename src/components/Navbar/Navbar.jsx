import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
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
            className="flex items-center justify-between py-6 px-16 fixed w-full z-20 top-0 left-0"
          >
            <div></div>
            <ul className="flex text-white gap-8 items-center text-2xl">
              <li className="underline-hover cursor-pointer">Experience</li>
              <a
                className="cursor-pointer underline-hover"
                href="#skills-in-view"
              >
                Skills
              </a>
              <li className="cursor-pointer underline-hover">Contact</li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

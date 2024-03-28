import "./App.css";
import { motion } from "framer-motion";
import FirstSection from "./components/FirstSection/FirstSection";
import { SecondSection } from "./components/SecondSection";
import { FourthSection } from "./components/FourthSection";
import { ThirdSection } from "./components/ThirdSection";
function App() {
  return (
    <>
      <motion.div
        initial={{ x: 0, scale: 0 }}
        animate={{ x: 0, scale: 1 }}
        className="cont"
      >
        <div className="lines-cont"></div>
      </motion.div>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <div className="w-screen relative overflow-x-hidden">
        <img
          src="/assets/black-cat.gif"
          className="z-40 fixed w-24 bottom-0 right-5"
          alt="cat"
        />
        <img
          alt="quby"
          src="/assets/quby.gif"
          className="fixed z-40 w-24 bottom-0 left-5"
        />
        <motion.img
          src="/assets/running-cat.gif"
          className="fixed w-24 bottom-0 -left-24"
          animate={{ x: "120vw" }}
          transition={{
            duration: 10,
            delay: Math.random() * 5 + 5,
          }}
        />
        <motion.img
          src="/assets/running-cat.gif"
          className="fixed w-24 bottom-0 flip right-24"
          initial={{ right: -100 }}
          animate={{ left: "-110vw" }}
          transition={{
            duration: 15,
            delay: Math.random() * 5 + 20,
          }}
        />
      </div>
    </>
  );
}

export default App;

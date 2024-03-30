import { motion } from "framer-motion";
import { ResumeCard } from "../ResumeCard";
import { useExperience } from "./useExperience";
import { data } from "./data";
export const Experience = () => {
  useExperience();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      id="experience-in-view"
      className="py-12 flex gap-20 justify-center h-screen w-screen absolute top-300 md:px-20 px-4"
    >
      <div>
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl font-bold text-white experience-title">
            Experience / Education
          </h2>
        </div>
        <div className="mt-14 w-full border-l-[6px] rounded-t-md rounded-b-md border-l-white border-opacity-30 flex flex-col gap-10 items-center">
          {data.map((el, i) => {
            return (
              <ResumeCard
                key={i}
                i={i}
                title={el.title}
                subTitle={el.date}
                logo={el.logo}
                des={el.description}
              />
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;

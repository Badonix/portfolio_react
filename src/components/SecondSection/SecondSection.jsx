import { useSecondSection } from "./useSecondSection";

export const SecondSection = () => {
  useSecondSection();
  return (
    <section
      id="second-section"
      className="overflow-x-hidden flex md:flex-row flex-col items-center gap-8 md:justify-around px-10 top-full  h-screen w-screen absolute"
    >
      <div id="in-view" className="flex flex-col gap-4">
        <h2 className="about-me text-white text-4xl font-ubuntu font-bold ">
          About <span className="text-orange-400">Me</span>
        </h2>
        <p className="description text-white font-ubuntu md:text-xl max-w-2xl">
          Hi, I&apos;m Nick, a 17-year-old high school senior deeply passionate
          about web development for the past 2.5 years. With 4 years of coding
          experience, I bring a blend of creativity and technical proficiency to
          every project. Outside the digital realm, I adore{" "}
          <span className="text-pink-300 font-bold">CATS</span> and find joy in
          solving math problems. Let&apos;s bring your ideas to life!
        </p>
        <p className="author text-gray-400 italic font-ubuntu self-end">
          ... (Thanks to ChatGPT)
        </p>
      </div>
      <img
        src="/assets/me.jpg"
        className="w-64 h-64 me object-cover rounded-full border-white border-8 shadow-lg"
      />
    </section>
  );
};

export default SecondSection;

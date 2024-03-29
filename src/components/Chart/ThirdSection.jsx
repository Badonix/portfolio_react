import { useThirdSection } from "./useThirdSection";

export const ThirdSection = () => {
  const { options, data, Bar } = useThirdSection();
  return (
    <section className="h-screen w-screen absolute top-300">
      <div className="w-full md:p-56 p-4 h-full flex items-center justify-center">
        <div id="in-view2" className="h-2/3 w-full absolute"></div>
        <div className="chart relative w-full h-full flex items-center justify-center">
          <Bar options={options} data={data} />
        </div>
      </div>
    </section>
  );
};

export default ThirdSection;

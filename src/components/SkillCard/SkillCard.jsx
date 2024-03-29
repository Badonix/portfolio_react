export const SkillCard = ({ imageSource, title }) => {
  return (
    <div className="bg-white h-card rounded-xl relative w-full flex items-center justify-center flex-col">
      <div className="absolute card-thing x-1/2 -translate-x-1/2 top-4">
        <h1 className="text-black card-thing text-center absolute x-1/2 -translate-x-1/2 top-4">
          {title}
        </h1>
      </div>
      <img
        alt="skill"
        src={`/assets/skills/${imageSource}`}
        className=" h-24 object-cover"
      />
    </div>
  );
};
export default SkillCard;

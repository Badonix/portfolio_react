import AnimatedCursor from "react-animated-cursor";

const Cursor = () => {
  return (
    <AnimatedCursor
      innerSize={10}
      outerSize={10}
      color="255, 166, 0"
      outerAlpha={0.2}
      outerScale={5}
      innerStyle={{
        backgroundColor: "255, 166, 0",
      }}
      outerStyle={{
        border: "3px solid orange",
      }}
      clickables={[
        "li",
        "a",
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        "img",
        "label[for]",
        "select",
        "textarea",
        "button",
        ".link",
        ".underline-hover",
      ]}
    />
  );
};

export default Cursor;

import React from "react";
import AnimatedCursor from "react-animated-cursor";

const MouseCursor = () => {
  return (
    <div className="z-[500] hidden cursor-pointer lg:flex mb:fixed mb:top-[-100px] App">
      <AnimatedCursor
        innerSize={10}
        outerSize={35}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        hasBlendMode={true}
        innerStyle={{
          backgroundColor: "var(--cursor-color)",
        }}
        outerStyle={{
          border: "3px solid var(--cursor-color)",
        }}
      />
    </div>
  );
};

export default MouseCursor;

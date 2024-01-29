import React from "react";
import AnimatedCursor from "react-animated-cursor";

const MouseCursor = () => {
  return (
    <div className="App z-50 lg:flex hidden">
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

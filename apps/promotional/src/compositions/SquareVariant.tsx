import React from "react";
import { AbsoluteFill } from "remotion";
import PromoVideo from "./PromoVideo";

const SquareVariant: React.FC = () => {
  return (
    <AbsoluteFill style={{ overflow: "hidden" }}>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%) scale(0.5625)",
          width: 1920,
          height: 1080,
          transformOrigin: "center center",
        }}
      >
        <PromoVideo />
      </div>
    </AbsoluteFill>
  );
};

export default SquareVariant;

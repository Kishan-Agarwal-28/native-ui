import React from "react";
import { AbsoluteFill } from "remotion";
import { PromoVideo } from "./PromoVideo";

export const SquareVariant: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        overflow: "hidden",
        backgroundColor: "#09090b",
      }}
    >
      <div
        style={{
          position: "absolute",
          left: -420,
          top: 0,
          width: 1920,
          height: 1080,
        }}
      >
        <PromoVideo />
      </div>
    </AbsoluteFill>
  );
};

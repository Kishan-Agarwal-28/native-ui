import React from "react";
import { C } from "../utils/colors";

interface PhoneMockupProps {
  width?: number;
  height?: number;
  children: React.ReactNode;
  glowColor?: string;
}

export const PhoneMockup: React.FC<PhoneMockupProps> = ({
  width = 280,
  height = 560,
  children,
  glowColor = C.accent,
}) => {
  return (
    <div
      style={{
        position: "relative",
        width,
        height,
        borderRadius: 40,
        backgroundColor: C.bg,
        border: `2px solid ${C.border}`,
        padding: 8,
        boxShadow: `0 0 60px ${glowColor}20, 0 20px 60px rgba(0,0,0,0.5)`,
        overflow: "hidden",
      }}
    >
      {/* Dynamic Island */}
      <div
        style={{
          position: "absolute",
          top: 16,
          left: "50%",
          transform: "translateX(-50%)",
          width: 80,
          height: 24,
          borderRadius: 12,
          backgroundColor: "#000",
          zIndex: 10,
        }}
      />
      {/* Screen */}
      <div
        style={{
          width: "100%",
          height: "100%",
          borderRadius: 32,
          backgroundColor: C.surface,
          overflow: "hidden",
          position: "relative",
        }}
      >
        {children}
      </div>
    </div>
  );
};

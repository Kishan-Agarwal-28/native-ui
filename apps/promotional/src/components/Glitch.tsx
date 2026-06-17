import React from "react";
import { useCurrentFrame } from "remotion";

interface GlitchProps {
  triggerFrame: number;
  children: React.ReactNode;
}

export const Glitch: React.FC<GlitchProps> = ({ triggerFrame, children }) => {
  const frame = useCurrentFrame();
  const f = Math.max(0, frame - triggerFrame);

  if (f === 0) {
    return <div style={{ transform: "translateX(-8px)" }}>{children}</div>;
  }
  if (f === 1) {
    return <div style={{ transform: "translateX(8px)" }}>{children}</div>;
  }
  if (f === 2) {
    return <div style={{ transform: "translateX(-4px)" }}>{children}</div>;
  }

  return <>{children}</>;
};

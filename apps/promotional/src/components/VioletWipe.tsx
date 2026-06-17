import React from "react";
import { useCurrentFrame, spring } from "remotion";
import { C } from "../utils/colors";

interface VioletWipeProps {
  triggerFrame: number;
  duration?: number;
  width?: number;
  direction?: "ltr" | "rtl";
}

export const VioletWipe: React.FC<VioletWipeProps> = ({
  triggerFrame,
  duration = 15,
  width = 2,
  direction = "ltr",
}) => {
  const frame = useCurrentFrame();
  const f = Math.max(0, frame - triggerFrame);

  const progress = spring({
    frame: f,
    fps: 60,
    config: { damping: 12, stiffness: 150, mass: 1 },
  });

  const x = direction === "ltr" ? progress * 1920 : 1920 - progress * 1920;

  if (f > duration + 10) return null;

  return (
    <div
      style={{
        position: "absolute",
        left: x,
        top: 0,
        width,
        height: 1080,
        backgroundColor: C.accent,
        boxShadow: `0 0 20px ${C.accent}, 0 0 60px ${C.accent}40`,
        zIndex: 100,
        pointerEvents: "none",
      }}
    />
  );
};

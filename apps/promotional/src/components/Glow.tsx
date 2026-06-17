import React from "react";
import { useCurrentFrame } from "remotion";
import { C } from "../utils/colors";

interface GlowProps {
  x: number;
  y: number;
  color?: string;
  radius?: number;
  opacity?: number;
  animated?: boolean;
}

export const Glow: React.FC<GlowProps> = ({
  x,
  y,
  color = C.accent,
  radius = 200,
  opacity = 0.25,
  animated = false,
}) => {
  const frame = useCurrentFrame();
  const breathe = animated ? Math.sin(frame / 40) * 0.3 + opacity : opacity;
  return (
    <div
      style={{
        position: "absolute",
        left: x - radius,
        top: y - radius,
        width: radius * 2,
        height: radius * 2,
        borderRadius: "50%",
        background: `radial-gradient(circle, ${color} ${breathe * 100}%, transparent 70%)`,
        opacity: Math.max(0, Math.min(1, breathe)),
        pointerEvents: "none",
        mixBlendMode: "screen",
      }}
    />
  );
};

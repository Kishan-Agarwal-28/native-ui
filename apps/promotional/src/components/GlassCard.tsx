import React from "react";
import { C } from "../utils/colors";

interface GlassCardProps {
  width?: number;
  height?: number;
  children: React.ReactNode;
  glowColor?: string;
  borderRadius?: number;
  style?: React.CSSProperties;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  width,
  height,
  children,
  glowColor = C.accent,
  borderRadius = 16,
  style,
}) => {
  return (
    <div
      style={{
        position: "relative",
        width,
        height,
        borderRadius,
        backgroundColor: "rgba(255, 255, 255, 0.04)",
        border: "1px solid rgba(255, 255, 255, 0.08)",
        boxShadow: `0 0 40px ${glowColor}15, inset 0 1px 0 rgba(255,255,255,0.05)`,
        overflow: "hidden",
        ...style,
      }}
    >
      {children}
    </div>
  );
};

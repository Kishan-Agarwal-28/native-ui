import React from "react";
import { colors } from "../utils/colors";

interface GlassCardProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export const GlassCard: React.FC<GlassCardProps> = ({ children, style }) => {
  return (
    <div
      style={{
        background: "rgba(255,255,255,0.05)",
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: 12,
        backdropFilter: "blur(8px)",
        padding: "24px 28px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 8,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

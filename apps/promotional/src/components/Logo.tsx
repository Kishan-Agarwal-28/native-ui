import React from "react";
import { colors } from "../utils/colors";

interface LogoProps {
  size?: number;
  style?: React.CSSProperties;
}

export const Logo: React.FC<LogoProps> = ({ size = 64, style }) => {
  const iconSize = size * 0.4;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: size * 0.25,
        ...style,
      }}
    >
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 32 32"
        fill="none"
        style={{ flexShrink: 0 }}
      >
        <rect
          x="2"
          y="2"
          width="28"
          height="28"
          rx="8"
          fill={colors.accent}
          opacity="0.15"
        />
        <path
          d="M10 16l4 4 8-8"
          stroke={colors.accent}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span
        style={{
          fontFamily: "'Inter', system-ui, sans-serif",
          fontSize: size * 0.5,
          fontWeight: 700,
          color: colors.text,
          letterSpacing: "-0.03em",
        }}
      >
        Native<span style={{ color: colors.accent }}>UI</span>
      </span>
    </div>
  );
};

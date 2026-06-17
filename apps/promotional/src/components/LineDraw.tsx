import React from "react";
import { useCurrentFrame, interpolate } from "remotion";

interface LineDrawProps {
  width: number;
  height: number;
  color?: string;
  duration?: number;
  direction?: "ltr" | "ttb" | "rtl" | "btt";
  strokeWidth?: number;
  style?: React.CSSProperties;
}

export const LineDraw: React.FC<LineDrawProps> = ({
  width,
  height,
  color = "#a78bfa",
  duration = 20,
  direction = "ltr",
  strokeWidth = 2,
  style,
}) => {
  const frame = useCurrentFrame();
  const progress = interpolate(frame, [0, duration], [0, 100], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const getPath = () => {
    switch (direction) {
      case "ltr":
        return `M 0 ${height / 2} L ${(width * progress) / 100} ${height / 2}`;
      case "rtl":
        return `M ${width} ${height / 2} L ${width - (width * progress) / 100} ${height / 2}`;
      case "ttb":
        return `M ${width / 2} 0 L ${width / 2} ${(height * progress) / 100}`;
      case "btt":
        return `M ${width / 2} ${height} L ${width / 2} ${height - (height * progress) / 100}`;
      default:
        return "";
    }
  };

  return (
    <svg
      width={width}
      height={height}
      style={{ position: "absolute", ...style }}
    >
      <path
        d={getPath()}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
};

import React from "react";
import { useCurrentFrame } from "remotion";

interface CRTTextProps {
  text: string;
  startFrame: number;
  charsPerFrame?: number;
  color?: string;
  size?: number;
  weight?: number | string;
  style?: React.CSSProperties;
  ghost?: boolean;
}

export const CRTText: React.FC<CRTTextProps> = ({
  text,
  startFrame,
  charsPerFrame = 2,
  color = "#fafafa",
  size = 24,
  weight = 400,
  style,
  ghost = true,
}) => {
  const frame = useCurrentFrame();
  const visibleChars = Math.floor(
    Math.max(0, frame - startFrame) * charsPerFrame,
  );

  return (
    <span
      style={{
        display: "inline-block",
        fontSize: size,
        fontWeight: weight,
        color,
        whiteSpace: "pre",
        ...style,
      }}
    >
      {text.split("").map((char, i) => {
        const isVisible = i < visibleChars;
        const isGhost = ghost && i === visibleChars && frame > startFrame;
        return (
          <span
            key={i}
            style={{
              opacity: isVisible ? 1 : isGhost ? 0.3 : 0,
              display: "inline-block",
              minWidth: char === " " ? size * 0.3 : undefined,
            }}
          >
            {char}
          </span>
        );
      })}
    </span>
  );
};

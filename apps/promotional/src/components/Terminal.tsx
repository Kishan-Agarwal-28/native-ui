import React from "react";
import { useCurrentFrame, spring, interpolate } from "remotion";
import { C } from "../utils/colors";
import { LineDraw } from "./LineDraw";
import { TypedText } from "./TypedText";

interface TerminalProps {
  width?: number;
  height?: number;
  children?: React.ReactNode;
  scanLine?: boolean;
  glowIntensity?: number;
  style?: React.CSSProperties;
}

export const Terminal: React.FC<TerminalProps> = ({
  width = 860,
  height = 480,
  children,
  scanLine = true,
  glowIntensity = 0.15,
  style,
}) => {
  const frame = useCurrentFrame();
  const f = Math.max(0, frame);

  // Assembly animation sequence
  const bottomLineProgress = spring({
    frame: f,
    fps: 60,
    config: { damping: 15, stiffness: 100, mass: 1 },
    durationInFrames: 20,
  });

  const sideLinesProgress = spring({
    frame: f - 20,
    fps: 60,
    config: { damping: 15, stiffness: 100, mass: 1 },
    durationInFrames: 20,
  });

  const topLineProgress = spring({
    frame: f - 40,
    fps: 60,
    config: { damping: 15, stiffness: 100, mass: 1 },
    durationInFrames: 20,
  });

  const dotsProgress = spring({
    frame: f - 60,
    fps: 60,
    config: { damping: 10, stiffness: 200, mass: 1 },
    durationInFrames: 15,
  });

  const bgOpacity = interpolate(f, [70, 80], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const scanLineY = interpolate(f % 180, [0, 180], [0, height], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        position: "relative",
        width,
        height,
        ...style,
      }}
    >
      {/* Glow */}
      <div
        style={{
          position: "absolute",
          inset: -40,
          borderRadius: 30,
          background: `radial-gradient(ellipse at center, ${C.accent}${Math.round(
            glowIntensity * 255,
          )
            .toString(16)
            .padStart(2, "0")} 0%, transparent 70%)`,
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Terminal body */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          borderRadius: 14,
          backgroundColor: `rgba(13, 13, 15, ${bgOpacity})`,
          border: `1px solid #2a2a2a`,
          overflow: "hidden",
          zIndex: 1,
        }}
      >
        {/* Title bar dots */}
        <div
          style={{
            display: "flex",
            gap: 8,
            padding: "12px 16px",
            opacity: dotsProgress,
          }}
        >
          {[
            { color: "#ff5f57" },
            { color: "#febc2e" },
            { color: "#28c840" },
          ].map((dot, i) => (
            <div
              key={i}
              style={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                backgroundColor: dot.color,
                transform: `scale(${spring({
                  frame: f - 60 - i * 4,
                  fps: 60,
                  config: { damping: 8, stiffness: 200, mass: 1 },
                })})`,
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div style={{ padding: "0 20px 20px" }}>{children}</div>

        {/* Scan line */}
        {scanLine && (
          <div
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              top: scanLineY,
              height: 2,
              background: `linear-gradient(90deg, transparent, ${C.accent}40, transparent)`,
              pointerEvents: "none",
            }}
          />
        )}
      </div>

      {/* Border assembly lines */}
      <LineDraw
        width={width}
        height={2}
        color={C.border}
        duration={20}
        direction="ltr"
        style={{ bottom: 0, left: 0 }}
      />
      <LineDraw
        width={2}
        height={height}
        color={C.border}
        duration={20}
        direction="btt"
        style={{ top: 0, left: 0 }}
      />
      <LineDraw
        width={2}
        height={height}
        color={C.border}
        duration={20}
        direction="btt"
        style={{ top: 0, right: 0 }}
      />
      <LineDraw
        width={width}
        height={2}
        color={C.border}
        duration={20}
        direction="ltr"
        style={{ top: 0, left: 0 }}
      />
    </div>
  );
};

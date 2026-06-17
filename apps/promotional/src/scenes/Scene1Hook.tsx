import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  interpolate,
  spring,
  useVideoConfig,
} from "remotion";
import { colors } from "../utils/colors";

const tagline = "Stop fighting your component library.";
const words = tagline.split(" ");

const dotGridStyle: React.CSSProperties = {
  position: "absolute",
  inset: 0,
  backgroundImage:
    "radial-gradient(rgba(167,139,250,0.12) 1px, transparent 1px)",
  backgroundSize: "32px 32px",
  opacity: 0.6,
};

const Scene1Hook: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const bgFade = interpolate(frame, [0, 30], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const dotsFade = interpolate(frame, [15, 45], [0, 0.8], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const subtitleOpacity = interpolate(frame, [160, 200], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const subtitleSlide = interpolate(
    spring({
      fps,
      frame: frame - 160,
      config: { damping: 16, stiffness: 140, mass: 0.8 },
    }),
    [0, 1],
    [20, 0],
  );

  return (
    <AbsoluteFill style={{ backgroundColor: colors.bg, opacity: bgFade }}>
      <div style={dotGridStyle as React.CSSProperties} />
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 24,
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            maxWidth: 900,
            gap: "0 12px",
          }}
        >
          {words.map((word, i) => {
            const wordStart = 40 + i * 12;
            const s = spring({
              fps,
              frame: frame - wordStart,
              config: { damping: 12, stiffness: 180, mass: 0.6 },
              from: 1.2,
              to: 1,
            });
            const opacity = interpolate(
              frame,
              [wordStart, wordStart + 8],
              [0, 1],
              { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
            );
            const translateY = interpolate(s, [1, 1.2], [0, -20]);

            return (
              <span
                key={i}
                style={{
                  fontFamily: "'Inter', system-ui, sans-serif",
                  fontSize: 58,
                  fontWeight: 700,
                  color: colors.text,
                  opacity,
                  transform: `scale(${s}) translateY(${translateY}px)`,
                  display: "inline-block",
                  letterSpacing: "-0.03em",
                  textShadow: "0 0 40px rgba(167,139,250,0.15)",
                }}
              >
                {word}
              </span>
            );
          })}
        </div>

        <div
          style={{
            opacity: subtitleOpacity,
            transform: `translateY(${subtitleSlide}px)`,
          }}
        >
          <span
            style={{
              fontFamily: "'Inter', system-ui, sans-serif",
              fontSize: 26,
              fontWeight: 500,
              color: colors.accent,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
            }}
          >
            Own it instead.
          </span>
        </div>
      </div>
    </AbsoluteFill>
  );
};

export default Scene1Hook;

import React from "react";
import {
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  AbsoluteFill,
} from "remotion";
import { C } from "../utils/colors";
import { CRTText } from "../components/CRTText";
import { Glow } from "../components/Glow";
import { fadeIn, slideIn } from "../utils/animations";

const Scene1Hook: React.FC = () => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();
  const f = frame;

  const subtitleOpacity = fadeIn(f, 60, 20);
  const lineWidth = interpolate(f, [40, 70], [0, 120], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: C.bg,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: '"Inter", sans-serif',
        overflow: "hidden",
      }}
    >
      {/* Ambient glow */}
      <Glow
        x={width / 2}
        y={height / 2}
        color={C.accent}
        radius={400}
        opacity={0.1}
        animated
      />

      {/* Center content */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          zIndex: 10,
        }}
      >
        {/* Main title */}
        <CRTText
          text="NATIVEUI"
          startFrame={0}
          charsPerFrame={2.5}
          color={C.text}
          size={96}
          weight={700}
          ghost
          style={{ letterSpacing: -2, lineHeight: 1 }}
        />

        {/* Decorative line */}
        <div
          style={{
            width: lineWidth,
            height: 2,
            backgroundColor: C.accent,
            marginTop: 24,
            marginBottom: 24,
            boxShadow: `0 0 16px ${C.accent}80`,
          }}
        />

        {/* Subtitle */}
        <div
          style={{
            opacity: subtitleOpacity,
            transform: `translateY(${interpolate(f, [60, 80], [20, 0], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            })}px)`,
          }}
        >
          <span
            style={{
              fontSize: 24,
              fontWeight: 400,
              color: C.sub,
              letterSpacing: 0.5,
            }}
          >
            Beautiful React Native components
          </span>
        </div>

        {/* Platform pills */}
        <div
          style={{
            display: "flex",
            gap: 12,
            marginTop: 40,
            opacity: fadeIn(f, 100, 25),
          }}
        >
          {["iOS", "Android", "Web"].map((platform, i) => (
            <div
              key={platform}
              style={{
                padding: "8px 18px",
                borderRadius: 20,
                border: `1px solid ${C.border}`,
                backgroundColor: "rgba(255,255,255,0.02)",
                color: C.muted,
                fontSize: 13,
                fontWeight: 500,
                letterSpacing: 0.5,
                opacity: fadeIn(f, 110 + i * 10, 15),
                transform: `translateY(${interpolate(
                  f,
                  [110 + i * 10, 130 + i * 10],
                  [12, 0],
                  { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
                )}px)`,
              }}
            >
              {platform}
            </div>
          ))}
        </div>
      </div>

      {/* Version badge */}
      <div
        style={{
          position: "absolute",
          bottom: 60,
          right: 80,
          opacity: fadeIn(f, 140, 20),
        }}
      >
        <span
          style={{
            fontSize: 13,
            color: C.dim,
            fontFamily: '"JetBrains Mono", monospace',
          }}
        >
          v1.0
        </span>
      </div>
    </AbsoluteFill>
  );
};

export default Scene1Hook;

import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  interpolate,
  spring,
  useVideoConfig,
} from "remotion";
import { colors } from "../utils/colors";

const painPoints = [
  "Locked into their design decisions",
  "Opaque internals you can\u2019t debug",
  "Forced updates breaking your app",
];

const npmLine = "npm install some-bloated-ui-library";

const Scene2Problem: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const bgFade = interpolate(frame, [0, 20], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const npmChars = Math.min(npmLine.length, Math.floor((frame - 20) * 2));
  const npmDone = npmChars >= npmLine.length;
  const npmVisible = npmLine.slice(0, npmChars);

  const crossDone = npmDone && frame >= 55;
  const crossOpacity = crossDone
    ? interpolate(frame, [55, 75], [0, 1], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      })
    : 0;
  const crossScale = crossDone
    ? spring({
        fps,
        frame: frame - 55,
        config: { damping: 10, stiffness: 200, mass: 0.5 },
        from: 0,
        to: 1,
      })
    : 0;

  const cursorVisible = !npmDone && frame % 12 < 6;

  return (
    <AbsoluteFill style={{ backgroundColor: colors.bg, opacity: bgFade }}>
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 40,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 16,
          }}
        >
          <span
            style={{
              fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
              fontSize: 18,
              color: npmDone ? colors.red : colors.text,
              backgroundColor: "rgba(255,255,255,0.05)",
              padding: "14px 24px",
              borderRadius: 10,
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            {npmVisible}
            {cursorVisible ? (
              <span
                style={{
                  display: "inline-block",
                  width: 2,
                  height: 20,
                  backgroundColor: colors.text,
                  marginLeft: 2,
                  verticalAlign: "middle",
                }}
              />
            ) : null}
          </span>

          {npmDone ? (
            <span
              style={{
                fontSize: 36,
                opacity: crossOpacity,
                transform: `scale(${crossScale})`,
              }}
            >
              ✗
            </span>
          ) : null}
        </div>

        {npmDone ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 16,
              maxWidth: 520,
            }}
          >
            {painPoints.map((point, i) => {
              const pointStart = 80 + i * 20;
              const opacity = interpolate(
                frame,
                [pointStart, pointStart + 10],
                [0, 1],
                {
                  extrapolateLeft: "clamp",
                  extrapolateRight: "clamp",
                },
              );
              const translateX = interpolate(
                spring({
                  fps,
                  frame: frame - pointStart,
                  config: { damping: 16, stiffness: 150, mass: 0.7 },
                }),
                [0, 1],
                [-40, 0],
              );

              return (
                <div
                  key={i}
                  style={{
                    opacity,
                    transform: `translateX(${translateX}px)`,
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 14,
                  }}
                >
                  <span
                    style={{ color: colors.red, fontSize: 20, flexShrink: 0 }}
                  >
                    ✗
                  </span>
                  <span
                    style={{
                      fontFamily: "'Inter', system-ui, sans-serif",
                      fontSize: 20,
                      color: colors.text,
                      fontWeight: 400,
                    }}
                  >
                    {point}
                  </span>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
    </AbsoluteFill>
  );
};

export default Scene2Problem;

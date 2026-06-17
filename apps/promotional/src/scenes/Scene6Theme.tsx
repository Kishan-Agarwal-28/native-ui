import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  interpolate,
  spring,
  useVideoConfig,
} from "remotion";
import { colors, interpolateColorArray } from "../utils/colors";
import { CodeBlock } from "../components/CodeBlock";

const themeCode = `const THEME = {
  light: {
    colors: {
      primary: "#a78bfa",
      background: "#ffffff",
      foreground: "#09090b",
      card: "#ffffff",
      // ...
    },
  },
};`;

const colorSequence = ["#a78bfa", "#2dd4bf", "#fb923c"];
const sequenceDurations = [120, 120, 80];

const Scene6Theme: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const bgFade = interpolate(frame, [0, 20], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const currentColor = interpolateColorArray(
    frame,
    30,
    sequenceDurations,
    colorSequence,
  );

  const textStart = 80;
  const textOpacity = interpolate(frame, [textStart, textStart + 25], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const textScale = spring({
    fps,
    frame: frame - textStart,
    config: { damping: 12, stiffness: 180, mass: 0.6 },
    from: 0.9,
    to: 1,
  });

  const swatchGlow = interpolate(frame % 30, [0, 15, 30], [0.4, 1, 0.4]);

  return (
    <AbsoluteFill style={{ backgroundColor: colors.bg, opacity: bgFade }}>
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 48,
          padding: "60px 80px",
        }}
      >
        <div
          style={{
            flex: 1,
            minWidth: 0,
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}
        >
          <div style={{ position: "relative" }}>
            <CodeBlock
              code={themeCode}
              highlightLine={4}
              highlightColor={`${currentColor}25`}
            />
            <div
              style={{
                position: "absolute",
                right: 16,
                top: 96,
                width: 20,
                height: 20,
                borderRadius: 6,
                backgroundColor: currentColor,
                boxShadow: `0 0 20px ${currentColor}`,
                border: `2px solid ${colors.border}`,
              }}
            />
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 8,
              alignSelf: "center",
            }}
          >
            {colorSequence.map((c, i) => (
              <div
                key={i}
                style={{
                  width: 16,
                  height: 16,
                  borderRadius: 4,
                  backgroundColor: c,
                  border:
                    c === currentColor
                      ? "2px solid white"
                      : `1px solid ${colors.border}`,
                  boxShadow: c === currentColor ? `0 0 12px ${c}` : "none",
                  transition: "none",
                }}
              />
            ))}
          </div>
        </div>

        <div
          style={{
            flexShrink: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 24,
          }}
        >
          <div
            style={{
              width: 240,
              borderRadius: 16,
              border: `1px solid ${colors.border}`,
              backgroundColor: colors.surface,
              padding: 24,
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            <span
              style={{
                fontFamily: "'Inter', system-ui, sans-serif",
                fontSize: 13,
                fontWeight: 600,
                color: colors.text,
              }}
            >
              Preview
            </span>

            <div
              style={{
                backgroundColor: currentColor,
                borderRadius: 10,
                padding: "12px 24px",
                textAlign: "center",
                boxShadow: `0 4px 24px ${currentColor}40`,
              }}
            >
              <span
                style={{
                  fontFamily: "'Inter', system-ui, sans-serif",
                  fontSize: 14,
                  fontWeight: 600,
                  color: currentColor === "#fb923c" ? colors.bg : colors.text,
                }}
              >
                Get Started
              </span>
            </div>

            <div
              style={{
                backgroundColor: "transparent",
                borderRadius: 10,
                padding: "12px 24px",
                textAlign: "center",
                border: `1.5px solid ${currentColor}`,
              }}
            >
              <span
                style={{
                  fontFamily: "'Inter', system-ui, sans-serif",
                  fontSize: 14,
                  fontWeight: 600,
                  color: currentColor,
                }}
              >
                Learn More
              </span>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 48,
          left: 0,
          right: 0,
          textAlign: "center",
          opacity: textOpacity,
          transform: `scale(${textScale})`,
        }}
      >
        <span
          style={{
            fontFamily: "'Inter', system-ui, sans-serif",
            fontSize: 24,
            fontWeight: 600,
            color: colors.text,
            letterSpacing: "-0.02em",
          }}
        >
          One file.{" "}
          <span
            style={{
              color: currentColor,
              textShadow: `0 0 30px ${currentColor}60`,
            }}
          >
            Every component updates.
          </span>
        </span>
      </div>
    </AbsoluteFill>
  );
};

export default Scene6Theme;

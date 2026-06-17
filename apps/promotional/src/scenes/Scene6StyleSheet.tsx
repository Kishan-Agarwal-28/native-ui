import React from "react";
import { useCurrentFrame, interpolate, spring, AbsoluteFill } from "remotion";
import { C } from "../utils/colors";
import { CRTText } from "../components/CRTText";
import { GlassCard } from "../components/GlassCard";
import { fadeIn, slideIn } from "../utils/animations";
import { lerpColor } from "../utils/colorLerp";

const CODE_BLOCK = `const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#09090b',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fafafa',
  },
});`;

const Scene6StyleSheet: React.FC = () => {
  const frame = useCurrentFrame();
  const f = frame;

  // Card spring entrance
  const cardSpring = spring({
    frame: f - 20,
    fps: 60,
    config: { damping: 12, stiffness: 100, mass: 1 },
  });

  // Color pulse for accent word
  const pulse = interpolate(f, [0, 60], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const accentColor = lerpColor(C.text, C.accent, Math.sin(pulse * Math.PI));

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
      {/* Section label */}
      <div
        style={{
          position: "absolute",
          top: 80,
          left: "50%",
          transform: "translateX(-50%)",
          opacity: fadeIn(f, 0, 20),
          zIndex: 10,
        }}
      >
        <span
          style={{
            fontSize: 14,
            fontWeight: 600,
            color: C.accent,
            letterSpacing: 3,
            textTransform: "uppercase" as const,
          }}
        >
          The Truth
        </span>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 80,
          maxWidth: 1200,
          padding: "0 80px",
          zIndex: 10,
        }}
      >
        {/* Left: statement */}
        <div style={{ flex: 1 }}>
          <CRTText
            text="StyleSheet."
            startFrame={20}
            charsPerFrame={2.5}
            color={C.text}
            size={64}
            weight={700}
            ghost
            style={{ letterSpacing: -1, lineHeight: 1.1 }}
          />
          <div style={{ marginTop: 16 }}>
            <CRTText
              text="Not inline styles."
              startFrame={60}
              charsPerFrame={2}
              color={accentColor}
              size={64}
              weight={700}
              ghost
              style={{ letterSpacing: -1, lineHeight: 1.1 }}
            />
          </div>
          <div
            style={{
              marginTop: 32,
              opacity: fadeIn(f, 140, 25),
              transform: `translateY(${slideIn(f, 140, 25, 16)}px)`,
            }}
          >
            <p
              style={{
                fontSize: 18,
                color: C.sub,
                lineHeight: 1.6,
                maxWidth: 420,
              }}
            >
              NativeUI outputs real StyleSheet.create objects. Not inline
              styles. Not CSS-in-JS. Fast, predictable, native performance.
            </p>
          </div>
        </div>

        {/* Right: code card */}
        <div
          style={{
            transform: `scale(${0.95 + cardSpring * 0.05}) translateX(${interpolate(
              cardSpring,
              [0, 1],
              [40, 0],
            )}px)`,
            opacity: cardSpring,
            flex: 1,
            maxWidth: 480,
          }}
        >
          <GlassCard
            glowColor={C.accent}
            borderRadius={16}
            style={{ padding: 28 }}
          >
            {/* Code block header */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                marginBottom: 16,
              }}
            >
              <div
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  backgroundColor: C.red,
                }}
              />
              <div
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  backgroundColor: C.amber,
                }}
              />
              <div
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  backgroundColor: C.green,
                }}
              />
              <span
                style={{
                  marginLeft: 8,
                  fontSize: 12,
                  color: C.dim,
                  fontFamily: '"JetBrains Mono", monospace',
                }}
              >
                styles.ts
              </span>
            </div>
            {/* Code content */}
            <pre
              style={{
                margin: 0,
                fontSize: 13,
                lineHeight: 1.7,
                color: C.muted,
                fontFamily: '"JetBrains Mono", monospace',
                whiteSpace: "pre-wrap",
                wordBreak: "break-word",
              }}
            >
              {CODE_BLOCK.split("\n").map((line, i) => {
                const lineOpacity = fadeIn(f, 40 + i * 10, 15);
                return (
                  <div
                    key={i}
                    style={{
                      opacity: lineOpacity,
                      transform: `translateX(${slideIn(
                        f,
                        40 + i * 10,
                        15,
                        8,
                      )}px)`,
                    }}
                  >
                    {line}
                  </div>
                );
              })}
            </pre>
          </GlassCard>
        </div>
      </div>

      {/* Bottom badge */}
      <div
        style={{
          position: "absolute",
          bottom: 60,
          left: "50%",
          transform: "translateX(-50%)",
          opacity: fadeIn(f, 220, 25),
        }}
      >
        <span
          style={{
            fontSize: 13,
            color: C.dim,
            fontFamily: '"JetBrains Mono", monospace',
            letterSpacing: 0.5,
          }}
        >
          Zero runtime CSS overhead
        </span>
      </div>
    </AbsoluteFill>
  );
};

export default Scene6StyleSheet;

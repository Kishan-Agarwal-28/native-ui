import React from "react";
import {
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
  AbsoluteFill,
} from "remotion";
import { C } from "../utils/colors";
import { CRTText } from "../components/CRTText";
import { Glow } from "../components/Glow";
import { fadeIn, slideIn } from "../utils/animations";

const Scene8CTA: React.FC = () => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();
  const f = frame;

  // CTA button spring
  const buttonSpring = spring({
    frame: f - 60,
    fps: 60,
    config: { damping: 10, stiffness: 150, mass: 1 },
  });

  // Logo glow pulse
  const glowOpacity = 0.08 + 0.04 * Math.sin(f * 0.05);

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
        radius={450}
        opacity={glowOpacity}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 32,
          zIndex: 10,
        }}
      >
        {/* Small label */}
        <div
          style={{
            opacity: fadeIn(f, 0, 20),
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
            Ready?
          </span>
        </div>

        {/* Main headline */}
        <CRTText
          text="Start building."
          startFrame={20}
          charsPerFrame={3}
          color={C.text}
          size={72}
          weight={700}
          ghost
          style={{ letterSpacing: -2, lineHeight: 1, textAlign: "center" }}
        />

        {/* Subheadline */}
        <div
          style={{
            opacity: fadeIn(f, 100, 25),
            transform: `translateY(${slideIn(f, 100, 25, 16)}px)`,
          }}
        >
          <span
            style={{
              fontSize: 22,
              color: C.sub,
              fontWeight: 400,
            }}
          >
            Beautiful components for React Native & Web.
          </span>
        </div>

        {/* CTA Button */}
        <div
          style={{
            marginTop: 24,
            transform: `scale(${0.92 + buttonSpring * 0.08})`,
            opacity: buttonSpring,
          }}
        >
          <div
            style={{
              padding: "18px 40px",
              borderRadius: 12,
              background: `linear-gradient(135deg, ${C.accent}, ${C.accentLo})`,
              color: "#fff",
              fontSize: 18,
              fontWeight: 600,
              letterSpacing: 0.5,
              cursor: "default",
              boxShadow: `0 0 40px ${C.accent}40`,
            }}
          >
            Get Started
          </div>
        </div>

        {/* CLI command */}
        <div
          style={{
            marginTop: 8,
            opacity: fadeIn(f, 140, 25),
          }}
        >
          <div
            style={{
              padding: "10px 20px",
              borderRadius: 8,
              backgroundColor: C.surface,
              border: `1px solid ${C.border}`,
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: 14,
              color: C.muted,
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <span style={{ color: C.accent }}>$</span>
            <span>npx nativeui-cli init my-app</span>
          </div>
        </div>

        {/* URL */}
        <div
          style={{
            marginTop: 8,
            opacity: fadeIn(f, 180, 25),
          }}
        >
          <span
            style={{
              fontSize: 14,
              color: C.dim,
              fontFamily: '"JetBrains Mono", monospace',
              letterSpacing: 0.5,
            }}
          >
            native-ui.dev
          </span>
        </div>

        {/* Footer logo */}
        <div
          style={{
            position: "absolute",
            bottom: 60,
            left: "50%",
            transform: "translateX(-50%)",
            opacity: fadeIn(f, 240, 30),
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          <div
            style={{
              width: 24,
              height: 24,
              borderRadius: 6,
              background: `linear-gradient(135deg, ${C.accent}, ${C.accentLo})`,
            }}
          />
          <span
            style={{
              fontSize: 16,
              fontWeight: 600,
              color: C.text,
              letterSpacing: -0.3,
            }}
          >
            NATIVEUI
          </span>
        </div>
      </div>
    </AbsoluteFill>
  );
};

export default Scene8CTA;

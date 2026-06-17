import React from "react";
import { useCurrentFrame, interpolate, spring, AbsoluteFill } from "remotion";
import { C } from "../utils/colors";
import { GlassCard } from "../components/GlassCard";
import { fadeIn } from "../utils/animations";

const TRUTHS = [
  {
    label: "TRUTH #01",
    title: "Works Everywhere",
    body: "One codebase. iOS, Android, and Web. No platform-specific rewrites.",
    icon: "◎",
  },
  {
    label: "TRUTH #02",
    title: "Beautiful by Default",
    body: "Fully styled components out of the box. Not headless. Not bare. Ready.",
    icon: "◈",
  },
];

const Scene3TwoTruths: React.FC = () => {
  const frame = useCurrentFrame();
  const f = frame;

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
          Two Truths
        </span>
      </div>

      {/* Cards container */}
      <div
        style={{
          display: "flex",
          gap: 40,
          alignItems: "stretch",
          zIndex: 10,
          padding: "0 80px",
        }}
      >
        {TRUTHS.map((truth, i) => {
          const cardSpring = spring({
            frame: f - (30 + i * 40),
            fps: 60,
            config: { damping: 12, stiffness: 120, mass: 1 },
          });
          const xOffset = i === 0 ? -40 : 40;

          return (
            <div
              key={truth.label}
              style={{
                transform: `translateX(${interpolate(
                  cardSpring,
                  [0, 1],
                  [xOffset, 0],
                )}px) scale(${0.95 + cardSpring * 0.05})`,
                opacity: cardSpring,
                flex: 1,
                maxWidth: 420,
              }}
            >
              <GlassCard
                glowColor={i === 0 ? C.accent : C.cyan}
                borderRadius={20}
                style={{ height: "100%", padding: "40px 36px" }}
              >
                {/* Icon */}
                <div
                  style={{
                    fontSize: 32,
                    color: i === 0 ? C.accent : C.cyan,
                    marginBottom: 24,
                    opacity: fadeIn(f, 60 + i * 40, 20),
                  }}
                >
                  {truth.icon}
                </div>

                {/* Label */}
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 600,
                    color: i === 0 ? C.accentLo : C.cyan,
                    letterSpacing: 2,
                    marginBottom: 12,
                    opacity: fadeIn(f, 70 + i * 40, 15),
                  }}
                >
                  {truth.label}
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontSize: 32,
                    fontWeight: 700,
                    color: C.text,
                    margin: 0,
                    marginBottom: 16,
                    letterSpacing: -0.5,
                    opacity: fadeIn(f, 80 + i * 40, 20),
                  }}
                >
                  {truth.title}
                </h3>

                {/* Body */}
                <p
                  style={{
                    fontSize: 17,
                    color: C.sub,
                    margin: 0,
                    lineHeight: 1.6,
                    opacity: fadeIn(f, 100 + i * 40, 25),
                  }}
                >
                  {truth.body}
                </p>
              </GlassCard>
            </div>
          );
        })}
      </div>

      {/* Decorative connecting line */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 60,
          height: 2,
          backgroundColor: C.border,
          zIndex: 5,
          opacity: fadeIn(f, 180, 30),
        }}
      />
    </AbsoluteFill>
  );
};

export default Scene3TwoTruths;

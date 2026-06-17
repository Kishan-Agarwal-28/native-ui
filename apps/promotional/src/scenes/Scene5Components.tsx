import React from "react";
import { useCurrentFrame, interpolate, spring, AbsoluteFill } from "remotion";
import { C } from "../utils/colors";
import { PhoneMockup } from "../components/PhoneMockup";
import { GlassCard } from "../components/GlassCard";
import { fadeIn } from "../utils/animations";

const COMPONENTS = [
  { name: "Button", color: C.accent, y: 0 },
  { name: "Card", color: C.cyan, y: 1 },
  { name: "Input", color: C.green, y: 2 },
  { name: "Badge", color: C.amber, y: 3 },
];

const Scene5Components: React.FC = () => {
  const frame = useCurrentFrame();
  const f = frame;

  // Phone entrance
  const phoneSpring = spring({
    frame: f,
    fps: 60,
    config: { damping: 14, stiffness: 100, mass: 1 },
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
          Components
        </span>
      </div>

      {/* Phone mockup */}
      <div
        style={{
          transform: `translateY(${interpolate(
            phoneSpring,
            [0, 1],
            [60, 0],
          )}px) scale(${0.92 + phoneSpring * 0.08})`,
          opacity: phoneSpring,
          zIndex: 10,
        }}
      >
        <PhoneMockup width={260} height={520} glowColor={C.accent}>
          {/* Phone screen content */}
          <div
            style={{
              padding: 20,
              display: "flex",
              flexDirection: "column",
              gap: 12,
              height: "100%",
            }}
          >
            {/* Mock button */}
            <div
              style={{
                padding: "12px 16px",
                borderRadius: 10,
                backgroundColor: C.accent,
                color: "#fff",
                fontSize: 14,
                fontWeight: 600,
                textAlign: "center",
                opacity: fadeIn(f, 40, 20),
                transform: `translateY(${interpolate(f, [40, 60], [10, 0], {
                  extrapolateLeft: "clamp",
                  extrapolateRight: "clamp",
                })}px)`,
              }}
            >
              Button
            </div>

            {/* Mock card */}
            <div
              style={{
                padding: 14,
                borderRadius: 12,
                backgroundColor: C.elevated,
                border: `1px solid ${C.border}`,
                opacity: fadeIn(f, 70, 20),
                transform: `translateY(${interpolate(f, [70, 90], [10, 0], {
                  extrapolateLeft: "clamp",
                  extrapolateRight: "clamp",
                })}px)`,
              }}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 8,
                  backgroundColor: C.accent,
                  marginBottom: 8,
                }}
              />
              <div
                style={{
                  height: 10,
                  width: "70%",
                  borderRadius: 4,
                  backgroundColor: C.border,
                  marginBottom: 6,
                }}
              />
              <div
                style={{
                  height: 8,
                  width: "50%",
                  borderRadius: 4,
                  backgroundColor: C.border,
                }}
              />
            </div>

            {/* Mock input */}
            <div
              style={{
                padding: "10px 12px",
                borderRadius: 8,
                backgroundColor: C.elevated,
                border: `1px solid ${C.border}`,
                color: C.muted,
                fontSize: 13,
                opacity: fadeIn(f, 100, 20),
                transform: `translateY(${interpolate(f, [100, 120], [10, 0], {
                  extrapolateLeft: "clamp",
                  extrapolateRight: "clamp",
                })}px)`,
              }}
            >
              Input
            </div>

            {/* Mock badge */}
            <div
              style={{
                display: "flex",
                gap: 8,
                marginTop: 4,
                opacity: fadeIn(f, 130, 20),
              }}
            >
              {["New", "Beta"].map((badge, i) => (
                <span
                  key={badge}
                  style={{
                    padding: "4px 10px",
                    borderRadius: 12,
                    backgroundColor:
                      i === 0
                        ? "rgba(74,222,128,0.12)"
                        : "rgba(251,191,36,0.12)",
                    color: i === 0 ? C.green : C.amber,
                    fontSize: 11,
                    fontWeight: 600,
                  }}
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </PhoneMockup>
      </div>

      {/* Component labels floating around */}
      {COMPONENTS.map((comp, i) => {
        const side = i % 2 === 0 ? -1 : 1;
        const labelSpring = spring({
          frame: f - (160 + i * 20),
          fps: 60,
          config: { damping: 10, stiffness: 150, mass: 1 },
        });

        return (
          <div
            key={comp.name}
            style={{
              position: "absolute",
              top: `${30 + comp.y * 12}%`,
              [side === -1 ? "left" : "right"]: 100,
              transform: `translateX(${interpolate(
                labelSpring,
                [0, 1],
                [side * 40, 0],
              )}px)`,
              opacity: labelSpring,
              zIndex: 10,
            }}
          >
            <GlassCard
              glowColor={comp.color}
              borderRadius={10}
              style={{ padding: "10px 18px" }}
            >
              <span
                style={{
                  fontSize: 14,
                  fontWeight: 600,
                  color: comp.color,
                }}
              >
                {comp.name}
              </span>
            </GlassCard>
          </div>
        );
      })}

      {/* Component count */}
      <div
        style={{
          position: "absolute",
          bottom: 60,
          left: "50%",
          transform: "translateX(-50%)",
          opacity: fadeIn(f, 260, 25),
        }}
      >
        <span style={{ fontSize: 15, color: C.muted }}>
          20+ production-ready components
        </span>
      </div>
    </AbsoluteFill>
  );
};

export default Scene5Components;

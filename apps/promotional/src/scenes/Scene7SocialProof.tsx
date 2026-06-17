import React from "react";
import { useCurrentFrame, interpolate, spring, AbsoluteFill } from "remotion";
import { C } from "../utils/colors";
import { CRTText } from "../components/CRTText";
import { fadeIn } from "../utils/animations";
import { xorshift32 } from "../utils/seed";

const STATS = [
  { value: "500", suffix: "+", label: "GitHub Stars", color: C.accent },
  { value: "10", suffix: "k+", label: "Downloads", color: C.cyan },
  { value: "20", suffix: "+", label: "Components", color: C.green },
];

// Deterministic avatars using seeded randomness
function generateAvatars(seed: number, count: number): string[] {
  const rand = xorshift32(seed);
  const names = [
    "JD",
    "AK",
    "MR",
    "SL",
    "TC",
    "EN",
    "PW",
    "LH",
    "RM",
    "BS",
    "DK",
    "JF",
    "NG",
    "XO",
    "QV",
    "WY",
  ];
  const result: string[] = [];
  for (let i = 0; i < count; i++) {
    const idx = Math.floor(rand() * names.length);
    result.push(names[idx]);
  }
  return result;
}

const Scene7SocialProof: React.FC = () => {
  const frame = useCurrentFrame();
  const f = frame;

  const avatars = React.useMemo(() => generateAvatars(9999, 8), []);

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
          Trusted by developers
        </span>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 48,
          zIndex: 10,
        }}
      >
        {/* Avatar stack */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            opacity: fadeIn(f, 20, 25),
          }}
        >
          <div style={{ display: "flex", marginLeft: 16 }}>
            {avatars.map((name, i) => {
              const avatarSpring = spring({
                frame: f - (30 + i * 8),
                fps: 60,
                config: { damping: 10, stiffness: 180, mass: 1 },
              });
              const hue = ((i * 37) % 360).toString();
              return (
                <div
                  key={i}
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    backgroundColor: `hsl(${hue}, 60%, 55%)`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginLeft: -12,
                    border: `2px solid ${C.bg}`,
                    fontSize: 14,
                    fontWeight: 700,
                    color: "#fff",
                    transform: `scale(${avatarSpring})`,
                    opacity: avatarSpring,
                    zIndex: avatars.length - i,
                  }}
                >
                  {name}
                </div>
              );
            })}
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: "50%",
                backgroundColor: C.elevated,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginLeft: -12,
                border: `2px solid ${C.bg}`,
                fontSize: 12,
                fontWeight: 600,
                color: C.muted,
                transform: `scale(${spring({
                  frame: f - 100,
                  fps: 60,
                  config: { damping: 10, stiffness: 180, mass: 1 },
                })})`,
                opacity: spring({
                  frame: f - 100,
                  fps: 60,
                  config: { damping: 10, stiffness: 180, mass: 1 },
                }),
                zIndex: 0,
              }}
            >
              +99
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div
          style={{
            display: "flex",
            gap: 64,
            alignItems: "flex-start",
          }}
        >
          {STATS.map((stat, i) => {
            const statSpring = spring({
              frame: f - (80 + i * 25),
              fps: 60,
              config: { damping: 12, stiffness: 120, mass: 1 },
            });
            const countUp = Math.min(
              parseInt(stat.value),
              Math.floor(
                interpolate(
                  f,
                  [100 + i * 25, 180 + i * 25],
                  [0, parseInt(stat.value)],
                  {
                    extrapolateLeft: "clamp",
                    extrapolateRight: "clamp",
                  },
                ),
              ),
            );

            return (
              <div
                key={stat.label}
                style={{
                  textAlign: "center",
                  transform: `translateY(${interpolate(
                    statSpring,
                    [0, 1],
                    [20, 0],
                  )}px)`,
                  opacity: statSpring,
                }}
              >
                <div
                  style={{
                    fontSize: 56,
                    fontWeight: 700,
                    color: stat.color,
                    letterSpacing: -1,
                    lineHeight: 1,
                  }}
                >
                  {countUp}
                  <span style={{ fontSize: 36 }}>{stat.suffix}</span>
                </div>
                <div
                  style={{
                    marginTop: 8,
                    fontSize: 14,
                    fontWeight: 500,
                    color: C.muted,
                    letterSpacing: 0.5,
                  }}
                >
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Quote */}
        <div
          style={{
            maxWidth: 600,
            textAlign: "center",
            opacity: fadeIn(f, 220, 30),
            marginTop: 16,
          }}
        >
          <p
            style={{
              fontSize: 22,
              color: C.sub,
              fontStyle: "italic",
              lineHeight: 1.5,
            }}
          >
            "Finally, a component library that feels native and looks great out
            of the box."
          </p>
          <p
            style={{
              marginTop: 16,
              fontSize: 14,
              color: C.dim,
              fontWeight: 500,
            }}
          >
            — Early Adopter
          </p>
        </div>
      </div>
    </AbsoluteFill>
  );
};

export default Scene7SocialProof;

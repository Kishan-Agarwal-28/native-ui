import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  interpolate,
  spring,
  useVideoConfig,
} from "remotion";
import { colors } from "../utils/colors";
import { GlassCard } from "../components/GlassCard";
import { Logo } from "../components/Logo";

const cards = [
  {
    icon: "📋",
    title: "Copy the code",
    desc: "Paste components into your project",
  },
  {
    icon: "🔧",
    title: "Customize freely",
    desc: "Full TypeScript source, no lock-in",
  },
  {
    icon: "🚀",
    title: "Ship with confidence",
    desc: "Your components, your rules",
  },
];

const Scene3Solution: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const bgFade = interpolate(frame, [0, 20], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const logoScale = spring({
    fps,
    frame: frame - 15,
    config: { damping: 10, stiffness: 200, mass: 0.5 },
    from: 0.3,
    to: 1,
  });
  const logoOpacity = interpolate(frame, [15, 35], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const subtitleStagger = 50;
  const subtitleOpacity = interpolate(
    frame,
    [subtitleStagger, subtitleStagger + 20],
    [0, 1],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    },
  );

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
          gap: 48,
        }}
      >
        <div
          style={{
            opacity: logoOpacity,
            transform: `scale(${logoScale})`,
          }}
        >
          <Logo size={80} />
        </div>

        <div style={{ opacity: subtitleOpacity }}>
          <span
            style={{
              fontFamily: "'Inter', system-ui, sans-serif",
              fontSize: 28,
              fontWeight: 600,
              color: colors.accent,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            Copy. Own. Ship.
          </span>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 24,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {cards.map((card, i) => {
            const cardStart = 70 + i * 15;
            const cardOpacity = interpolate(
              frame,
              [cardStart, cardStart + 15],
              [0, 1],
              {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              },
            );
            const cardSlide = interpolate(
              spring({
                fps,
                frame: frame - cardStart,
                config: { damping: 14, stiffness: 140, mass: 0.7 },
              }),
              [0, 1],
              [60, 0],
            );
            const cardScale = interpolate(
              spring({
                fps,
                frame: frame - cardStart,
                config: { damping: 10, stiffness: 200, mass: 0.5 },
                from: 0.9,
                to: 1,
              }),
              [0.9, 1],
              [0.9, 1],
            );

            return (
              <div
                key={i}
                style={{
                  opacity: cardOpacity,
                  transform: `translateY(${cardSlide}px) scale(${cardScale})`,
                }}
              >
                <GlassCard style={{ width: 240 }}>
                  <span style={{ fontSize: 40, marginBottom: 8 }}>
                    {card.icon}
                  </span>
                  <span
                    style={{
                      fontFamily: "'Inter', system-ui, sans-serif",
                      fontSize: 18,
                      fontWeight: 600,
                      color: colors.text,
                    }}
                  >
                    {card.title}
                  </span>
                  <span
                    style={{
                      fontFamily: "'Inter', system-ui, sans-serif",
                      fontSize: 13,
                      color: colors.textSecondary,
                      textAlign: "center",
                    }}
                  >
                    {card.desc}
                  </span>
                </GlassCard>
              </div>
            );
          })}
        </div>
      </div>
    </AbsoluteFill>
  );
};

export default Scene3Solution;

import React from "react";
import { useCurrentFrame, interpolate, AbsoluteFill } from "remotion";
import { C } from "../utils/colors";
import { CRTText } from "../components/CRTText";
import { fadeIn, slideIn } from "../utils/animations";
import { LineDraw } from "../components/LineDraw";

const Scene2Positioning: React.FC = () => {
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
      {/* Background decorative lines */}
      <LineDraw
        width={300}
        height={1}
        color="rgba(167, 139, 250, 0.08)"
        duration={40}
        direction="ltr"
        style={{ top: 120, left: 80 }}
      />
      <LineDraw
        width={1}
        height={200}
        color="rgba(167, 139, 250, 0.06)"
        duration={50}
        direction="btt"
        style={{ top: 80, right: 120 }}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: 24,
          maxWidth: 900,
          zIndex: 10,
          padding: "0 80px",
        }}
      >
        {/* Problem label */}
        <div
          style={{
            opacity: fadeIn(f, 0, 20),
            transform: `translateX(${slideIn(f, 0, 20, -30)}px)`,
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
            The Problem
          </span>
        </div>

        {/* Main statement */}
        <div style={{ marginTop: 8 }}>
          <CRTText
            text="Building cross-platform UI is hard."
            startFrame={20}
            charsPerFrame={2}
            color={C.text}
            size={48}
            weight={600}
            ghost={false}
            style={{ letterSpacing: -0.5, lineHeight: 1.2 }}
          />
        </div>

        {/* Supporting points */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 16,
            marginTop: 16,
          }}
        >
          {[
            "Different APIs for every platform",
            "Styling that never feels native",
            "A component library for each ecosystem",
          ].map((text, i) => (
            <div
              key={text}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                opacity: fadeIn(f, 100 + i * 25, 20),
                transform: `translateX(${slideIn(f, 100 + i * 25, 20, -20)}px)`,
              }}
            >
              <div
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  backgroundColor: C.red,
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontSize: 20,
                  color: C.sub,
                  fontWeight: 400,
                }}
              >
                {text}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom emphasis line */}
        <div
          style={{
            marginTop: 40,
            height: 2,
            width: interpolate(f, [220, 260], [0, 200], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
            background: `linear-gradient(90deg, ${C.red}, transparent)`,
            opacity: fadeIn(f, 220, 20),
          }}
        />

        <div
          style={{
            marginTop: 12,
            opacity: fadeIn(f, 260, 20),
          }}
        >
          <span style={{ fontSize: 18, color: C.muted }}>Until now.</span>
        </div>
      </div>
    </AbsoluteFill>
  );
};

export default Scene2Positioning;

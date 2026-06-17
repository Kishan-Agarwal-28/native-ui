import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  interpolate,
  spring,
  useVideoConfig,
} from "remotion";
import { colors } from "../utils/colors";
import { Logo } from "../components/Logo";

interface TypingChar {
  char: string;
  frame: number;
}

function buildTypingSchedule(
  text: string,
  startFrame: number,
  charsPerFrame: number,
  pauseAtChar: Record<number, number>,
): TypingChar[] {
  const result: TypingChar[] = [];
  let f = startFrame;
  for (let i = 0; i < text.length; i++) {
    result.push({ char: text[i], frame: f });
    f += Math.ceil(1 / charsPerFrame);
    if (pauseAtChar[i]) {
      f += pauseAtChar[i];
    }
  }
  return result;
}

const urlSchedule = buildTypingSchedule("nativeui.qzz.io", 30, 0.5, {
  [7]: 10,
  [11]: 10,
});

const installLine = "$ nativeui-cli add button";
const installSchedule = buildTypingSchedule(installLine, 120, 0.8, {
  [0]: 0,
});

const Scene7CTA: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const bgFade = interpolate(frame, [0, 25], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const logoOpacity = interpolate(frame, [0, 30], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const logoSs = spring({
    fps,
    frame,
    config: { damping: 14, stiffness: 160, mass: 0.6 },
    from: 0.8,
    to: 1,
  });

  function renderTyped(
    schedule: TypingChar[],
    style?: React.CSSProperties,
    showCursor = true,
  ) {
    const visible = schedule.filter((tc) => tc.frame <= frame);
    const text = visible.map((tc) => tc.char).join("");
    const isDone =
      schedule.length > 0 && frame >= schedule[schedule.length - 1].frame + 12;
    const cursor = !isDone && showCursor && frame % 16 < 8;

    return (
      <span style={style}>
        {text}
        {cursor ? (
          <span
            style={{
              display: "inline-block",
              width: 2,
              height: 24,
              backgroundColor: colors.accent,
              marginLeft: 2,
              verticalAlign: "middle",
            }}
          />
        ) : null}
      </span>
    );
  }

  const starStart = 180;
  const starEnd = 360;
  const starCount = Math.floor(
    interpolate(frame, [starStart, starEnd], [0, 1847], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }),
  );
  const starOpacity = interpolate(frame, [starStart, starStart + 20], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const taglineStart = 280;
  const taglineOpacity = interpolate(
    frame,
    [taglineStart, taglineStart + 30],
    [0, 1],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    },
  );
  const taglineSlide = interpolate(
    spring({
      fps,
      frame: frame - taglineStart,
      config: { damping: 14, stiffness: 140, mass: 0.7 },
    }),
    [0, 1],
    [30, 0],
  );

  const installDone = frame >= 120 + installSchedule.length / 0.8 + 15;
  const installOpacity = interpolate(frame, [120, 140], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const vignetteOpacity = interpolate(frame, [300, 420], [0, 0.4], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ backgroundColor: colors.bg, opacity: bgFade }}>
      <div
        style={{
          position: "absolute",
          inset: 0,
          boxShadow: `inset 0 0 200px rgba(0,0,0,${0.3 + vignetteOpacity * 0.4})`,
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 32,
        }}
      >
        <div style={{ opacity: logoOpacity, transform: `scale(${logoSs})` }}>
          <Logo size={56} />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 8,
          }}
        >
          <span
            style={{
              fontFamily: "'Inter', system-ui, sans-serif",
              fontSize: 22,
              fontWeight: 500,
              color: colors.textSecondary,
            }}
          >
            {renderTyped(
              urlSchedule,
              {
                fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
                fontSize: 32,
                fontWeight: 700,
                color: colors.text,
                letterSpacing: "0.02em",
              },
              !installDone,
            )}
          </span>
        </div>

        <div style={{ opacity: installOpacity }}>
          <span
            style={{
              fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
              fontSize: 16,
              color: colors.textSecondary,
              backgroundColor: "rgba(255,255,255,0.05)",
              padding: "10px 20px",
              borderRadius: 8,
              border: `1px solid ${colors.border}`,
            }}
          >
            {installDone ? (
              <>
                <span style={{ color: colors.accent }}>$ </span>
                <span>{installLine}</span>
              </>
            ) : (
              renderTyped(
                installSchedule,
                {
                  fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
                  fontSize: 16,
                },
                false,
              )
            )}
          </span>
        </div>

        <div
          style={{
            opacity: starOpacity,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 8,
          }}
        >
          <span style={{ fontSize: 22 }}>⭐</span>
          <span
            style={{
              fontFamily: "'Inter', system-ui, sans-serif",
              fontSize: 18,
              fontWeight: 600,
              color: colors.text,
            }}
          >
            GitHub
          </span>
          <span
            style={{
              fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
              fontSize: 18,
              fontWeight: 700,
              color: colors.accent,
            }}
          >
            {starCount.toLocaleString()}
          </span>
        </div>

        <div
          style={{
            opacity: taglineOpacity,
            transform: `translateY(${taglineSlide}px)`,
            marginTop: 16,
          }}
        >
          <span
            style={{
              fontFamily: "'Inter', system-ui, sans-serif",
              fontSize: 28,
              fontWeight: 600,
              color: colors.text,
              letterSpacing: "-0.02em",
            }}
          >
            Your components.{" "}
            <span style={{ color: colors.accent }}>Your rules.</span>
          </span>
        </div>
      </div>
    </AbsoluteFill>
  );
};

export default Scene7CTA;

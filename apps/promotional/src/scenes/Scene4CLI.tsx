import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  interpolate,
  spring,
  useVideoConfig,
} from "remotion";
import { Terminal } from "../components/Terminal";
import { colors } from "../utils/colors";

const LINE_HEIGHT = 24;
const INIT_DELAY = 20;
const CHAR_RATE = 3;
const PAUSE_AFTER_LINE = 12;

interface ScriptLine {
  text: string;
  type: "prompt" | "typing" | "success" | "dim";
}

const script: ScriptLine[] = [
  { text: "$ nativeui-cli init", type: "prompt" },
  { text: "✔ TypeScript? … yes", type: "success" },
  { text: "✔ Output dir … components/ui", type: "success" },
  { text: "✔ Install deps? … yes", type: "success" },
  { text: "$ nativeui-cli add button card input", type: "prompt" },
  { text: "✓ button     installed", type: "success" },
  { text: "✓ card       installed", type: "success" },
  { text: "✓ input      installed", type: "success" },
];

function getCharCount(text: string): number {
  return text.length;
}

function computeTimings(charsPerFrame: number): number[] {
  const lineStarts: number[] = [];
  let currentFrame = INIT_DELAY;
  for (const line of script) {
    lineStarts.push(currentFrame);
    const chars = getCharCount(line.text);
    const typingFrames = Math.ceil(chars / charsPerFrame);
    currentFrame += typingFrames + PAUSE_AFTER_LINE;
  }
  return lineStarts;
}

const Scene4CLI: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const slideProgress = spring({
    fps,
    frame: Math.max(0, frame - 5),
    config: { damping: 16, stiffness: 140, mass: 0.8 },
  });
  const translateY = interpolate(slideProgress, [0, 1], [120, 0]);

  const fadeIn = interpolate(frame, [0, 15], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const lineStarts = computeTimings(CHAR_RATE);

  function renderLine(line: ScriptLine, lineIndex: number): React.ReactNode {
    const ls = lineStarts[lineIndex];
    if (frame < ls) return null;

    const txt = line.text;
    const chars = txt.length;
    const typingEnd = ls + Math.ceil(chars / CHAR_RATE);
    const progress = Math.min(chars, Math.floor((frame - ls) * CHAR_RATE));
    const visibleText = line.type === "success" ? txt : txt.slice(0, progress);

    const isTyping = line.type === "prompt" && frame < typingEnd;
    const cursorBlink = isTyping && frame % 12 < 6;

    let color = colors.textSecondary;
    if (line.type === "prompt") color = colors.text;
    if (line.type === "success") color = colors.green;
    if (line.type === "dim") color = colors.textSecondary;

    const lineStyle: React.CSSProperties = {
      fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
      fontSize: 15,
      lineHeight: `${LINE_HEIGHT}px`,
      color,
      whiteSpace: "pre",
      overflow: "hidden",
    };

    if (line.type === "prompt") {
      const promptChar = "\x1b[95m$\x1b[0m ";
      return (
        <div key={lineIndex} style={lineStyle}>
          <span style={{ color: colors.accent }}>$ </span>
          <span>{visibleText.slice(2)}</span>
          {cursorBlink ? (
            <span
              style={{
                display: "inline-block",
                width: 2,
                height: 16,
                backgroundColor: colors.accent,
                marginLeft: 1,
                verticalAlign: "middle",
              }}
            />
          ) : null}
        </div>
      );
    }

    const lineFadeIn = interpolate(frame, [ls, ls + 6], [0, 1], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });

    if (line.type === "success") {
      const flashElapsed = frame - ls;
      const flashIntensity = Math.max(0, 1 - flashElapsed / 20);
      const flashColor =
        flashIntensity > 0
          ? `rgba(74, 222, 128, ${0.15 * flashIntensity})`
          : "transparent";

      return (
        <div
          key={lineIndex}
          style={{
            ...lineStyle,
            opacity: lineFadeIn,
            backgroundColor: flashColor,
            borderRadius: 4,
            padding: "0 4px",
            margin: "0 -4px",
          }}
        >
          {visibleText}
        </div>
      );
    }

    return (
      <div key={lineIndex} style={{ ...lineStyle, opacity: lineFadeIn }}>
        {visibleText}
      </div>
    );
  }

  return (
    <AbsoluteFill style={{ backgroundColor: colors.bg, padding: "60px 80px" }}>
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          opacity: fadeIn,
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: 820,
            transform: `translateY(${translateY}px)`,
          }}
        >
          <Terminal>{script.map((line, i) => renderLine(line, i))}</Terminal>
        </div>
      </div>
    </AbsoluteFill>
  );
};

export default Scene4CLI;

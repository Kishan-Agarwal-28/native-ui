import React from "react";
import { useCurrentFrame, interpolate } from "remotion";
import { colors } from "../utils/colors";

const cursorStyle: React.CSSProperties = {
  display: "inline-block",
  width: 2,
  height: "1em",
  backgroundColor: colors.accent,
  marginLeft: 2,
  verticalAlign: "text-bottom",
};

interface TypedTextProps {
  text: string;
  startFrame: number;
  charsPerFrame?: number;
  style?: React.CSSProperties;
  showCursor?: boolean;
  cursorStyle?: React.CSSProperties;
}

function getPauseAtNewline(line: string): number {
  if (line === "") return 4;
  if (line.startsWith("$")) return 8;
  if (line.startsWith("✔") || line.startsWith("✓") || line.startsWith("✗"))
    return 12;
  return 4;
}

export const TypedText: React.FC<TypedTextProps> = ({
  text,
  startFrame,
  charsPerFrame = 3,
  style,
  showCursor = true,
  cursorStyle: cursorOverride,
}) => {
  const frame = useCurrentFrame();
  const elapsed = frame - startFrame;

  if (elapsed < 0) return <span style={style} />;

  let totalChars = 0;
  const lines = text.split("\n");

  for (const line of lines) {
    const pause = getPauseAtNewline(line);
    const lineChars = line.length + 1;
    const needed = Math.ceil(lineChars / charsPerFrame) + pause;
    const lineFrames = needed;
    if (elapsed < totalChars / charsPerFrame + lineFrames) {
      const lineElapsed = elapsed - totalChars / charsPerFrame;
      const lineProgress = Math.max(0, Math.floor(lineElapsed * charsPerFrame));
      const visible = text.slice(
        0,
        text.indexOf(line) + Math.min(lineProgress, line.length + 1),
      );
      const cursorVisible =
        showCursor && text.indexOf(line) + lineProgress <= text.length;
      return (
        <span style={style}>
          {visible}
          {cursorVisible ? (
            <span style={{ ...cursorStyle, ...cursorOverride }} />
          ) : null}
        </span>
      );
    }
    totalChars += lineFrames * charsPerFrame;
  }

  return (
    <span style={style}>
      {text}
      {showCursor ? (
        <span
          style={{
            ...cursorStyle,
            ...cursorOverride,
            opacity: interpolate(frame % 30, [0, 15, 30], [1, 0, 1]),
          }}
        />
      ) : null}
    </span>
  );
};

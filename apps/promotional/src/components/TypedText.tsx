import React from "react";
import { useCurrentFrame } from "remotion";

interface TypedLine {
  text: string;
  color?: string;
  delay?: number;
}

interface TypedTextProps {
  lines: TypedLine[];
  startFrame: number;
  speed?: number; // chars per frame
  cursor?: boolean;
  cursorColor?: string;
  fontSize?: number;
  lineHeight?: number;
  fontFamily?: string;
}

export const TypedText: React.FC<TypedTextProps> = ({
  lines,
  startFrame,
  speed = 2,
  cursor = true,
  cursorColor = "#a78bfa",
  fontSize = 15,
  lineHeight = 1.8,
  fontFamily = '"JetBrains Mono", monospace',
}) => {
  const frame = useCurrentFrame();
  const elapsed = Math.max(0, frame - startFrame);
  const totalChars = lines.reduce((sum, line) => sum + line.text.length + 1, 0); // +1 for newline
  const typedSoFar = Math.floor(elapsed * speed);

  let remaining = typedSoFar;
  const rendered: { chars: string; color: string }[] = [];

  for (const line of lines) {
    const lineDelay = line.delay ?? 0;
    if (remaining < lineDelay) {
      break;
    }
    const lineChars = Math.min(line.text.length, remaining - lineDelay);
    if (lineChars > 0) {
      rendered.push({
        chars: line.text.slice(0, lineChars),
        color: line.color ?? "#fafafa",
      });
    }
    remaining -= lineDelay + line.text.length + 1;
    if (lineChars < line.text.length) {
      break;
    }
  }

  const isDone = typedSoFar >= totalChars;
  const showCursor = cursor && (!isDone || Math.floor(frame / 15) % 2 === 0);

  return (
    <div
      style={{
        fontFamily,
        fontSize,
        lineHeight: `${lineHeight}em`,
        whiteSpace: "pre-wrap",
      }}
    >
      {rendered.map((line, i) => (
        <div key={i} style={{ color: line.color }}>
          {line.chars}
          {i === rendered.length - 1 && showCursor && (
            <span style={{ color: cursorColor }}>▊</span>
          )}
        </div>
      ))}
      {rendered.length === 0 && showCursor && (
        <span style={{ color: cursorColor }}>▊</span>
      )}
    </div>
  );
};

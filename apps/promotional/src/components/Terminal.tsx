import React from "react";
import { AbsoluteFill } from "remotion";

const termBg = "#1a1a1a";
const termBorder = "#2a2a2a";
const dotRed = "#ff5f57";
const dotYellow = "#febc2e";
const dotGreen = "#28c840";

const containerStyle: React.CSSProperties = {
  backgroundColor: termBg,
  border: `1px solid ${termBorder}`,
  borderRadius: 12,
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
};

const topBarStyle: React.CSSProperties = {
  height: 36,
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  paddingLeft: 12,
  gap: 8,
  backgroundColor: "#151515",
  borderBottom: `1px solid ${termBorder}`,
};

const dotBase: React.CSSProperties = {
  width: 12,
  height: 12,
  borderRadius: "50%",
};

const contentStyle: React.CSSProperties = {
  padding: "20px 24px",
  fontSize: 15,
  lineHeight: 1.7,
  fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
  color: "#e0e0e0",
  whiteSpace: "pre-wrap",
  overflow: "hidden",
};

export const Terminal: React.FC<{
  children: React.ReactNode;
  style?: React.CSSProperties;
}> = ({ children, style }) => {
  return (
    <div style={{ ...containerStyle, ...style }}>
      <div style={topBarStyle}>
        <div style={{ ...dotBase, backgroundColor: dotRed }} />
        <div style={{ ...dotBase, backgroundColor: dotYellow }} />
        <div style={{ ...dotBase, backgroundColor: dotGreen }} />
      </div>
      <div style={contentStyle}>{children}</div>
    </div>
  );
};

export const termPrompt = "$ ";
export const termPromptStyle: React.CSSProperties = {
  color: "#a78bfa",
};
export const termTextStyle: React.CSSProperties = {
  color: "#e0e0e0",
};
export const termSuccessStyle: React.CSSProperties = {
  color: "#4ade80",
};
export const termErrorStyle: React.CSSProperties = {
  color: "#f87171",
};
export const termDimStyle: React.CSSProperties = {
  color: "#71717a",
};

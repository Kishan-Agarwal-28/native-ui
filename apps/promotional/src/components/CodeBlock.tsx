import React from "react";
import { colors } from "../utils/colors";

interface CodeBlockProps {
  code: string;
  style?: React.CSSProperties;
  highlightLine?: number;
  highlightColor?: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  style,
  highlightLine,
  highlightColor = "rgba(167,139,250,0.15)",
}) => {
  const lines = code.split("\n");

  return (
    <pre
      style={{
        backgroundColor: colors.surface,
        border: `1px solid ${colors.border}`,
        borderRadius: 10,
        padding: "20px 24px",
        fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
        fontSize: 13,
        lineHeight: 1.7,
        overflow: "hidden",
        margin: 0,
        ...style,
      }}
    >
      <code>
        {lines.map((line, i) => {
          const highlighted =
            i + 1 === highlightLine
              ? {
                  backgroundColor: highlightColor,
                  display: "block",
                  margin: "0 -24px",
                  padding: "0 24px",
                  borderRadius: 2,
                }
              : {};

          return (
            <div key={i} style={highlighted}>
              {syntaxHighlight(line)}
            </div>
          );
        })}
      </code>
    </pre>
  );
};

function syntaxHighlight(line: string): React.ReactNode {
  const tokens: React.ReactNode[] = [];
  let remaining = line;

  while (remaining.length > 0) {
    const tagMatch = remaining.match(/^(&lt;\/?[\w-]+)/);
    if (tagMatch) {
      tokens.push(
        <span key={tokens.length} style={{ color: "#a78bfa" }}>
          {tagMatch[1]}
        </span>,
      );
      remaining = remaining.slice(tagMatch[1].length);
      continue;
    }

    const stringMatch = remaining.match(/^("(?:[^"\\]|\\.)*")/);
    if (stringMatch) {
      tokens.push(
        <span key={tokens.length} style={{ color: "#4ade80" }}>
          {stringMatch[1]}
        </span>,
      );
      remaining = remaining.slice(stringMatch[1].length);
      continue;
    }

    const propMatch = remaining.match(/^(\w[\w-]*)(?==)/);
    if (propMatch) {
      tokens.push(
        <span key={tokens.length} style={{ color: "#fbbf24" }}>
          {propMatch[1]}
        </span>,
      );
      remaining = remaining.slice(propMatch[1].length);
      continue;
    }

    const importMatch = remaining.match(
      /^(import|export|from|return|const|let|var|function|default|=>)/,
    );
    if (importMatch) {
      tokens.push(
        <span key={tokens.length} style={{ color: "#7c3aed" }}>
          {importMatch[1]}
        </span>,
      );
      remaining = remaining.slice(importMatch[1].length);
      continue;
    }

    tokens.push(remaining[0]);
    remaining = remaining.slice(1);
  }

  return tokens;
}

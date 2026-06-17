import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  interpolate,
  useVideoConfig,
} from "remotion";
import { colors } from "../utils/colors";
import { CodeBlock } from "../components/CodeBlock";
import { PhoneMockup } from "../components/PhoneMockup";

const EXAMPLE_DURATION = 170;
const TRANSITION_DURATION = 18;

const buttonCode = `import { Button } from "@/components/ui/button";

export default function Demo() {
  return (
    <View>
      <Button variant="default" title="Primary" />
      <Button variant="secondary" title="Secondary" />
      <Button variant="destructive" title="Delete" />
      <Button variant="ghost" title="Cancel" />
    </View>
  );
}`;

const inputCode = `import Input from "@/components/ui/input";

export default function Demo() {
  return (
    <View>
      <Input
        label="Email"
        placeholder="you@example.com"
        error="Invalid email address"
      />
      <Input
        label="Password"
        placeholder="Enter password"
        secureTextEntry
      />
    </View>
  );
}`;

const cardCode = `import { Card, CardHeader, CardTitle,
  CardDescription, CardContent } from "@/components/ui/card";
import { Avatar, Badge, Button } from "@/components/ui";

export default function Demo() {
  return (
    <Card>
      <CardHeader>
        <Avatar source={{ uri: avatarUrl }} />
        <Badge variant="outline">Pro</Badge>
      </CardHeader>
      <CardTitle>Sarah Chen</CardTitle>
      <CardDescription>
        Senior Engineer at Acme Corp
      </CardDescription>
      <CardContent>
        <Button title="View Profile" />
      </CardContent>
    </Card>
  );
}`;

const examples = [
  { code: buttonCode, label: "Button Variants" },
  { code: inputCode, label: "Input States" },
  { code: cardCode, label: "Card Compositions" },
];

const btnColors = [colors.text, colors.text, colors.text, colors.text];

function ButtonMockup({
  variant,
  label,
  style,
}: {
  variant: "default" | "secondary" | "destructive" | "ghost";
  label: string;
  style?: React.CSSProperties;
}) {
  const bgMap = {
    default: colors.text,
    secondary: colors.surface,
    destructive: colors.red,
    ghost: "transparent",
  };
  const textMap = {
    default: colors.bg,
    secondary: colors.text,
    destructive: colors.bg,
    ghost: colors.text,
  };
  const borderMap = {
    default: "none",
    secondary: `1px solid ${colors.border}`,
    destructive: "none",
    ghost: `1px solid transparent`,
  };
  return (
    <div
      style={{
        backgroundColor: bgMap[variant],
        borderRadius: 10,
        padding: "10px 0",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        border: borderMap[variant],
        ...style,
      }}
    >
      <span
        style={{
          fontFamily: "'Inter', system-ui, sans-serif",
          fontSize: 13,
          fontWeight: 600,
          color: textMap[variant],
        }}
      >
        {label}
      </span>
    </div>
  );
}

function InputMockup({
  label,
  placeholder,
  error,
}: {
  label: string;
  placeholder?: string;
  error?: string;
}) {
  return (
    <div style={{ width: "100%" }}>
      <span
        style={{
          fontFamily: "'Inter', system-ui, sans-serif",
          fontSize: 10,
          fontWeight: 600,
          color: colors.textSecondary,
          textTransform: "uppercase",
          letterSpacing: 0.5,
          marginBottom: 4,
          display: "block",
        }}
      >
        {label}
      </span>
      <div
        style={{
          border: error
            ? `1.5px solid ${colors.red}`
            : `1px solid ${colors.border}`,
          borderRadius: 8,
          padding: "10px 12px",
          backgroundColor: colors.surface,
        }}
      >
        <span
          style={{
            fontFamily: "'Inter', system-ui, sans-serif",
            fontSize: 13,
            color: error ? colors.text : colors.textSecondary,
          }}
        >
          {placeholder || ""}
        </span>
      </div>
      {error ? (
        <span
          style={{
            fontFamily: "'Inter', system-ui, sans-serif",
            fontSize: 10,
            color: colors.red,
            marginTop: 4,
            display: "block",
          }}
        >
          {error}
        </span>
      ) : null}
    </div>
  );
}

const Scene5Components: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const totalExampleSpan = EXAMPLE_DURATION + TRANSITION_DURATION;
  const currentExample = Math.min(
    Math.floor((frame - 10) / totalExampleSpan),
    examples.length - 1,
  );
  const localFrame = (frame - 10) % totalExampleSpan;

  const ex = examples[currentExample];
  if (!ex) return null;

  const slideOffset = interpolate(
    localFrame,
    [EXAMPLE_DURATION, EXAMPLE_DURATION + TRANSITION_DURATION],
    [0, -30],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );
  const opacity =
    localFrame < EXAMPLE_DURATION
      ? interpolate(localFrame, [0, 15], [0, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        })
      : interpolate(
          localFrame,
          [EXAMPLE_DURATION, EXAMPLE_DURATION + TRANSITION_DURATION],
          [1, 0],
          { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
        );

  const pageIndicator = (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: 8,
        justifyContent: "center",
        marginTop: 16,
      }}
    >
      {examples.map((_, i) => (
        <div
          key={i}
          style={{
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor:
              i === currentExample ? colors.accent : colors.border,
            transition: "none",
          }}
        />
      ))}
    </div>
  );

  return (
    <AbsoluteFill style={{ backgroundColor: colors.bg }}>
      <div
        style={{
          position: "absolute",
          top: 40,
          left: 0,
          right: 0,
          textAlign: "center",
        }}
      >
        <span
          style={{
            fontFamily: "'Inter', system-ui, sans-serif",
            fontSize: 14,
            fontWeight: 600,
            color: colors.accent,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
          }}
        >
          {ex.label}
        </span>
      </div>
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 40,
          padding: "60px 80px",
          transform: `translateY(${slideOffset}px)`,
          opacity,
        }}
      >
        <div style={{ flex: 1, minWidth: 0 }}>
          <CodeBlock code={ex.code} style={{ fontSize: 12, maxHeight: 460 }} />
        </div>

        <div style={{ flexShrink: 0 }}>
          <PhoneMockup>
            {currentExample === 0 && (
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <ButtonMockup variant="default" label="Primary" />
                <ButtonMockup variant="secondary" label="Secondary" />
                <ButtonMockup variant="destructive" label="Delete" />
                <ButtonMockup variant="ghost" label="Cancel" />
              </div>
            )}
            {currentExample === 1 && (
              <div
                style={{ display: "flex", flexDirection: "column", gap: 16 }}
              >
                <InputMockup
                  label="Email"
                  placeholder="you@example.com"
                  error="Invalid email address"
                />
                <InputMockup label="Password" placeholder="Enter password" />
              </div>
            )}
            {currentExample === 2 && (
              <div
                style={{
                  backgroundColor: colors.surface,
                  borderRadius: 14,
                  border: `1px solid ${colors.border}`,
                  padding: 16,
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 20,
                      backgroundColor: colors.accent,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <span style={{ fontSize: 18 }}>👤</span>
                  </div>
                  <div
                    style={{
                      backgroundColor: "transparent",
                      border: `1px solid ${colors.border}`,
                      borderRadius: 9999,
                      padding: "4px 10px",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Inter', system-ui, sans-serif",
                        fontSize: 10,
                        color: colors.textSecondary,
                        fontWeight: 500,
                      }}
                    >
                      Pro
                    </span>
                  </div>
                </div>
                <span
                  style={{
                    fontFamily: "'Inter', system-ui, sans-serif",
                    fontSize: 15,
                    fontWeight: 700,
                    color: colors.text,
                  }}
                >
                  Sarah Chen
                </span>
                <span
                  style={{
                    fontFamily: "'Inter', system-ui, sans-serif",
                    fontSize: 11,
                    color: colors.textSecondary,
                  }}
                >
                  Senior Engineer at Acme Corp
                </span>
                <ButtonMockup
                  variant="default"
                  label="View Profile"
                  style={{ marginTop: 4 }}
                />
              </div>
            )}
          </PhoneMockup>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 32,
          left: 0,
          right: 0,
          opacity,
        }}
      >
        {pageIndicator}
      </div>
    </AbsoluteFill>
  );
};

export default Scene5Components;

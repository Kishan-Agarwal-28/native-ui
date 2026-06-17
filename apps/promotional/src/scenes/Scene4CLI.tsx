import React from "react";
import {
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
  AbsoluteFill,
} from "remotion";
import { C } from "../utils/colors";
import { Terminal } from "../components/Terminal";
import { TypedText } from "../components/TypedText";
import { CRTText } from "../components/CRTText";
import { Glow } from "../components/Glow";
import { xorshift32 } from "../utils/seed";

const FILE_PATHS = [
  "src/components/Button.tsx",
  "src/components/Card.tsx",
  "src/components/Input.tsx",
  "src/styles/native-ui.css",
  "src/hooks/useTheme.ts",
  "src/utils/colors.ts",
  "package.json",
  "tsconfig.json",
  "src/app/layout.tsx",
  "src/app/page.tsx",
  "public/favicon.ico",
  "next.config.js",
  "src/components/Badge.tsx",
  "src/components/Avatar.tsx",
  "src/components/Switch.tsx",
  "src/components/Select.tsx",
  "src/lib/utils.ts",
  "src/types/index.ts",
  "README.md",
  ".gitignore",
];

interface DriftPath {
  text: string;
  x: number;
  startY: number;
  speed: number;
  opacity: number;
  size: number;
}

function createDriftPaths(
  seed: number,
  width: number,
  height: number,
): DriftPath[] {
  const rand = xorshift32(seed);
  const count = 40;
  const paths: DriftPath[] = [];
  for (let i = 0; i < count; i++) {
    const text = FILE_PATHS[Math.floor(rand() * FILE_PATHS.length)];
    paths.push({
      text,
      x: rand() * width,
      startY: rand() * height + height,
      speed: 0.3 + rand() * 0.5,
      opacity: 0.03 + rand() * 0.04,
      size: 11 + rand() * 4,
    });
  }
  return paths;
}

const DriftingPaths: React.FC = () => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();
  const paths = React.useMemo(
    () => createDriftPaths(12345, width, height),
    [width, height],
  );

  return (
    <AbsoluteFill style={{ overflow: "hidden", zIndex: 0 }}>
      {paths.map((p, i) => {
        const y = (p.startY - frame * p.speed) % (height * 2);
        const displayY = y > height ? y - height * 2 : y;
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: p.x,
              top: displayY,
              fontSize: p.size,
              color: C.text,
              opacity: p.opacity,
              fontFamily: '"JetBrains Mono", monospace',
              whiteSpace: "nowrap",
              pointerEvents: "none",
            }}
          >
            {p.text}
          </div>
        );
      })}
    </AbsoluteFill>
  );
};

const ProgressBar: React.FC<{
  progress: number;
  color?: string;
}> = ({ progress, color = C.accent }) => {
  const clamped = Math.max(0, Math.min(1, progress));
  return (
    <div
      style={{
        width: 200,
        height: 4,
        backgroundColor: "rgba(255,255,255,0.05)",
        borderRadius: 2,
        overflow: "hidden",
        marginTop: 4,
      }}
    >
      <div
        style={{
          width: `${clamped * 100}%`,
          height: "100%",
          backgroundColor: color,
          borderRadius: 2,
          transition: "none",
        }}
      />
    </div>
  );
};

const Scene4CLI: React.FC = () => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();
  const f = frame;

  // Terminal entrance
  const terminalScale = spring({
    frame: f,
    fps: 60,
    config: { damping: 15, stiffness: 100, mass: 1 },
  });

  // Content fade in after terminal appears
  const contentOpacity = interpolate(f, [30, 50], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Scan line sweep
  const scanLineProgress = (f % 180) / 180;
  const scanLineY = scanLineProgress * 440;

  // Install progress
  const installProgress = interpolate(f, [120, 200], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const addProgress = interpolate(f, [220, 350], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const iconAddScale = spring({
    frame: f - 360,
    fps: 60,
    config: { damping: 10, stiffness: 200, mass: 1 },
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: C.bg,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: '"Inter", sans-serif',
      }}
    >
      {/* Background drifting paths */}
      <DriftingPaths />

      {/* Ambient glow behind terminal */}
      <Glow
        x={width / 2}
        y={height / 2}
        color={C.accent}
        radius={350}
        opacity={0.12}
        animated
      />

      {/* Terminal container */}
      <div
        style={{
          transform: `scale(${0.85 + terminalScale * 0.15})`,
          opacity: terminalScale,
          zIndex: 10,
        }}
      >
        <Terminal width={860} height={480} scanLine={false}>
          <div style={{ opacity: contentOpacity }}>
            {/* Command 1: init */}
            <div style={{ marginBottom: 16 }}>
              <TypedText
                lines={[
                  {
                    text: "$ npx nativeui-cli init",
                    color: "#fafafa",
                    delay: 0,
                  },
                  {
                    text: "✓ Creating project structure...",
                    color: "#a78bfa",
                    delay: 30,
                  },
                  {
                    text: "✓ Installing dependencies...",
                    color: "#a78bfa",
                    delay: 60,
                  },
                  { text: "✓ Ready in 1.2s", color: "#4ade80", delay: 90 },
                ]}
                startFrame={40}
                speed={2.5}
                fontSize={15}
              />
              <div style={{ marginTop: 4 }}>
                <ProgressBar progress={installProgress} />
              </div>
            </div>

            {/* Command 2: add components */}
            <div style={{ marginBottom: 16 }}>
              <TypedText
                lines={[
                  {
                    text: "$ npx nativeui-cli add button card input",
                    color: "#fafafa",
                    delay: 0,
                  },
                  { text: "✓ Button", color: "#4ade80", delay: 30 },
                  { text: "✓ Card", color: "#4ade80", delay: 45 },
                  { text: "✓ Input", color: "#4ade80", delay: 60 },
                  {
                    text: "3 components installed",
                    color: "#6ee7b7",
                    delay: 80,
                  },
                ]}
                startFrame={210}
                speed={2.5}
                fontSize={15}
              />
              <div style={{ marginTop: 4 }}>
                <ProgressBar progress={addProgress} />
              </div>
            </div>

            {/* Success banner */}
            <div
              style={{
                marginTop: 24,
                padding: "12px 16px",
                backgroundColor: "rgba(74, 222, 128, 0.08)",
                border: "1px solid rgba(74, 222, 128, 0.2)",
                borderRadius: 8,
                opacity: interpolate(f, [360, 380], [0, 1], {
                  extrapolateLeft: "clamp",
                  extrapolateRight: "clamp",
                }),
                transform: `scale(${iconAddScale})`,
                transformOrigin: "left center",
              }}
            >
              <div
                style={{
                  color: "#4ade80",
                  fontSize: 14,
                  fontWeight: 500,
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <span style={{ fontSize: 16 }}>✓</span>
                <span>Your components are ready to use</span>
              </div>
            </div>
          </div>

          {/* Scan line inside terminal */}
          <div
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              top: scanLineY,
              height: 2,
              background: `linear-gradient(90deg, transparent, ${C.accent}60, transparent)`,
              pointerEvents: "none",
              opacity: 0.6,
            }}
          />
        </Terminal>
      </div>

      {/* Title label */}
      <div
        style={{
          position: "absolute",
          bottom: 60,
          left: "50%",
          transform: "translateX(-50%)",
          opacity: interpolate(f, [380, 400], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        <CRTText
          text="NATIVEUI CLI"
          startFrame={390}
          charsPerFrame={1.5}
          color={C.accent}
          size={14}
          weight={600}
          ghost={false}
          style={{ letterSpacing: 4, textAlign: "center" }}
        />
      </div>
    </AbsoluteFill>
  );
};

export default Scene4CLI;

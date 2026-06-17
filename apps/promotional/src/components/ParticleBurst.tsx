import React from "react";
import { useCurrentFrame } from "remotion";
import { xorshift32 } from "../utils/seed";
import { C } from "../utils/colors";

interface ParticleBurstProps {
  x: number;
  y: number;
  count?: number;
  triggerFrame: number;
  color?: string;
  spread?: number;
  duration?: number;
}

export const ParticleBurst: React.FC<ParticleBurstProps> = ({
  x,
  y,
  count = 12,
  triggerFrame,
  color = C.accent,
  spread = 100,
  duration = 50,
}) => {
  const frame = useCurrentFrame();
  const localFrame = Math.max(0, frame - triggerFrame);

  const particles = Array.from({ length: count }, (_, i) => {
    const rand = xorshift32(i + 42);
    const angle = rand() * Math.PI * 2;
    const speed = 2 + rand() * 3;
    const dist = localFrame * speed;
    const maxDist = spread + rand() * spread;
    const progress = Math.min(dist / maxDist, 1);
    const returnProgress =
      localFrame > 30 ? Math.min((localFrame - 30) / 20, 1) : 0;
    const currentDist = dist * (1 - returnProgress * 0.5);

    let opacity: number;
    if (localFrame < 5) {
      opacity = localFrame / 5;
    } else if (returnProgress > 0) {
      opacity = Math.max(0, 1 - returnProgress);
    } else {
      opacity = 1;
    }

    return {
      px: x + Math.cos(angle) * currentDist,
      py: y + Math.sin(angle) * currentDist,
      opacity,
      size: 1 + rand() * 1.5,
    };
  });

  return (
    <div style={{ position: "absolute", pointerEvents: "none" }}>
      {particles.map((p, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: p.px,
            top: p.py,
            width: p.size,
            height: p.size,
            borderRadius: "50%",
            backgroundColor: color,
            opacity: p.opacity,
          }}
        />
      ))}
    </div>
  );
};

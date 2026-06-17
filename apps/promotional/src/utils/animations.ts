import { spring, interpolate } from "remotion";

export type SpringConfig = {
  damping: number;
  stiffness: number;
  mass?: number;
};

export const defaultSpring: SpringConfig = {
  damping: 10,
  stiffness: 100,
};

export const slamSpring: SpringConfig = {
  damping: 8,
  stiffness: 200,
};

export const gentleSpring: SpringConfig = {
  damping: 14,
  stiffness: 80,
};

export function clampedSpring(
  frame: number,
  config: SpringConfig = defaultSpring,
  from = 0,
  to = 1,
): number {
  const f = Math.max(0, frame);
  const s = spring({
    frame: f,
    fps: 60,
    config: {
      damping: config.damping,
      stiffness: config.stiffness,
      mass: config.mass ?? 1,
    },
  });
  return from + (to - from) * s;
}

export function snapIn(
  frame: number,
  startFrame: number,
  duration: number,
): number {
  const f = Math.max(0, frame - startFrame);
  return f >= duration ? 1 : 0;
}

export function fadeIn(
  frame: number,
  startFrame: number,
  duration: number,
): number {
  const f = Math.max(0, frame - startFrame);
  return interpolate(f, [0, duration], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
}

export function slideInFromRight(
  frame: number,
  startFrame: number,
  distance: number,
  config?: SpringConfig,
): number {
  const f = Math.max(0, frame - startFrame);
  const s = spring({
    frame: f,
    fps: 60,
    config: {
      damping: config?.damping ?? defaultSpring.damping,
      stiffness: config?.stiffness ?? defaultSpring.stiffness,
      mass: config?.mass ?? 1,
    },
  });
  return interpolate(s, [0, 1], [distance, 0]);
}

export function slideInFromLeft(
  frame: number,
  startFrame: number,
  distance: number,
  config?: SpringConfig,
): number {
  return -slideInFromRight(frame, startFrame, distance, config);
}

export function slideIn(
  frame: number,
  startFrame: number,
  duration: number,
  fromX: number,
): number {
  const f = Math.max(0, frame - startFrame);
  return interpolate(f, [0, duration], [fromX, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
}

export function shatterUp(
  frame: number,
  startFrame: number,
  stagger: number,
  index: number,
  distance: number,
): { translateY: number; opacity: number } {
  const f = Math.max(0, frame - startFrame - index * stagger);
  const progress = interpolate(f, [0, 20], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  return {
    translateY: -distance * progress,
    opacity: interpolate(progress, [0, 0.5, 1], [1, 0.5, 0], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }),
  };
}

import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

export function useFadeIn(startFrame: number, duration = 20) {
  const frame = useCurrentFrame();
  return interpolate(frame, [startFrame, startFrame + duration], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
}

export function useSlideUp(startFrame: number, distance = 40) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const progress = spring({
    fps,
    frame: frame - startFrame,
    config: { damping: 14, stiffness: 120, mass: 0.8 },
  });
  return interpolate(progress, [0, 1], [distance, 0]);
}

export function useScaleIn(startFrame: number) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const s = spring({
    fps,
    frame: frame - startFrame,
    config: { damping: 12, stiffness: 180, mass: 0.6 },
    from: 0.85,
    to: 1,
  });
  return s;
}

export function useStaggered(index: number, startFrame: number, stagger = 8) {
  return startFrame + index * stagger;
}

export function useSpringValue(
  startFrame: number,
  configOverride?: {
    damping?: number;
    stiffness?: number;
    mass?: number;
  },
) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  return spring({
    fps,
    frame: frame - startFrame,
    config: {
      damping: configOverride?.damping ?? 14,
      stiffness: configOverride?.stiffness ?? 120,
      mass: configOverride?.mass ?? 0.8,
    },
  });
}

export function useSlideInLeft(startFrame: number, distance = 60) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const progress = spring({
    fps,
    frame: frame - startFrame,
    config: { damping: 16, stiffness: 150, mass: 0.7 },
  });
  return interpolate(progress, [0, 1], [-distance, 0]);
}

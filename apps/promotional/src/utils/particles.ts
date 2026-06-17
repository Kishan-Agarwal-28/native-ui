import { xorshift32 } from "./seed";

export interface Particle {
  x: number;
  y: number;
  size: number;
  opacity: number;
  phase: number;
  speed: number;
  amplitude: number;
}

export function createParticles(
  count: number,
  width: number,
  height: number,
): Particle[] {
  return Array.from({ length: count }, (_, i) => {
    const rand = xorshift32(i + 1);
    return {
      x: rand() * width,
      y: rand() * height,
      size: 1 + rand() * 1,
      opacity: 0.3 + rand() * 0.3,
      phase: rand() * Math.PI * 2,
      speed: 0.002 + rand() * 0.003,
      amplitude: 10 + rand() * 20,
    };
  });
}

export function updateParticle(
  particle: Particle,
  frame: number,
): { x: number; y: number } {
  const x =
    particle.x +
    Math.sin(frame * particle.speed + particle.phase) * particle.amplitude;
  const y =
    particle.y +
    Math.cos(frame * particle.speed * 0.7 + particle.phase) *
      particle.amplitude *
      0.5;
  return { x, y };
}

export function burstParticles(
  count: number,
  centerX: number,
  centerY: number,
  frame: number,
  triggerFrame: number,
  spread: number = 100,
): Array<{ x: number; y: number; opacity: number; size: number }> {
  const localFrame = Math.max(0, frame - triggerFrame);
  return Array.from({ length: count }, (_, i) => {
    const rand = xorshift32(i + 42);
    const angle = rand() * Math.PI * 2;
    const speed = 2 + rand() * 3;
    const distance = localFrame * speed;
    const maxDistance = spread + rand() * spread;
    const progress = Math.min(distance / maxDistance, 1);
    const returnProgress =
      localFrame > 30 ? Math.min((localFrame - 30) / 20, 1) : 0;
    const currentDist = distance * (1 - returnProgress * 0.5);
    return {
      x: centerX + Math.cos(angle) * currentDist,
      y: centerY + Math.sin(angle) * currentDist,
      opacity: interpolateOpacity(localFrame, returnProgress),
      size: 1 + rand() * 1.5,
    };
  });
}

function interpolateOpacity(
  localFrame: number,
  returnProgress: number,
): number {
  if (localFrame < 5) {
    return localFrame / 5;
  }
  if (returnProgress > 0) {
    return Math.max(0, 1 - returnProgress);
  }
  return 1;
}

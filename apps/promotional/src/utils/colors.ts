export const colors = {
  bg: "#09090b",
  surface: "#18181b",
  border: "#27272a",
  muted: "#71717a",
  text: "#fafafa",
  textSecondary: "#a1a1aa",
  accent: "#a78bfa",
  accentDark: "#7c3aed",
  green: "#4ade80",
  red: "#f87171",
  yellow: "#fbbf24",
};

export function interpolateHexColor(
  frame: number,
  startFrame: number,
  duration: number,
  colorA: string,
  colorB: string,
): string {
  const progress = Math.max(0, Math.min(1, (frame - startFrame) / duration));
  const a = hexToRgb(colorA);
  const b = hexToRgb(colorB);
  const r = Math.round(a.r + (b.r - a.r) * progress);
  const g = Math.round(a.g + (b.g - a.g) * progress);
  const bl = Math.round(a.b + (b.b - a.b) * progress);
  return `rgb(${r},${g},${bl})`;
}

function hexToRgb(hex: string) {
  const h = hex.replace("#", "");
  return {
    r: parseInt(h.substring(0, 2), 16),
    g: parseInt(h.substring(2, 4), 16),
    b: parseInt(h.substring(4, 6), 16),
  };
}

export function interpolateColorArray(
  frame: number,
  startFrame: number,
  durations: number[],
  colorsArr: string[],
): string {
  let current = startFrame;
  for (let i = 0; i < durations.length; i++) {
    const end = current + durations[i];
    if (frame <= end) {
      return interpolateHexColor(
        frame,
        current,
        durations[i],
        colorsArr[i],
        colorsArr[i + 1],
      );
    }
    current = end;
  }
  return colorsArr[colorsArr.length - 1];
}

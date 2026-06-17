export function hexToRgb(hex: string): [number, number, number] {
  const cleaned = hex.replace("#", "");
  const bigint = parseInt(cleaned, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return [r, g, b];
}

export function rgbToHex(r: number, g: number, b: number): string {
  const toHex = (n: number) => {
    const hex = Math.round(Math.max(0, Math.min(255, n))).toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  };
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

export function lerpColor(a: string, colorB: string, t: number): string {
  const tClamped = Math.max(0, Math.min(1, t));
  const [ar, ag, ab] = hexToRgb(a);
  const [br, bg, bb] = hexToRgb(colorB);
  const r = ar + (br - ar) * tClamped;
  const g = ag + (bg - ag) * tClamped;
  const bl = ab + (bb - ab) * tClamped;
  return rgbToHex(r, g, bl);
}

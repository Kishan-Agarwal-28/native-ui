"use client";

import Link from "next/link";
import { useReducedMotion } from "motion/react";

const DEFAULT_COMPONENTS = [
  "accordion",
  "alert",
  "alert-dialog",
  "avatar",
  "badge",
  "button",
  "button-group",
  "calendar",
  "card",
  "carousel",
  "checkbox",
  "date-picker",
  "dialog",
  "empty",
  "field",
  "input",
  "input-otp",
  "label",
  "progress",
  "radio-group",
  "select",
  "separator",
  "skeleton",
  "sonner",
  "spinner",
  "switch",
  "table",
  "textarea",
  "typography",
];

interface ComponentMarqueeProps {
  items?: string[];
  className?: string;
}

export function ComponentMarquee({
  items = DEFAULT_COMPONENTS,
  className,
}: ComponentMarqueeProps) {
  const reduce = useReducedMotion();

  return (
    <div
      className={`relative w-full max-w-full overflow-hidden ${className ?? ""}`}
    >
      <style>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
      {/* Edge gradient fades for seamless visual transition */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-white to-transparent sm:w-16 dark:from-[#09090b]" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-white to-transparent sm:w-16 dark:from-[#09090b]" />

      <div
        className="flex w-max hover:[animation-play-state:paused]"
        style={{
          animation: reduce ? "none" : "marquee 40s linear infinite",
        }}
      >
        <div className="flex shrink-0 items-center gap-2.5 pr-2.5 sm:gap-3 sm:pr-3">
          {items.map((name) => (
            <Link
              key={name}
              href={`/docs/components/${name}`}
              className="whitespace-nowrap rounded-lg border border-zinc-200 px-2.5 py-1 text-[12px] text-zinc-500 transition-colors hover:border-zinc-300 hover:text-zinc-900 sm:px-3 sm:py-1.5 sm:text-[13px] dark:border-white/[0.06] dark:text-zinc-400 dark:hover:border-white/[0.12] dark:hover:text-white"
            >
              {name}
            </Link>
          ))}
        </div>
        <div
          className="flex shrink-0 items-center gap-2.5 pr-2.5 sm:gap-3 sm:pr-3"
          aria-hidden="true"
        >
          {items.map((name, index) => (
            <Link
              key={`${name}-dup-${index}`}
              href={`/docs/components/${name}`}
              tabIndex={-1}
              className="whitespace-nowrap rounded-lg border border-zinc-200 px-2.5 py-1 text-[12px] text-zinc-500 transition-colors hover:border-zinc-300 hover:text-zinc-900 sm:px-3 sm:py-1.5 sm:text-[13px] dark:border-white/[0.06] dark:text-zinc-400 dark:hover:border-white/[0.12] dark:hover:text-white"
            >
              {name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

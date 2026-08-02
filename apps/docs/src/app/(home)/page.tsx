import Link from "next/link";

const components = [
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

export default function HomePage() {
  return (
    <>
      <main className="relative z-10 flex flex-1 flex-col items-center">
        {/* ─── Hero ─── */}
        <section className="w-full max-w-[1200px] px-6 pt-16 pb-20 md:px-10 md:pt-20">
          <div className="grid items-start gap-12 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
            <div>
              <h1 className="text-[2.25rem] font-semibold leading-[1.12] tracking-tight text-zinc-900 dark:text-zinc-100 md:text-[3.25rem]">
                React Native components
                <br />
                you actually own.
              </h1>
              <p className="mt-5 max-w-[48ch] text-[15px] leading-relaxed text-zinc-500 dark:text-zinc-400">
                Native UI copies production-ready, animated, accessible
                components straight into your project. No dependency lock-in, no
                black boxes.
              </p>
              <div className="mt-8 flex items-center gap-3">
                <Link
                  href="/docs/installation"
                  className="rounded-lg bg-zinc-900 px-5 py-2.5 text-[13px] font-medium text-white transition-all hover:bg-zinc-800 active:scale-[0.98] dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
                >
                  Get started
                </Link>
                <Link
                  href="/docs/components/accordion"
                  className="rounded-lg border border-zinc-200 px-5 py-2.5 text-[13px] font-medium text-zinc-700 transition-all hover:border-zinc-400 hover:text-zinc-900 active:scale-[0.98] dark:border-white/10 dark:text-zinc-300 dark:hover:border-white/25 dark:hover:text-white"
                >
                  Browse components
                </Link>
              </div>
            </div>

            {/* Code block — real, not a fake screenshot */}
            <div className="rounded-xl border border-zinc-200 bg-zinc-50 dark:border-white/[0.06] dark:bg-white/[0.02]">
              <div className="flex items-center gap-2 border-b border-zinc-200 px-4 py-3 dark:border-white/[0.06]">
                <span className="h-2.5 w-2.5 rounded-full bg-zinc-300 dark:bg-white/10" />
                <span className="h-2.5 w-2.5 rounded-full bg-zinc-300 dark:bg-white/10" />
                <span className="h-2.5 w-2.5 rounded-full bg-zinc-300 dark:bg-white/10" />
                <span className="ml-auto text-[11px] text-zinc-400 dark:text-zinc-500">
                  App.tsx
                </span>
              </div>
              <pre className="overflow-x-auto p-5 text-[13px] leading-[1.7] text-zinc-700 dark:text-zinc-300">
                <code>{`import Button from "@/components/ui/button";
import Typography from "@/components/ui/typography";
import Select from "@/components/ui/select";

export default function Screen() {
  return (
    <>
      <Typography variant="h3">
        Get started
      </Typography>
      <Select
        items={["Draft", "In review", "Live"]}
        placeholder="Choose status"
      />
      <Button title="Publish" />
    </>
  );
}`}</code>
              </pre>
            </div>
          </div>
        </section>

        {/* ─── Component count strip ─── */}
        <section className="w-full border-y border-zinc-100 py-10 dark:border-white/[0.06]">
          <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-center gap-x-4 gap-y-2 px-6 md:px-10">
            {components.map((name) => (
              <Link
                key={name}
                href={`/docs/components/${name}`}
                className="rounded-md px-2.5 py-1 text-[12px] text-zinc-400 transition-colors hover:bg-zinc-100 hover:text-zinc-700 dark:text-zinc-500 dark:hover:bg-white/[0.04] dark:hover:text-zinc-300"
              >
                {name}
              </Link>
            ))}
          </div>
        </section>

        {/* ─── Why section — asymmetric 2-col layout, NOT 3 equal cards ─── */}
        <section className="w-full max-w-[1200px] px-6 py-20 md:px-10 md:py-28">
          <h2 className="text-[1.75rem] font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 md:text-[2rem]">
            Why Native UI
          </h2>
          <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-zinc-200 bg-zinc-200 dark:border-white/[0.06] dark:bg-white/[0.06] md:grid-cols-2">
            {[
              {
                title: "You own the source",
                body: "Components are TypeScript files in your project. Modify animations, swap primitives, delete what you don't need. No wrappers, no abstractions you can't read.",
              },
              {
                title: "Built for React Native",
                body: "Designed for Expo and React Native from scratch. Reanimated for animations, platform-specific behaviors where they matter. Not a web port.",
              },
              {
                title: "Accessible defaults",
                body: "Screen reader labels, focus management, and sensible ARIA roles are built in. Accessibility isn't an afterthought you bolt on later.",
              },
              {
                title: "System-aware theming",
                body: "Light and dark mode respond to the device setting automatically. A single ThemeProvider wires color tokens across every component.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white p-8 dark:bg-[#09090b] md:p-10"
              >
                <h3 className="text-[15px] font-semibold text-zinc-900 dark:text-zinc-100">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-[45ch] text-[14px] leading-relaxed text-zinc-500 dark:text-zinc-400">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ─── Install block — the confidence moment ─── */}
        <section className="w-full border-y border-zinc-100 dark:border-white/[0.06]">
          <div className="mx-auto grid max-w-[1200px] gap-10 px-6 py-20 md:grid-cols-[1fr_1.2fr] md:items-center md:gap-16 md:px-10 md:py-28">
            <div>
              <h2 className="text-[1.75rem] font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 md:text-[2rem]">
                Two commands. Done.
              </h2>
              <p className="mt-4 max-w-[40ch] text-[14px] leading-relaxed text-zinc-500 dark:text-zinc-400">
                Initialize your project, add what you need. Each component lands
                as a file you can open, read, and change.
              </p>
              <Link
                href="/docs/installation"
                className="mt-6 inline-flex items-center gap-1.5 text-[13px] font-medium text-zinc-900 transition-colors hover:text-zinc-600 dark:text-zinc-100 dark:hover:text-zinc-400"
              >
                Full install guide
                <span
                  aria-hidden="true"
                  className="text-zinc-400 dark:text-zinc-500"
                >
                  →
                </span>
              </Link>
            </div>
            <div className="rounded-xl border border-zinc-200 bg-zinc-950 dark:border-white/[0.06]">
              <div className="flex items-center gap-2 border-b border-white/[0.06] px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
                <span className="ml-auto text-[11px] text-white/30">
                  Terminal
                </span>
              </div>
              <pre className="overflow-x-auto p-5 text-[13px] leading-[1.8]">
                <code>
                  <span className="text-zinc-500">$</span>{" "}
                  <span className="text-emerald-400">npx</span>{" "}
                  <span className="text-zinc-300">
                    nativeui-cli@latest init
                  </span>
                  {"\n"}
                  <span className="text-zinc-500">$</span>{" "}
                  <span className="text-emerald-400">npx</span>{" "}
                  <span className="text-zinc-300">
                    nativeui-cli@latest add button input select
                  </span>
                </code>
              </pre>
            </div>
          </div>
        </section>

        {/* ─── Capabilities — vertical list, not cards ─── */}
        <section className="w-full max-w-[1200px] px-6 py-20 md:px-10 md:py-28">
          <h2 className="text-[1.75rem] font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 md:text-[2rem]">
            What you get
          </h2>
          <div className="mt-10 divide-y divide-zinc-100 border-y border-zinc-100 dark:divide-white/[0.06] dark:border-white/[0.06]">
            {[
              {
                label: "CLI",
                detail:
                  "Add, remove, diff, and list components from the terminal. One command per action.",
              },
              {
                label: "30+ components",
                detail:
                  "Accordion, calendar, carousel, date picker, dialog, input OTP, select, sonner, and more.",
              },
              {
                label: "Reanimated animations",
                detail:
                  "Spring-driven, UI-thread animations. Gestures and transitions that feel native, not web-ported.",
              },
              {
                label: "TypeScript",
                detail:
                  "Every component is fully typed. Autocomplete, prop validation, and refactoring work out of the box.",
              },
              {
                label: "Theme tokens",
                detail:
                  "A single token layer for colors, spacing, and radii. Change your theme in one place, see it everywhere.",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="grid gap-2 py-6 md:grid-cols-[200px_1fr] md:items-baseline md:gap-8"
              >
                <span className="text-[13px] font-medium text-zinc-900 dark:text-zinc-100">
                  {item.label}
                </span>
                <span className="text-[14px] leading-relaxed text-zinc-500 dark:text-zinc-400">
                  {item.detail}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ─── Final CTA ─── */}
        <section className="w-full border-t border-zinc-100 dark:border-white/[0.06]">
          <div className="mx-auto flex max-w-[1200px] flex-col items-center px-6 py-20 text-center md:px-10 md:py-28">
            <h2 className="text-[1.75rem] font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 md:text-[2rem]">
              Start building
            </h2>
            <p className="mt-3 max-w-[38ch] text-[14px] text-zinc-500 dark:text-zinc-400">
              Read the docs, install a component, ship something real.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <Link
                href="/docs/installation"
                className="rounded-lg bg-zinc-900 px-5 py-2.5 text-[13px] font-medium text-white transition-all hover:bg-zinc-800 active:scale-[0.98] dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
              >
                Get started
              </Link>
              <Link
                href="https://github.com/Kishan-Agarwal-28/native-ui"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-zinc-200 px-5 py-2.5 text-[13px] font-medium text-zinc-700 transition-all hover:border-zinc-400 hover:text-zinc-900 active:scale-[0.98] dark:border-white/10 dark:text-zinc-300 dark:hover:border-white/25 dark:hover:text-white"
              >
                View on GitHub
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-zinc-100 px-6 py-6 dark:border-white/[0.06] md:px-10">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between">
          <span className="text-[12px] text-zinc-400 dark:text-zinc-500">
            Native UI — MIT License
          </span>
          <div className="flex items-center gap-5">
            <Link
              href="/docs"
              className="text-[12px] text-zinc-400 transition-colors hover:text-zinc-600 dark:text-zinc-500 dark:hover:text-zinc-300"
            >
              Docs
            </Link>
            <Link
              href="https://github.com/Kishan-Agarwal-28/native-ui"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[12px] text-zinc-400 transition-colors hover:text-zinc-600 dark:text-zinc-500 dark:hover:text-zinc-300"
            >
              GitHub
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}

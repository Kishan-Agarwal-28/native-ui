import Link from "next/link";
import { ScrollReveal } from "@/components/landing/scroll-reveal";
import { HeroEntry, HeroItem } from "@/components/landing/hero-entry";
import { ComponentMarquee } from "@/components/landing/component-marquee";

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
      <main className="relative z-10 flex flex-1 flex-col w-full max-w-full overflow-x-hidden">
        {/* ─── Hero: Asymmetric split ─── */}
        <section className="w-full max-w-full overflow-hidden">
          <div className="mx-auto grid max-w-[1400px] items-center gap-8 px-4 pt-12 pb-14 sm:gap-12 sm:px-6 sm:pt-16 sm:pb-20 md:grid-cols-[1.1fr_0.9fr] md:gap-16 md:px-10 md:pt-20 md:pb-24">
            <HeroEntry className="min-w-0">
              <HeroItem>
                <h1 className="text-3xl font-semibold leading-[1.12] tracking-tight text-zinc-900 sm:text-4xl md:text-5xl lg:text-[3.25rem] dark:text-zinc-100">
                  React Native components
                  <br />
                  <span className="text-zinc-400 dark:text-zinc-500">
                    you actually own.
                  </span>
                </h1>
              </HeroItem>
              <HeroItem>
                <p className="mt-4 max-w-[48ch] text-[14px] leading-relaxed text-zinc-500 sm:mt-5 sm:text-[15px] dark:text-zinc-400">
                  Copy production-ready, animated, accessible components
                  straight into your Expo project. No lock-in, no black boxes.
                </p>
              </HeroItem>
              <HeroItem>
                <div className="mt-6 flex flex-wrap items-center gap-3 sm:mt-8">
                  <Link
                    href="/docs/installation"
                    className="rounded-xl bg-zinc-900 px-5 py-2.5 text-[13px] font-medium text-white transition-all hover:bg-zinc-800 active:scale-[0.98] sm:px-6 sm:py-3 sm:text-[14px] dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
                  >
                    Get started
                  </Link>
                  <Link
                    href="/docs/components/accordion"
                    className="rounded-xl border border-zinc-200 px-5 py-2.5 text-[13px] font-medium text-zinc-700 transition-all hover:border-zinc-400 hover:text-zinc-900 active:scale-[0.98] sm:px-6 sm:py-3 sm:text-[14px] dark:border-white/10 dark:text-zinc-300 dark:hover:border-white/25 dark:hover:text-white"
                  >
                    Browse components
                  </Link>
                </div>
              </HeroItem>
            </HeroEntry>

            {/* Real code preview showing actual component usage */}
            <ScrollReveal delay={0.1} className="w-full min-w-0">
              <div className="w-full min-w-0 overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50 dark:border-white/[0.06] dark:bg-white/[0.02]">
                <div className="flex items-center gap-1.5 border-b border-zinc-200 px-3.5 py-2.5 sm:px-4 sm:py-3 dark:border-white/[0.06]">
                  <span className="h-2 w-2 rounded-full bg-zinc-300 sm:h-2.5 sm:w-2.5 dark:bg-white/10" />
                  <span className="h-2 w-2 rounded-full bg-zinc-300 sm:h-2.5 sm:w-2.5 dark:bg-white/10" />
                  <span className="h-2 w-2 rounded-full bg-zinc-300 sm:h-2.5 sm:w-2.5 dark:bg-white/10" />
                  <span className="ml-auto font-mono text-[10px] text-zinc-400 sm:text-[11px] dark:text-zinc-500">
                    App.tsx
                  </span>
                </div>
                <pre className="w-full max-w-full overflow-x-auto p-4 font-mono text-[11.5px] leading-[1.7] text-zinc-700 sm:p-5 sm:text-[13px] dark:text-zinc-300">
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
            </ScrollReveal>
          </div>
        </section>

        {/* ─── Component marquee strip ─── */}
        <section className="w-full max-w-full overflow-hidden border-y border-zinc-100 py-5 sm:py-6 dark:border-white/[0.06]">
          <ComponentMarquee items={components} />
        </section>

        {/* ─── Why section: Bento grid with responsive cards ─── */}
        <section className="w-full max-w-full overflow-hidden">
          <div className="mx-auto max-w-[1400px] px-4 py-14 sm:px-6 sm:py-20 md:px-10 md:py-28">
            <ScrollReveal>
              <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl md:text-4xl dark:text-zinc-100">
                Why Native UI
              </h2>
            </ScrollReveal>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-12 md:grid-cols-5">
              {/* Large cell with emerald tint for visual diversity */}
              <ScrollReveal
                delay={0.05}
                className="w-full min-w-0 rounded-2xl border border-emerald-200/60 bg-emerald-50/40 p-5 sm:p-7 md:col-span-3 md:p-8 dark:border-emerald-500/10 dark:bg-emerald-950/20"
              >
                <h3 className="text-base font-semibold text-zinc-900 sm:text-lg dark:text-zinc-100">
                  You own the source
                </h3>
                <p className="mt-2.5 max-w-[50ch] text-[13.5px] leading-relaxed text-zinc-600 sm:mt-3 sm:text-[14px] dark:text-zinc-400">
                  Components are TypeScript files in your project. Modify
                  animations, swap primitives, delete what you do not need. No
                  wrappers, no abstractions you cannot read.
                </p>
              </ScrollReveal>

              <ScrollReveal
                delay={0.1}
                className="w-full min-w-0 rounded-2xl border border-zinc-200 bg-zinc-50 p-5 sm:p-7 md:col-span-2 md:p-8 dark:border-white/[0.06] dark:bg-white/[0.02]"
              >
                <h3 className="text-base font-semibold text-zinc-900 sm:text-lg dark:text-zinc-100">
                  Built for React Native
                </h3>
                <p className="mt-2.5 max-w-[36ch] text-[13.5px] leading-relaxed text-zinc-500 sm:mt-3 sm:text-[14px] dark:text-zinc-400">
                  Designed for Expo and React Native from scratch. Reanimated
                  animations, platform behaviors where they matter.
                </p>
              </ScrollReveal>

              {/* Bottom row: reversed asymmetry */}
              <ScrollReveal
                delay={0.15}
                className="w-full min-w-0 rounded-2xl border border-zinc-200 bg-zinc-50 p-5 sm:p-7 md:col-span-2 md:p-8 dark:border-white/[0.06] dark:bg-white/[0.02]"
              >
                <h3 className="text-base font-semibold text-zinc-900 sm:text-lg dark:text-zinc-100">
                  Accessible defaults
                </h3>
                <p className="mt-2.5 max-w-[36ch] text-[13.5px] leading-relaxed text-zinc-500 sm:mt-3 sm:text-[14px] dark:text-zinc-400">
                  Screen reader labels, focus management, and ARIA roles built
                  in from the start.
                </p>
              </ScrollReveal>

              {/* Zinc-tinted large cell for rhythm */}
              <ScrollReveal
                delay={0.2}
                className="w-full min-w-0 rounded-2xl border border-zinc-300/60 bg-zinc-100/50 p-5 sm:p-7 md:col-span-3 md:p-8 dark:border-white/[0.08] dark:bg-white/[0.04]"
              >
                <h3 className="text-base font-semibold text-zinc-900 sm:text-lg dark:text-zinc-100">
                  System-aware theming
                </h3>
                <p className="mt-2.5 max-w-[50ch] text-[13.5px] leading-relaxed text-zinc-600 sm:mt-3 sm:text-[14px] dark:text-zinc-400">
                  Light and dark mode respond to the device setting
                  automatically. A single ThemeProvider wires color tokens
                  across every component.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ─── Install block: code left, text right ─── */}
        <section className="w-full max-w-full overflow-hidden border-y border-zinc-100 dark:border-white/[0.06]">
          <div className="mx-auto grid max-w-[1400px] gap-8 px-4 py-14 sm:gap-10 sm:px-6 sm:py-20 md:grid-cols-[1.2fr_1fr] md:items-center md:gap-16 md:px-10 md:py-28">
            <ScrollReveal className="w-full min-w-0">
              <div className="w-full min-w-0 overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-950 dark:border-white/[0.06]">
                <div className="flex items-center gap-1.5 border-b border-white/[0.06] px-3.5 py-2.5 sm:px-4 sm:py-3">
                  <span className="h-2 w-2 rounded-full bg-white/10 sm:h-2.5 sm:w-2.5" />
                  <span className="h-2 w-2 rounded-full bg-white/10 sm:h-2.5 sm:w-2.5" />
                  <span className="h-2 w-2 rounded-full bg-white/10 sm:h-2.5 sm:w-2.5" />
                  <span className="ml-auto font-mono text-[10px] text-white/30 sm:text-[11px]">
                    Terminal
                  </span>
                </div>
                <pre className="w-full max-w-full overflow-x-auto p-4 font-mono text-[11.5px] leading-[1.9] sm:p-6 sm:text-[13px]">
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
            </ScrollReveal>

            <ScrollReveal delay={0.1} className="w-full min-w-0">
              <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl md:text-4xl dark:text-zinc-100">
                Two commands.
                <br />
                Done.
              </h2>
              <p className="mt-3 max-w-[40ch] text-[13.5px] leading-relaxed text-zinc-500 sm:mt-4 sm:text-[14px] dark:text-zinc-400">
                Initialize your project, add what you need. Each component lands
                as a file you can open, read, and change.
              </p>
              <Link
                href="/docs/installation"
                className="mt-5 inline-flex items-center gap-1.5 text-[13.5px] font-medium text-zinc-900 transition-colors hover:text-zinc-600 sm:mt-6 sm:text-[14px] dark:text-zinc-100 dark:hover:text-zinc-400"
              >
                Full install guide
                <span
                  aria-hidden="true"
                  className="text-zinc-400 dark:text-zinc-500"
                >
                  &rarr;
                </span>
              </Link>
            </ScrollReveal>
          </div>
        </section>

        {/* ─── Capabilities: 2x3 card grid ─── */}
        <section className="w-full max-w-full overflow-hidden">
          <div className="mx-auto max-w-[1400px] px-4 py-14 sm:px-6 sm:py-20 md:px-10 md:py-28">
            <ScrollReveal>
              <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl md:text-4xl dark:text-zinc-100">
                What you get
              </h2>
            </ScrollReveal>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "CLI",
                  body: "Add, remove, diff, and list components from the terminal. One command per action.",
                },
                {
                  title: "30+ components",
                  body: "Accordion, calendar, carousel, date picker, dialog, input OTP, select, sonner, and more.",
                },
                {
                  title: "Reanimated animations",
                  body: "Spring-driven, UI-thread animations. Gestures and transitions that feel native.",
                },
                {
                  title: "TypeScript",
                  body: "Every component is fully typed. Autocomplete, prop validation, and refactoring work out of the box.",
                },
                {
                  title: "Theme tokens",
                  body: "A single token layer for colors, spacing, and radii. Change your theme in one place.",
                },
                {
                  title: "Open source",
                  body: "MIT licensed. Read the code, fork it, contribute back. The community drives the roadmap.",
                },
              ].map((item, i) => (
                <ScrollReveal
                  key={item.title}
                  delay={i * 0.05}
                  className="w-full min-w-0"
                >
                  <div className="group h-full rounded-2xl border border-zinc-200 bg-white p-5 transition-colors hover:border-zinc-300 sm:p-6 md:p-8 dark:border-white/[0.06] dark:bg-white/[0.02] dark:hover:border-white/[0.12]">
                    <h3 className="text-[14.5px] font-semibold text-zinc-900 sm:text-[15px] dark:text-zinc-100">
                      {item.title}
                    </h3>
                    <p className="mt-2 max-w-[36ch] text-[13.5px] leading-relaxed text-zinc-500 sm:mt-2.5 sm:text-[14px] dark:text-zinc-400">
                      {item.body}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Final CTA ─── */}
        <section className="w-full max-w-full overflow-hidden border-t border-zinc-100 dark:border-white/[0.06]">
          <div className="mx-auto max-w-[1400px] px-4 py-14 sm:px-6 sm:py-20 md:px-10 md:py-28">
            <ScrollReveal className="w-full min-w-0">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-[1.2fr_1fr] md:items-center">
                <div className="min-w-0">
                  <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl md:text-4xl dark:text-zinc-100">
                    Start building
                  </h2>
                  <p className="mt-2.5 max-w-[38ch] text-[13.5px] leading-relaxed text-zinc-500 sm:mt-3 sm:text-[14px] dark:text-zinc-400">
                    Read the docs, install a component, ship something real.
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-3 sm:mt-8">
                    <Link
                      href="/docs/installation"
                      className="rounded-xl bg-zinc-900 px-5 py-2.5 text-[13px] font-medium text-white transition-all hover:bg-zinc-800 active:scale-[0.98] sm:px-6 sm:py-3 sm:text-[14px] dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
                    >
                      Get started
                    </Link>
                    <a
                      href="https://github.com/Kishan-Agarwal-28/native-ui"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-xl border border-zinc-200 px-5 py-2.5 text-[13px] font-medium text-zinc-700 transition-all hover:border-zinc-400 hover:text-zinc-900 active:scale-[0.98] sm:px-6 sm:py-3 sm:text-[14px] dark:border-white/10 dark:text-zinc-300 dark:hover:border-white/25 dark:hover:text-white"
                    >
                      View on GitHub
                    </a>
                  </div>
                </div>
                <div className="hidden select-none md:block min-w-0">
                  <pre className="w-full max-w-full overflow-x-auto rounded-2xl border border-zinc-200 bg-zinc-50 p-5 font-mono text-[12.5px] leading-[1.9] text-zinc-500 sm:p-6 sm:text-[13px] dark:border-white/[0.06] dark:bg-white/[0.02] dark:text-zinc-400">
                    <code>
                      <span className="text-zinc-400 dark:text-zinc-500">
                        $
                      </span>{" "}
                      <span className="text-emerald-600 dark:text-emerald-400">
                        npx
                      </span>{" "}
                      nativeui-cli@latest init{"\n"}
                      <span className="text-emerald-600 dark:text-emerald-400">
                        Done.
                      </span>{" "}
                      Project initialized.
                    </code>
                  </pre>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-zinc-100 px-4 py-6 sm:px-6 sm:py-8 dark:border-white/[0.06] md:px-10">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-[12.5px] text-zinc-400 sm:text-[13px] dark:text-zinc-500">
            Native UI - MIT License
          </span>
          <div className="flex flex-wrap items-center gap-5 sm:gap-6">
            <Link
              href="/docs"
              className="text-[12.5px] text-zinc-400 transition-colors hover:text-zinc-600 sm:text-[13px] dark:text-zinc-500 dark:hover:text-zinc-300"
            >
              Docs
            </Link>
            <Link
              href="/docs/components/accordion"
              className="text-[12.5px] text-zinc-400 transition-colors hover:text-zinc-600 sm:text-[13px] dark:text-zinc-500 dark:hover:text-zinc-300"
            >
              Components
            </Link>
            <a
              href="https://github.com/Kishan-Agarwal-28/native-ui"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[12.5px] text-zinc-400 transition-colors hover:text-zinc-600 sm:text-[13px] dark:text-zinc-500 dark:hover:text-zinc-300"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

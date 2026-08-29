"use client";

import Link from "next/link";
import { HomeLayout } from "fumadocs-ui/layouts/home";
import type { HTMLAttributes } from "react";
import { useState } from "react";
import { ModeToggle } from "@/components/ui/theme-toggle";
import { cn } from "@/lib/utils";
import { baseOptions } from "@/lib/layout.shared";
import { Logo } from "@/components/logo";

type ContainerProps = HTMLAttributes<HTMLDivElement>;

function MarketingContainer({ className, ...props }: ContainerProps) {
  return (
    <div
      {...props}
      className={cn(
        "relative flex min-h-screen w-full max-w-full flex-1 flex-col overflow-x-hidden bg-white text-zinc-900 dark:bg-[#09090b] dark:text-zinc-100",
        className,
      )}
    />
  );
}

function MarketingHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full max-w-full border-b border-zinc-100 bg-white/80 backdrop-blur-xl dark:border-white/[0.06] dark:bg-[#09090b]/80">
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-4 sm:px-6 md:px-10">
        <Link href="/" className="flex shrink-0 items-center gap-2 sm:gap-2.5">
          <Logo />
          <span className="text-[15px] font-semibold tracking-tight">
            Native UI
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <Link
            href="/docs"
            className="text-[13px] text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
          >
            Docs
          </Link>
          <Link
            href="/docs/components/accordion"
            className="text-[13px] text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
          >
            Components
          </Link>
          <Link
            href="/docs/installation"
            className="text-[13px] text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
          >
            Install
          </Link>
        </nav>

        <div className="flex shrink-0 items-center gap-1.5 sm:gap-3">
          <ModeToggle />
          <a
            href="https://github.com/Kishan-Agarwal-28/native-ui"
            target="_blank"
            rel="noreferrer"
            className="p-2 text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
            aria-label="GitHub Repository"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
          </a>
          <Link
            href="/docs/installation"
            className="hidden rounded-xl bg-zinc-900 px-4 py-2 text-[13px] font-medium text-white transition-all hover:bg-zinc-800 active:scale-[0.98] sm:inline-flex dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            Get started
          </Link>

          {/* Mobile menu button */}
          <button
            type="button"
            className="inline-flex items-center justify-center p-2 text-zinc-500 hover:text-zinc-900 md:hidden dark:text-zinc-400 dark:hover:text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? (
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="M6 6l12 12" />
              </svg>
            ) : (
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 12h16" />
                <path d="M4 6h16" />
                <path d="M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile navigation dropdown */}
      {mobileOpen && (
        <div className="border-t border-zinc-100 px-4 py-4 sm:px-6 md:hidden dark:border-white/[0.06]">
          <nav className="flex flex-col gap-3">
            <Link
              href="/docs"
              className="text-[14px] text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
              onClick={() => setMobileOpen(false)}
            >
              Docs
            </Link>
            <Link
              href="/docs/components/accordion"
              className="text-[14px] text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
              onClick={() => setMobileOpen(false)}
            >
              Components
            </Link>
            <Link
              href="/docs/installation"
              className="text-[14px] text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
              onClick={() => setMobileOpen(false)}
            >
              Install
            </Link>
            <Link
              href="/docs/installation"
              className="mt-1 inline-flex w-full items-center justify-center rounded-xl bg-zinc-900 px-4 py-2.5 text-[14px] font-medium text-white transition-all hover:bg-zinc-800 active:scale-[0.98] sm:hidden dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
              onClick={() => setMobileOpen(false)}
            >
              Get started
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <HomeLayout
      {...baseOptions()}
      nav={{ component: <MarketingHeader /> }}
      slots={{ container: (props) => <MarketingContainer {...props} /> }}
    >
      {children}
    </HomeLayout>
  );
}

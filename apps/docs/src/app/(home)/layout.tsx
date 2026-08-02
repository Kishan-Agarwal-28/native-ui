"use client";

import Link from "next/link";
import { HomeLayout } from "fumadocs-ui/layouts/home";
import type { HTMLAttributes } from "react";
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
        "relative flex min-h-screen flex-1 flex-col overflow-hidden bg-white text-zinc-900 dark:bg-[#09090b] dark:text-zinc-100",
        className,
      )}
    />
  );
}

function MarketingHeader() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 md:px-10 border-b border-zinc-100 dark:border-white/[0.06] bg-white/80 dark:bg-[#09090b]/80 backdrop-blur-xl">
      <Link href="/" className="flex items-center gap-2.5">
        <Logo />
        <span className="text-[15px] font-semibold tracking-tight">
          Native UI
        </span>
      </Link>

      <nav className="hidden md:flex items-center gap-6">
        <Link
          href="/docs"
          className="text-[13px] text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
        >
          Docs
        </Link>
        <Link
          href="/docs/components/accordion"
          className="text-[13px] text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
        >
          Components
        </Link>
        <Link
          href="/docs/installation"
          className="text-[13px] text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
        >
          Install
        </Link>
      </nav>

      <div className="flex items-center gap-3">
        <ModeToggle />
        <a
          href="https://github.com/Kishan-Agarwal-28/native-ui"
          target="_blank"
          rel="noreferrer"
          className="p-2 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors"
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
          className="rounded-lg bg-zinc-900 dark:bg-white px-4 py-2 text-[13px] font-medium text-white dark:text-zinc-900 transition-all hover:bg-zinc-800 dark:hover:bg-zinc-200"
        >
          Get started
        </Link>
      </div>
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

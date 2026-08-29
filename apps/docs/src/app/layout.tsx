import { RootProvider } from "fumadocs-ui/provider/next";
import "./global.css";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { CookiesProvider } from "@/components/cookies-provider";
import { SearchLink } from "fumadocs-ui/contexts/search";

export default function Layout({ children }: LayoutProps<"/">) {
  const SEARCH_OPTIONS = {
    links: [
      ["Docs", "/docs/installation"],
      ["Components", "/docs/components/accordion"],
    ] satisfies SearchLink[],
  };

  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-white text-zinc-900 dark:bg-[#09090b] dark:text-zinc-100 min-h-screen overflow-x-hidden">
        <RootProvider search={SEARCH_OPTIONS}>
          <ThemeProvider defaultTheme="system">
            <CookiesProvider>{children}</CookiesProvider>
          </ThemeProvider>
        </RootProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Anuphan, Geist, Geist_Mono } from "next/font/google";
import Footer from "@/shared/components/Footer";
import ThemeProvider from "@/shared/components/ThemeProvider";
import SiteNav from "@/shared/layout/components/SiteNav";
import { SITE } from "@/shared/lib/constants";
import { SCROLL_TOP_SCRIPT, THEME_INIT_SCRIPT } from "@/shared/lib/theme";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Geist has no Thai glyphs; Anuphan renders the Thai text.
const thai = Anuphan({
  variable: "--font-thai",
  subsets: ["thai"],
});

export const metadata: Metadata = {
  title: `${SITE.name} | ${SITE.role}`,
  description: SITE.description,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // The inline script sets data-theme before hydration, hence suppressHydrationWarning.
    <html
      lang="th"
      data-theme="light"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${thai.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
        <script dangerouslySetInnerHTML={{ __html: SCROLL_TOP_SCRIPT }} />
      </head>
      <body className="min-h-full">
        <ThemeProvider>
          <SiteNav />
          {/* Clears the mobile tab bar below and the desktop rail on the left. */}
          <div className="flex min-h-screen flex-col pb-24 lg:pb-0 lg:pl-68">
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

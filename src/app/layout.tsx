import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const title = "Software Engineer — Portfolio";
const description =
  "Portfolio of a software engineer building intelligent, scalable software across AI/ML, backend systems, and full-stack products.";

export const metadata: Metadata = {
  title: {
    default: title,
    template: "%s · Portfolio",
  },
  description,
  applicationName: "SE Portfolio",
  keywords: [
    "Software Engineer",
    "AI",
    "Machine Learning",
    "Backend",
    "Full Stack",
    "Computer Vision",
    "Distributed Systems",
  ],
  authors: [{ name: "Software Engineer" }],
  creator: "Software Engineer",
  robots: { index: true, follow: true },
  openGraph: {
    title,
    description,
    type: "website",
    siteName: "SE Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export const viewport: Viewport = {
  themeColor: "#060609",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-dvh">
        <a
          href="#projects"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-[#0a0a12]"
        >
          Skip to content
        </a>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

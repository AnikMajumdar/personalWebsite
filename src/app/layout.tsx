import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { Providers } from "@/components/Providers";
import { clerkAppearance } from "@/lib/clerk-appearance";

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

const title = "Anik Majumdar | Software Engineer";
const description =
  "Anik Majumdar is a UC Davis Computer Science student building backend systems, AI/ML applications, and full-stack software.";

export const metadata: Metadata = {
  title: {
    default: title,
    template: "%s · Anik Majumdar",
  },
  description,
  applicationName: "Anik Majumdar · Portfolio",
  keywords: [
    "Software Engineer",
    "AI",
    "Machine Learning",
    "Backend",
    "Full Stack",
    "Computer Vision",
    "Distributed Systems",
  ],
  authors: [{ name: "Anik Majumdar" }],
  creator: "Anik Majumdar",
  robots: { index: true, follow: true },
  openGraph: {
    title,
    description,
    type: "website",
    siteName: "Anik Majumdar",
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
  const clerkEnabled = !!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;
  const tree = <Providers>{children}</Providers>;

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
        {clerkEnabled ? (
          <ClerkProvider appearance={clerkAppearance}>{tree}</ClerkProvider>
        ) : (
          tree
        )}
      </body>
    </html>
  );
}

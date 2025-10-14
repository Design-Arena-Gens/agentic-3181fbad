import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://agentic-3181fbad.vercel.app"),
  title: {
    default: "VoltSense — Smart Home Energy Monitor",
    template: "%s | VoltSense",
  },
  description:
    "VoltSense learns your home's energy patterns, monitors grid and inverter activity, and optimizes battery usage without compromising comfort.",
  keywords: [
    "home energy monitor",
    "smart energy",
    "IoT",
    "home assistant",
    "VoltSense",
  ],
  openGraph: {
    title: "VoltSense — Control your energy. Save every month.",
    description:
      "VoltSense delivers intelligent energy insights, predictive automation, and seamless integrations to reduce waste and protect comfort.",
    url: "https://agentic-3181fbad.vercel.app",
    siteName: "VoltSense",
    images: [
      {
        url: "/og/voltsense-og.png",
        width: 1200,
        height: 630,
        alt: "VoltSense marketing visuals with dashboard preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@voltsense",
    title: "VoltSense — Smart Home Energy Monitor",
    description:
      "Learn your home's energy pattern, monitor grid health, and optimize storage with VoltSense.",
    images: ["/og/voltsense-og.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} bg-background text-slate-50`}
      >
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}

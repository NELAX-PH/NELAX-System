import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SpecularHighlight } from "@/components/SpecularHighlight";
import { GlobalBenchmark } from "@/components/GlobalBenchmark";
import { MobileNavigation } from "@/components/MobileNavigation";
import { SmoothScroll } from "@/components/SmoothScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://nelax.systems"),
  title: {
    default: "NELAX | The Digital Nervous System",
    template: "%s | NELAX"
  },
  description: "High-performance digital architecture and glass-metal PWA systems for premium businesses. We build the systems that drive industry leaders.",
  keywords: ["Software Agency", "PWA", "Next.js", "React Native", "High Performance", "UX Design", "System Architecture"],
  authors: [{ name: "Nelax Systems" }],
  creator: "Nelax Systems",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nelax.systems",
    siteName: "NELAX",
    title: "NELAX | The Digital Nervous System",
    description: "High-performance digital architecture and glass-metal PWA systems.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "NELAX Systems"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "NELAX | The Digital Nervous System",
    description: "High-performance digital architecture and glass-metal PWA systems.",
    images: ["/og-image.png"],
    creator: "@nelax_systems"
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  manifest: "/manifest.json"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black overflow-x-hidden relative`}
      >
        <SmoothScroll>
          <SpecularHighlight />
          <GlobalBenchmark />
          <MobileNavigation />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}

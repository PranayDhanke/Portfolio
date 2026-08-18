import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { AppProviders } from "@/components/providers/AppProviders";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/footer/Footer";
import { CustomCursor } from "@/components/cursor/CustomCursor";
import { FixedGlows } from "@/components/background/Background";
import { profile } from "@/data/portfolio";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: profile.seo.title,
  description: profile.seo.description,
  openGraph: {
    title: profile.seo.title,
    description: profile.seo.description,
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#07070b",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body
        className={`${sans.variable} ${display.variable} ${mono.variable} font-sans antialiased`}
      >
        <AppProviders>
          <Navbar />
          {children}
          <Footer />
        </AppProviders>
        <CustomCursor />
        <FixedGlows />
        <div className="noise" aria-hidden="true" />
      </body>
    </html>
  );
}
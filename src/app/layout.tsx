import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const fontSerif = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://muskanahuja.com"),
  title: {
    default: "Muskan Ahuja — Financial Analyst",
    template: "%s · Muskan Ahuja",
  },
  description:
    "Financial analyst with experience across M&A, capital allocation, and investment research. Master of Science in Finance, Brandeis International Business School.",
  openGraph: {
    title: "Muskan Ahuja — Financial Analyst",
    description:
      "FP&A, investment research, and M&A valuation across multi-billion dollar businesses. MS Finance, Brandeis.",
    url: "https://muskanahuja.com",
    siteName: "Muskan Ahuja",
    locale: "en_US",
    type: "website",
  },
  robots: { index: true, follow: true },
  twitter: { title: "Muskan Ahuja — Financial Analyst", card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fontSans.variable} ${fontSerif.variable}`}>
      <body className="font-sans antialiased bg-ivory text-ink">{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Stephanie Leonenko | Healthcare Professional",
  description:
    "Certified Nursing Assistant with 10+ years of patient care experience and a Bachelor of Science in Healthcare Administration. Based in Commack, New York.",
  metadataBase: new URL("https://s.leonenko.me"),
  openGraph: {
    title: "Stephanie Leonenko | Healthcare Professional",
    description:
      "CNA | BS Healthcare Administration | 10+ Years Patient Care",
    url: "https://s.leonenko.me",
    siteName: "Stephanie Leonenko",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen bg-stone-50 text-stone-900">{children}</body>
    </html>
  );
}

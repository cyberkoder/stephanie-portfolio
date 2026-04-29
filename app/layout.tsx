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
  title: "Stephanie Leonenko | Healthcare Administration",
  description:
    "Healthcare administration professional with 10+ years of clinical experience at Northwell Health. Pursuing BS Healthcare Administration at SNHU. NYS CNA, PCT, BLS, Phlebotomist. Based in Commack, New York.",
  metadataBase: new URL("https://s.leonenko.me"),
  openGraph: {
    title: "Stephanie Leonenko | Healthcare Administration",
    description:
      "Healthcare Administration | 10+ Years Clinical Experience | Northwell Health | SNHU BS In Progress",
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

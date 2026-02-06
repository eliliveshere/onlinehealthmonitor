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
  title: "Online Health Monitor | Stop Losing Leads",
  description: "A monthly health check for your website and Google listing. Catch silent problems like broken forms, wrong hours, and missed calls before they cost you revenue.",
  openGraph: {
    title: "Online Health Monitor | Is your website costing you calls?",
    description: "Get a free 60-second audit. We monitor your online presence and send one clear fix each month.",
    url: "https://onlinehealthmonitor.vercel.app",
    siteName: "Online Health Monitor",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Online Health Monitor | Stop Losing Leads",
    description: "Catch broken forms, wrong hours, and missed calls before they cost you revenue.",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

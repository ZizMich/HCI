import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Roomer",
  description: "Booking system for student accomodations",
  icons: {
    icon: "favi.svg", // fallback for old browsers
    shortcut: "/favi.svg", // also for older browsers
    apple: "/favicon-32x32.png", // iOS Safari
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
        <Navigation></Navigation>
        {children}
      </body>
    </html>
  );
}

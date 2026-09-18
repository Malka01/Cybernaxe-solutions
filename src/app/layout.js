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

export const metadata = {
  title: "Cybernaxe Solutions - Sri Lanka's AI & Software Development Company",
  description: "Cybernaxe Solutions is a leading AI and software development company in Sri Lanka, specializing in innovative solutions for businesses. We leverage cutting-edge technologies to deliver custom software, AI agents, and automation tools that enhance efficiency and drive growth.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`} data-scroll-behavior="smooth">
      <body>{children}</body>
    </html>
  );
}

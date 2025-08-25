import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "SaaS Landing Page",
  description: "A concise, high-conversion single-page view that explains the product, builds trust, and captures signups.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${interTight.variable} antialiased`} style="background: linear-gradient(180deg, #FFFFFF 0%, #F5F7FF 100%);"
      >
        {children}
      </body>
    </html>
  );
}

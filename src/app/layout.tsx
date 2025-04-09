import "./globals.css";
import localFont from "next/font/local";
import type { Metadata } from "next";
import { LanguageProvider } from "@/lib/language-context";

const winkySans = localFont({
  src: [
    {
      path: "../fonts/WinkySans-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/WinkySans-Light.otf",
      weight: "300",
      style: "normal",
    },
  ],
  variable: "--font-winky",
});

export const metadata: Metadata = {
  title: "BB Beauty and Slimming",
  description: "Experience luxury beauty and slimming treatments",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={winkySans.variable}>
      <body className="font-winky">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}

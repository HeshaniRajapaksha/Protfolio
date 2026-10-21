import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#080c14",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Heshani Rajapaksha | QA Engineer",
  description:
    "Portfolio of Heshani Rajapaksha — Quality Assurance Engineer specializing in automated testing, API validation, and high-quality software delivery.",
  keywords: [
    "Heshani Rajapaksha",
    "QA Engineer",
    "Quality Assurance",
    "Automation Testing",
    "Software Quality",
  ],
  authors: [{ name: "Heshani Rajapaksha" }],
  openGraph: {
    title: "Heshani Rajapaksha | QA Engineer",
    description:
      "Portfolio of Heshani Rajapaksha — Quality Assurance Engineer.",
    url: "https://heshanirajapaksha.github.io/Protfolio/",
    siteName: "Heshani Rajapaksha",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={plusJakarta.variable}>
      <body>{children}</body>
    </html>
  );
}

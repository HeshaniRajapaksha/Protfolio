import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#080c14",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Heshani Rajapaksha | QA Engineer & Test Automation Specialist",
  description:
    "Portfolio of Heshani Rajapaksha - Quality Assurance Engineer specializing in Automated Testing, API Validation, CI/CD Quality Gates, and Zero-Defect Delivery.",
  keywords: [
    "Heshani Rajapaksha",
    "QA Engineer",
    "Quality Assurance",
    "Automation Testing",
    "Cypress",
    "Playwright",
    "Selenium",
    "Postman",
    "API Testing",
    "Software Tester",
  ],
  authors: [{ name: "Heshani Rajapaksha" }],
  openGraph: {
    title: "Heshani Rajapaksha | QA Engineer & Test Automation Specialist",
    description:
      "Quality Assurance Engineer focused on precision, test automation, and robust software delivery.",
    url: "https://heshanirajapaksha.github.io/Protfolio/",
    siteName: "Heshani Rajapaksha Portfolio",
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
    <html lang="en" className={`${plusJakarta.variable} ${jetbrainsMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}

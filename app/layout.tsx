import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ela Debichi",
  description: "Portfolio website for Ela Debichi",
  keywords: ["web developer", "fullstack", "software engineer"],
  creator: "Ela Debichi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

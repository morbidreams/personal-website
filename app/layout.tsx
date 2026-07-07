import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Inter } from "next/font/google";
import { ScrollEnergyBar } from "@/components/ScrollEnergyBar";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <ScrollEnergyBar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

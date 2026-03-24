import type { Metadata } from "next";
import { Work_Sans, Syne } from "next/font/google";
import "./globals.css";
import { Header } from "@/app/ui/header/header";

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Chef Mate",
  description: "Elevate your mealtime with AI Chef Mate",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${workSans.variable} ${syne.variable} h-full antialiased`}
    >
      <body>
        <Header />
        <main className={"container"}>{children}</main>
      </body>
    </html>
  );
}

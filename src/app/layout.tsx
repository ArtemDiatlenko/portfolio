import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import HeaderMenu from "./components/HeaderMenu";
import LanguageSwitch from "./components/LanguageSwitch";
import SiteFooter from "./components/SiteFooter";
import ScrollToTopOnRouteChange from "./components/ScrollToTopOnRouteChange";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Artem Diatlenko | Frontend Developer",
  description: "Personal portfolio website of Artem Diatlenko, Frontend Developer.",
};


function SiteHeader() {
  return (
    <header className="border-b border-zinc-800">
      <div className="relative mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-4">
        <HeaderMenu />

        <Link
          href="/"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl font-semibold tracking-[0.18em] text-zinc-100 transition hover:text-white"
        >
          A.D.
        </Link>

        <LanguageSwitch />
      </div>
    </header>
  );
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-zinc-950 text-zinc-100 flex flex-col">
        <ScrollToTopOnRouteChange />
        <SiteHeader />

        <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-10">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}

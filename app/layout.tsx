import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/commons/footer-primary";
import { FloatingNav } from "@/components/commons/floating-navbar";
import { navigationLinks } from "@/lib/constants/navigation-items";
import HeaderMobile from "@/components/commons/header-mobile";
import WidthLayout from "@/components/commons/width-layout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Weeshr Invest",
  description: "Own an Equity Share in Weeshr",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[url('https://res.cloudinary.com/drykej1am/image/upload/v1741622631/weeshr_website/HeroBGElements_wlz14l.png')] bg-cover bg-right md:bg-none h-screen bg-no-repeat">
        <WidthLayout>
          <HeaderMobile />
          <FloatingNav navItems={navigationLinks} />
        </WidthLayout>
        {children}
        <WidthLayout>
          <Footer />
        </WidthLayout>
      </body>
    </html>
  );
}

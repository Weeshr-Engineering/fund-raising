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
  openGraph: {
    title: "Weeshr",
    description: "Make a Weesh!!",
    url: "https://weeshr.com",
    images: [
      {
        url: "https://res.cloudinary.com/drykej1am/image/upload/v1727903584/weeshr_website/ThumbnailWeeshr_1_3_oicmbz.png",
        width: 800,
        height: 600,
      },
      {
        url: "https://res.cloudinary.com/drykej1am/image/upload/v1727903584/weeshr_website/ThumbnailWeeshr_1_3_oicmbz.png",
        width: 1800,
        height: 1600,
        alt: "Weeshr alt",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    title: "Weeshr",
    description: "Make a Weesh",
    images: [
      "https://res.cloudinary.com/drykej1am/image/upload/v1727903584/weeshr_website/ThumbnailWeeshr_1_3_oicmbz.png",
    ],
  },
  other: {
    // "google-site-verification": "Tpygm8ffQSGqRVivwFb15HdAmCgdfeGYNQ49vxTZKt4",
  },
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
          <div className="pb-10">
            <Footer />
          </div>
        </WidthLayout>
      </body>
    </html>
  );
}

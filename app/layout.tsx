import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export const metadata: Metadata = {
  title: "المتميزون Distinguished | حلول رقمية للشركات في السودان",
  description: "شركة المتميزون Distinguished تبني تطبيقات وأنظمة وذكاء اصطناعي ومواقع وحلول WhatsApp للشركات في السودان."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;500;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-tajawal antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

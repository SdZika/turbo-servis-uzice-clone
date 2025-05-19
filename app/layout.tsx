import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from '@/components/layout/Header';
import TopBar from '@/components/layout/TopBar';
import Footer from '@/components/layout/Footer';
import PromoBar from '@/components/layout/PromoBar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Turbo Servis | Početna",
  description: "Prodaja i servis turbokompresora",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}
      >
        <TopBar />
        <Header />
        <PromoBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

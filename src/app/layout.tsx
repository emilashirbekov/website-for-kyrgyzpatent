import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/widgets/Header";
import { Navbar } from "@/widgets/Navbar";
import { Footer } from "@/widgets/Footer";

export const metadata: Metadata = {
  title: "Кыргызпатент",
  description: "Госагентство по интеллектуальной собственности (ГАИС) КР",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='en'>
      <body>
        <Header />
        <Navbar />
        <main className='relative overflow-hidden'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

export default RootLayout;

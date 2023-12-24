import type { Metadata } from "next";
import "./providers/globals.css";

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
        <main className='relative overflow-hidden'>{children}</main>
      </body>
    </html>
  );
}

export default RootLayout;

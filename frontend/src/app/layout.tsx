import type { Metadata } from 'next';
import { Roboto_Mono } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import LayoutWrapper from './LayoutWrapper';

const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Kitaab Kart',
  description: 'E-commerce platform to buy and sell used books',
  icons: {
    icon: '/images/pageLogo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto_mono.className}>
      <body className="min-h-full flex flex-col">
        <LayoutWrapper>
          <Header />
          {children}
          <Footer />
        </LayoutWrapper>
      </body>
    </html>
  );
}

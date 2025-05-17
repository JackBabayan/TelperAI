// app/layout.jsx

import { Inter } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ThemeProvider from '@/components/providers/ThemeProvider';
import '@/styles/main.scss';

const inter = Inter({ subsets: ['latin', 'cyrillic'] });

export const metadata = {
  title: 'Tellper – Your conversation helper',
  description: 'Tellper turns your voice into perfect messages for any app. Save time and communicate smarter with AI-powered message transformation.',
  openGraph: {
    title: 'Tellper – Your conversation helper',
    description: 'Tellper turns your voice into perfect messages for any app. Save time and communicate smarter with AI-powered message transformation.',
    url: 'https://tellper.com',
    siteName: 'Tellper',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Tellper App',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tellper – Your conversation helper',
    description: 'Tellper turns your voice into perfect messages for any app. Save time and communicate smarter with AI-powered message transformation.',
    site: '@tellperapp',
    images: ['/images/og-image.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
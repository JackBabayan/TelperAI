// app/layout.jsx

import { Inter } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ThemeProvider } from 'next-themes';
import '@/styles//main.scss';

const inter = Inter({ subsets: ['latin', 'cyrillic'] });

export const metadata = {
  title: 'Tellper - Ваш интеллектуальный помощник для общения',
  description: 'Tellper преобразует ваш голосовой ввод в продуманные, хорошо структурированные ответы для всех ваших приложений, экономя время и улучшая вашу коммуникацию.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { LanguageProvider } from '@/context/LanguageContext';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'SpeakRealKorean | 하루 15분, 한국인 튜터와 진짜 한국어로 대화하기',
  description: '한국어 실력을 빠르게 향상시키고 싶으신가요? 매일 15분 원어민과의 대화로 자연스러운 한국어를 익혀보세요.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={`${inter.variable}`}>
      <body className="min-h-screen bg-gradient-to-b from-white to-pink-50 antialiased overflow-x-hidden">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}

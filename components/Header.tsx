"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import LanguageSelector from './LanguageSelector';
import { useLanguage } from '@/context/LanguageContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { translations } = useLanguage();

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-kpop-pink to-kpop-purple">
            SpeakRealKorean
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#features" className="text-sm font-medium hover:text-kpop-pink transition-colors">
            {translations['nav.features'] || '기능'}
          </Link>
          <Link href="#how-it-works" className="text-sm font-medium hover:text-kpop-pink transition-colors">
            {translations['nav.howItWorks'] || '학습방법'}
          </Link>
          <Link href="#expressions" className="text-sm font-medium hover:text-kpop-pink transition-colors">
            {translations['nav.expressions'] || '표현'}
          </Link>
          <Link href="#tutors" className="text-sm font-medium hover:text-kpop-pink transition-colors">
            {translations['nav.tutors'] || '튜터'}
          </Link>
          <Link href="#pricing" className="text-sm font-medium hover:text-kpop-pink transition-colors">
            {translations['nav.pricing'] || '가격'}
          </Link>
          <Link href="#faq" className="text-sm font-medium hover:text-kpop-pink transition-colors">
            {translations['nav.faq'] || '자주 묻는 질문'}
          </Link>
        </nav>
        
        <div className="hidden md:flex items-center gap-4">
          <LanguageSelector />
          <Button variant="gradient" size="lg" className="rounded-full font-bold shadow-lg">
            {translations['hero.cta'] || '사전예약하기'}
          </Button>
        </div>
        
        <div className="flex items-center gap-2 md:hidden">
          <LanguageSelector />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b p-4 flex flex-col space-y-4">
          <Link href="#features" className="text-sm font-medium hover:text-kpop-pink transition-colors">
            {translations['nav.features'] || '기능'}
          </Link>
          <Link href="#how-it-works" className="text-sm font-medium hover:text-kpop-pink transition-colors">
            {translations['nav.howItWorks'] || '학습방법'}
          </Link>
          <Link href="#expressions" className="text-sm font-medium hover:text-kpop-pink transition-colors">
            {translations['nav.expressions'] || '표현'}
          </Link>
          <Link href="#tutors" className="text-sm font-medium hover:text-kpop-pink transition-colors">
            {translations['nav.tutors'] || '튜터'}
          </Link>
          <Link href="#pricing" className="text-sm font-medium hover:text-kpop-pink transition-colors">
            {translations['nav.pricing'] || '가격'}
          </Link>
          <Link href="#faq" className="text-sm font-medium hover:text-kpop-pink transition-colors">
            {translations['nav.faq'] || '자주 묻는 질문'}
          </Link>
          <Button variant="gradient" size="lg" className="rounded-full font-bold shadow-lg">
            {translations['hero.cta'] || '사전예약하기'}
          </Button>
        </div>
      )}
    </header>
  );
}

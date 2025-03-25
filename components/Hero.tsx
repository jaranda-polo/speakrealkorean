"use client";

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

export default function Hero() {
  const { translations } = useLanguage();
  
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-kpop-pink opacity-10 blur-3xl"></div>
        <div className="absolute top-20 -left-20 h-60 w-60 rounded-full bg-kpop-purple opacity-10 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-kpop-blue opacity-10 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-16">
          {/* Left side: Text content */}
          <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="font-bold leading-tight">
                <span className="block">{translations['hero.heading1'] || '매일 단 15분'}</span>
                <span className="block">{translations['hero.heading2'] || '1만 명의 한국인 튜터와'}</span>
                <span className="gradient-text">{translations['hero.heading3'] || '진짜 한국어를 배워보세요'}</span>
              </h1>
            </motion.div>
            
            <motion.p 
              className="text-lg text-gray-600 md:text-xl max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {translations['hero.subheading'] || '한국어 실력을 빠르게 향상시키고 싶으신가요? 매일 15분 원어민과의 대화로 자연스러운 한국어를 익혀보세요.'}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="pt-4"
            >
              <Button variant="gradient" size="xl" className="rounded-full font-bold shadow-lg">
                {translations['hero.cta'] || '사전예약하기'}
              </Button>
            </motion.div>
          </div>
          
          {/* Right side: Image */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="relative aspect-video md:aspect-square max-w-xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-kpop-pink/20 to-kpop-purple/20 rounded-3xl"></div>
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                <p className="text-center px-4">30명 이상의 한국 대학생 튜터 이미지</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

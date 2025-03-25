import Link from 'next/link';
import { Instagram, Twitter, Youtube, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 pt-12 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-kpop-pink to-kpop-purple">
                SpeakRealKorean
              </span>
            </Link>
            <p className="text-gray-600 mb-4 max-w-md">
              하루 15분, 한국인 튜터와 진짜 한국어로 대화하며 빠르게 실력을 키워보세요.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-kpop-pink transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-kpop-pink transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-kpop-pink transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-kpop-pink transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">서비스</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#features" className="text-gray-600 hover:text-kpop-pink transition-colors">
                  기능 소개
                </Link>
              </li>
              <li>
                <Link href="#how-it-works" className="text-gray-600 hover:text-kpop-pink transition-colors">
                  학습 방법
                </Link>
              </li>
              <li>
                <Link href="#tutors" className="text-gray-600 hover:text-kpop-pink transition-colors">
                  튜터 소개
                </Link>
              </li>
              <li>
                <Link href="#expressions" className="text-gray-600 hover:text-kpop-pink transition-colors">
                  표현 모음
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">지원</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#faq" className="text-gray-600 hover:text-kpop-pink transition-colors">
                  자주 묻는 질문
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-kpop-pink transition-colors">
                  고객센터
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-kpop-pink transition-colors">
                  개인정보처리방침
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-kpop-pink transition-colors">
                  이용약관
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} SpeakRealKorean. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

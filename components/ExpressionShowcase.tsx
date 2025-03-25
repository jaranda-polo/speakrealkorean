"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Music, Coffee, Plane, Briefcase, MessageSquare } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

// Define type for selected card
type SelectedCard = {
  category: string;
  expression: string;
} | null;

export default function ExpressionShowcase() {
  const { translations } = useLanguage();
  const [selectedCard, setSelectedCard] = useState<SelectedCard>(null);
  const [shuffled, setShuffled] = useState(false);

  // Expression categories and their phrases - Note: Korean expressions are kept in Korean in all languages
  const expressionCategories = [
    {
      id: 'kpop',
      title: translations['expressions.category1']?.split(' - ')[0] || 'K-Culture',
      subtitle: translations['expressions.category1']?.split(' - ')[1] || 'K-pop, K-Drama, 덕질 표현',
      icon: <Music className="h-6 w-6" />,
      color: 'from-pink-500 to-pink-400',
      backgroundColor: 'bg-pink-100',
      expressions: [
        "이번 컴백 무대 미쳤다",
        "그 배우 눈빛 연기 실화야?",
        "나 이번에 포카 교환했어",
        "찐이야 이건",
        "하… 최애 생일 진짜 챙겨야 돼"
      ]
    },
    {
      id: 'daily',
      title: translations['expressions.category2']?.split(' - ')[0] || 'Everyday Life',
      subtitle: translations['expressions.category2']?.split(' - ')[1] || '일상생활 속 표현',
      icon: <Coffee className="h-6 w-6" />,
      color: 'from-yellow-500 to-amber-400',
      backgroundColor: 'bg-amber-100',
      expressions: [
        "이거 원플러스원이에요?",
        "포인트 적립하시겠어요?",
        "카페 자리 맡아줄 수 있어요?",
        "오늘 날씨 완전 미쳤죠?",
        "회식 언제 끝나요…?"
      ]
    },
    {
      id: 'travel',
      title: translations['expressions.category3']?.split(' - ')[0] || 'Travel & Navigation',
      subtitle: translations['expressions.category3']?.split(' - ')[1] || '여행자 실전 표현',
      icon: <Plane className="h-6 w-6" />,
      color: 'from-blue-500 to-indigo-400',
      backgroundColor: 'bg-blue-100',
      expressions: [
        "이 길 따라가면 홍대 나와요?",
        "택시 잡기 힘들어요?",
        "지하철 몇 번 출구예요?",
        "이거 포장돼요?",
        "근처에 맛집 있어요?"
      ]
    },
    {
      id: 'business',
      title: translations['expressions.category4']?.split(' - ')[0] || 'Business & Work',
      subtitle: translations['expressions.category4']?.split(' - ')[1] || '실무/회의/오피스 표현',
      icon: <Briefcase className="h-6 w-6" />,
      color: 'from-violet-500 to-purple-400',
      backgroundColor: 'bg-violet-100',
      expressions: [
        "이거 누가 담당이에요?",
        "자료 공유드렸습니다",
        "피드백은 언제까지 가능할까요?",
        "회의실 예약해두셨어요?",
        "이번 주 일정 다시 확인해볼게요"
      ]
    },
    {
      id: 'social',
      title: translations['expressions.category5']?.split(' - ')[0] || 'Social Media / Gen Z',
      subtitle: translations['expressions.category5']?.split(' - ')[1] || '인터넷 유행어 / 댓글 톤',
      icon: <MessageSquare className="h-6 w-6" />,
      color: 'from-teal-500 to-emerald-400',
      backgroundColor: 'bg-teal-100',
      expressions: [
        "댓글 반응 진짜 웃겨",
        "이 짤 완전 내 스타일",
        "현타 왔다 진짜",
        "TMI지만 말해도 돼요?",
        "~각이야 (예: 퇴근각, 망한각)"
      ]
    }
  ];

  // Function to generate random position values (within constraints)
  const randomPosition = () => ({
    x: Math.random() * 30 - 15,
    y: Math.random() * 30 - 15,
    rotate: Math.random() * 10 - 5,
  });

  // Shuffle cards
  const shuffleCards = () => {
    setShuffled(!shuffled);
  };

  return (
    <section id="expressions" className="py-20 overflow-hidden bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {translations['expressions.title'] || '수업 시간에 배우기 힘든 말,'} <span className="gradient-text">{translations['expressions.title'] ? translations['expressions.title'].split(',')[1] : '여기서 배워요'}</span>
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {translations['expressions.subtitle'] || '오늘 한국에서 진짜 쓰는 표현, 이렇게 배워요'}
          </motion.p>
        </div>

        <div className="relative min-h-[600px] md:min-h-[500px]">
          {/* Shuffle button */}
          <motion.button
            className="absolute right-4 top-0 z-10 p-2 rounded-full bg-white shadow-md text-kpop-pink"
            onClick={shuffleCards}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 18h1.4c1.3 0 2.5-.6 3.3-1.7l6.1-8.6c.7-1.1 2-1.7 3.3-1.7H22"/><path d="m18 2 4 4-4 4"/><path d="M2 6h1.9c1.5 0 2.9.9 3.6 2.2"/><path d="M22 18h-5.9c-1.3 0-2.6-.7-3.3-1.8l-.5-.8"/><path d="m18 14 4 4-4 4"/></svg>
          </motion.button>

          {/* Expression cards */}
          <div className="relative max-w-4xl mx-auto pt-10">
            {expressionCategories.map((category, categoryIndex) => (
              <div key={category.id} className="mb-8">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: categoryIndex * 0.1 }}
                  className="flex items-center gap-2 mb-3"
                >
                  <div className={`p-2 rounded-full ${category.backgroundColor}`}>
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-bold">{category.title}</h3>
                </motion.div>
                
                <div className="flex flex-wrap gap-3 md:gap-4">
                  {category.expressions.map((expression, expressionIndex) => {
                    const position = randomPosition();
                    
                    return (
                      <motion.div
                        key={`${category.id}-${expressionIndex}`}
                        className="card-hover cursor-pointer"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.05, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        animate={shuffled ? {
                          x: position.x,
                          y: position.y,
                          rotate: position.rotate,
                        } : {}}
                        viewport={{ once: true }}
                        transition={{ 
                          delay: (categoryIndex * 0.1) + (expressionIndex * 0.05),
                          type: "spring",
                          stiffness: 300,
                          damping: 20
                        }}
                        onClick={() => setSelectedCard({
                          category: category.title,
                          expression: expression
                        })}
                      >
                        <div 
                          className={`px-4 py-3 rounded-xl shadow-md bg-gradient-to-r ${category.color} text-white font-medium`}
                        >
                          {expression}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal for expanded card */}
        {selectedCard && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
            onClick={() => setSelectedCard(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className="bg-white rounded-2xl p-6 max-w-md w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-sm text-gray-500 mb-2">{selectedCard.category}</div>
              <div className="text-2xl font-bold mb-4">{selectedCard.expression}</div>
              <button 
                className="bg-gradient-to-r from-kpop-pink to-kpop-purple text-white font-bold py-2 px-4 rounded-full w-full"
              >
                {translations['expressions.practice'] || '이 표현으로 대화 연습하기'}
              </button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}

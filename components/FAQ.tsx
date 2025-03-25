import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqItems = [
  {
    question: "얼마나 자주 대화할 수 있나요?",
    answer: "매일 15분씩 대화하는 것을 권장드립니다. 평일 5일 연속으로 대화하시면 주말에는 추가 15분을 무료로 드립니다!"
  },
  {
    question: "튜터를 직접 선택할 수 있나요?",
    answer: "네, 가능합니다. 튜터 검색에서 원하는 튜터를 즐겨찾기하고 매일 선택하실 수 있어요. 물론 새로운 튜터와의 대화도 언제든 가능합니다."
  },
  {
    question: "한국어를 전혀 모르는데 시작할 수 있나요?",
    answer: "물론이죠! 영어가 가능한 튜터들이 많이 있으며, 완전 초보자를 위한 첫 대화 가이드도 제공해 드립니다. 걱정 마세요 :)"
  },
  {
    question: "예약은 어떻게 하나요?",
    answer: "사전예약을 하시면 서비스 출시 시 가장 먼저 알려드리고, 30% 할인된 가격에 서비스를 이용하실 수 있습니다. 결제는 서비스 출시 후에 진행됩니다."
  },
  {
    question: "대화 내용은 어떻게 저장되나요?",
    answer: "모든 대화는 리포트 형태로 정리되어 저장됩니다. 대화 중에 배운 표현, 문법, 발음 등이 체계적으로 정리되어 복습하기 쉽습니다."
  },
  {
    question: "어떤 주제로 대화할 수 있나요?",
    answer: "K-pop, 드라마, 일상생활, 여행, 비즈니스 한국어 등 다양한 주제로 대화할 수 있습니다. 원하는 특정 주제가 있다면 자유롭게 요청하실 수도 있어요!"
  }
];

export default function FAQ() {
  const [openItem, setOpenItem] = useState(null);
  
  const toggleItem = (index) => {
    if (openItem === index) {
      setOpenItem(null);
    } else {
      setOpenItem(index);
    }
  };
  
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="gradient-text">자주 묻는 질문</span>
          </motion.h2>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                className={`w-full text-left p-4 rounded-lg flex justify-between items-center ${
                  openItem === index 
                    ? 'bg-gradient-to-r from-kpop-pink/10 to-kpop-purple/10 text-kpop-pink' 
                    : 'bg-gray-50 hover:bg-gray-100'
                }`}
                onClick={() => toggleItem(index)}
              >
                <span className="font-medium">{item.question}</span>
                <ChevronDown 
                  className={`h-5 w-5 transition-transform ${openItem === index ? 'rotate-180' : ''}`}
                />
              </button>
              
              {openItem === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="bg-white p-4 rounded-b-lg border-x border-b"
                >
                  <p className="text-gray-600">{item.answer}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

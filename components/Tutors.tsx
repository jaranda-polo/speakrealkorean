import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const tutors = [
  {
    name: "김민지",
    image: "/tutors/tutor1.png", // Placeholder image
    languages: ["🇰🇷 Korean", "🇬🇧 English"],
    classes: "320",
    minutes: "24,000",
    rating: 4.9,
    intro: "한국어를 쉽고 재미있게 가르쳐드립니다!"
  },
  {
    name: "이준호",
    image: "/tutors/tutor2.png", // Placeholder image
    languages: ["🇰🇷 Korean", "🇬🇧 English", "🇯🇵 Japanese"],
    classes: "215",
    minutes: "16,125",
    rating: 4.8,
    intro: "K-pop, 드라마 표현을 전문적으로 알려드립니다."
  },
  {
    name: "박소현",
    image: "/tutors/tutor3.png", // Placeholder image
    languages: ["🇰🇷 Korean", "🇬🇧 English", "🇨🇳 Chinese"],
    classes: "420",
    minutes: "31,500",
    rating: 5.0,
    intro: "비즈니스 한국어와 일상 회화를 자연스럽게 배울 수 있도록 도와드려요!"
  }
];

export default function Tutors() {
  const { translations } = useLanguage();
  
  return (
    <section id="tutors" className="py-20 bg-gradient-to-b from-pink-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {translations['tutors.title']}
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {translations['tutors.subtitle']}
          </motion.p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {tutors.map((tutor, index) => (
            <motion.div
              key={index}
              className="pastel-card card-hover relative overflow-hidden bg-white border-kpop-pink/10 p-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Top background decoration */}
              <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-r from-kpop-pink/20 to-kpop-purple/20 -z-10"></div>
              
              {/* Tutor Image - Placeholder circle */}
              <div className="relative w-16 h-16 rounded-full bg-gradient-to-r from-kpop-pink to-kpop-purple mx-auto mb-2 flex items-center justify-center text-white overflow-hidden">
                <span className="text-lg font-bold">{tutor.name.charAt(0)}</span>
              </div>
              
              {/* Tutor Info */}
              <div className="text-center">
                <h3 className="text-lg font-bold">{tutor.name}</h3>
                
                {/* Languages */}
                <div className="flex justify-center gap-1 my-1 flex-wrap">
                  {tutor.languages.map((language, langIndex) => (
                    <span key={langIndex} className="text-xs">{language}</span>
                  ))}
                </div>
                
                {/* Stats - Simplified */}
                <div className="flex items-center justify-center gap-3 my-2">
                  <div className="text-center">
                    <p className="font-medium text-sm">{tutor.classes}</p>
                    <p className="text-xs text-gray-500">{translations['tutors.classes']}</p>
                  </div>
                  <div className="flex items-center">
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    <span className="font-bold text-sm ml-1">{tutor.rating}</span>
                  </div>
                </div>
                
                {/* Button */}
                <button className="mt-2 py-1.5 px-3 bg-kpop-pink/10 text-kpop-pink rounded-full text-xs font-medium hover:bg-kpop-pink/20 transition-colors">
                  {translations['tutors.viewProfile']}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <button className="py-2 px-5 bg-white border border-kpop-pink/20 rounded-full text-kpop-pink font-medium hover:bg-kpop-pink/5 transition-colors">
            {translations['tutors.viewAll']}
          </button>
        </div>
      </div>
    </section>
  );
}

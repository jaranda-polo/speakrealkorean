import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-kpop-pink/10 to-kpop-purple/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="gradient-text">지금 시작하세요</span>
          </motion.h2>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            하루 15분, 한국인 튜터와 진짜 한국어로 대화하며 빠르게 실력을 키워보세요. 
            지금 사전예약하시면 서비스 출시 시 30% 할인된 가격으로 이용하실 수 있습니다.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button variant="gradient" size="xl" className="rounded-full font-bold shadow-lg">
              사전예약하기
            </Button>
            <Button variant="outline" size="xl" className="rounded-full font-bold border-kpop-pink/30 text-kpop-pink hover:bg-kpop-pink/10">
              더 알아보기
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

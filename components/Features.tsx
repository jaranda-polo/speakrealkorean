"use client";

import { motion } from 'framer-motion';
import { Users, Clock, BookOpen, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Features() {
  const { translations } = useLanguage();
  
  const features = [
    {
      icon: <Users className="h-10 w-10 text-kpop-pink" />,
      title: translations['features.item1.title'] || "Native Tutors, 1-Minute Connect",
      description: translations['features.item1.description'] || "Connect with 10,000+ native Korean tutors instantly, anytime and anywhere."
    },
    {
      icon: <Clock className="h-10 w-10 text-kpop-purple" />,
      title: translations['features.item2.title'] || "Focused 15-Min Sessions",
      description: translations['features.item2.description'] || "Master one expression at a time in bite-sized, efficient practice sessions."
    },
    {
      icon: <BookOpen className="h-10 w-10 text-kpop-blue" />,
      title: translations['features.item3.title'] || "Continuous Learning Journey",
      description: translations['features.item3.description'] || "Learning continues after each session with detailed reports and seamless continuation."
    },
    {
      icon: <MessageCircle className="h-10 w-10 text-kpop-teal" />,
      title: translations['features.item4.title'] || "Modern, Authentic Korean",
      description: translations['features.item4.description'] || "Learn how Koreans really speak today - from cafes to K-pop, from subways to business meetings."
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="gradient-text">{translations['features.title'] ? translations['features.title'].split(',')[0] : 'Real Korean'}</span>
            {translations['features.title'] ? ', ' + translations['features.title'].split(',')[1] : ', Learned Right'}
          </motion.h2>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              variants={item}
              className="pastel-card card-hover border-kpop-pink/10 p-6"
            >
              <div className="flex flex-col items-center text-center md:flex-row md:items-start md:text-left gap-4">
                <div className="p-4 rounded-full bg-pink-50 mb-2 md:mb-0">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

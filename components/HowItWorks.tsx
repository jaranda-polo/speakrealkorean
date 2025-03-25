"use client";

import { motion } from 'framer-motion';
import { BookOpen, Users, Video, FileText, Repeat } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function HowItWorks() {
  const { translations } = useLanguage();
  
  const steps = [
    {
      icon: <BookOpen className="w-10 h-10 text-kpop-pink" />,
      title: translations['how.step1.title'] || "Choose Content",
      description: translations['how.step1.description'] || "Select an interesting topic to make conversations natural and engaging. You can also request any topic you'd like to discuss."
    },
    {
      icon: <Users className="w-10 h-10 text-kpop-purple" />,
      title: translations['how.step2.title'] || "Connect in 1 Minute",
      description: translations['how.step2.description'] || "Get matched with an available Korean tutor in under a minute. Click 'Start Session' to begin your video call instantly."
    },
    {
      icon: <Video className="w-10 h-10 text-kpop-blue" />,
      title: translations['how.step3.title'] || "15-Minute Conversation",
      description: translations['how.step3.description'] || "Chat with a native tutor for 15 minutes with immediate feedback. Extend up to 45 minutes if desired."
    },
    {
      icon: <FileText className="w-10 h-10 text-kpop-teal" />,
      title: translations['how.step4.title'] || "Review Your Report",
      description: translations['how.step4.description'] || "After each session, receive a report with the expressions you learned and personalized feedback."
    },
    {
      icon: <Repeat className="w-10 h-10 text-kpop-yellow" />,
      title: translations['how.step5.title'] || "Continue Learning",
      description: translations['how.step5.description'] || "New tutors review your previous session reports to ensure continuity in your learning journey."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-b from-white to-pink-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {translations['how.title'] ? (
              <>
                {translations['how.title'].split(',')[0]} <span className="gradient-text">15{translations['how.title'].includes('minutes') ? ' minutes' : '분'}</span>
                {translations['how.title'].split(',')[1]}
              </>
            ) : (
              <>
                Just <span className="gradient-text">15 minutes</span> a day adds up
              </>
            )}
          </motion.h2>
        </div>
        
        <div className="relative">
          {/* Vertical line for desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-kpop-pink via-kpop-purple to-kpop-blue"></div>
          
          <div className="space-y-10 md:space-y-20 relative">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-6`}
              >
                {/* Circle on timeline */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-white shadow-lg items-center justify-center border-2 border-kpop-pink">
                  <span className="font-bold text-kpop-pink">{index + 1}</span>
                </div>
                
                {/* Content box */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="pastel-card card-hover bg-white border-kpop-pink/10">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="p-3 rounded-full bg-pink-50">
                        {step.icon}
                      </div>
                      <h3 className="text-xl font-bold">{step.title}</h3>
                    </div>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </div>
                </div>
                
                {/* Empty space for timeline layout */}
                <div className="hidden md:block w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

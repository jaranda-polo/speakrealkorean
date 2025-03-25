"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { Check } from 'lucide-react';

const Pricing: React.FC = () => {
  const { translations } = useLanguage();

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-zinc-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-zinc-900">{translations['pricing.title']}</h2>
          <p className="text-lg text-zinc-600 max-w-3xl mx-auto">{translations['pricing.subtitle']}</p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          {/* Basic Plan */}
          <motion.div 
            className="bg-white p-8 rounded-2xl shadow-lg border border-zinc-200 hover:shadow-xl transition-shadow duration-300"
            variants={fadeIn}
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-zinc-900 mb-2">{translations['pricing.basic.title']}</h3>
              <p className="text-zinc-600">{translations['pricing.basic.description']}</p>
            </div>
            
            <div className="mb-6">
              <span className="text-4xl font-bold text-zinc-900">$49</span>
              <span className="text-zinc-600 ml-2">{translations['pricing.perMonth']}</span>
            </div>
            
            <div className="mb-8">
              <div className="text-kpop-purple font-medium mb-2">{translations['pricing.includes']}:</div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="text-kpop-purple mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>{translations['pricing.basic.sessions']}</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-kpop-purple mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>{translations['pricing.basic.rate']}</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-kpop-purple mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>{translations['pricing.dailyLimit']}</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-kpop-purple mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>{translations['pricing.expiration']}</span>
                </li>
              </ul>
            </div>
            
            <button className="w-full py-3 px-6 rounded-lg bg-kpop-purple text-white font-medium hover:bg-purple-700 transition-colors duration-300">
              {translations['pricing.subscribe']}
            </button>
          </motion.div>
          
          {/* Premium Plan */}
          <motion.div 
            className="bg-white p-8 rounded-2xl shadow-lg border border-zinc-200 relative hover:shadow-xl transition-shadow duration-300"
            variants={fadeIn}
          >
            <div className="absolute -top-4 right-8 bg-kpop-purple text-white px-4 py-1 rounded-full text-sm font-medium">
              {translations['pricing.mostPopular']}
            </div>
            
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-zinc-900 mb-2">{translations['pricing.premium.title']}</h3>
              <p className="text-zinc-600">{translations['pricing.premium.description']}</p>
            </div>
            
            <div className="mb-6">
              <span className="text-4xl font-bold text-zinc-900">$199</span>
              <span className="text-zinc-600 ml-2">{translations['pricing.perMonth']}</span>
            </div>
            
            <div className="mb-8">
              <div className="text-kpop-purple font-medium mb-2">{translations['pricing.includes']}:</div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="text-kpop-purple mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>{translations['pricing.premium.sessions']}</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-kpop-purple mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>{translations['pricing.premium.rate']}</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-kpop-purple mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>{translations['pricing.dailyLimit']}</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-kpop-purple mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>{translations['pricing.expiration']}</span>
                </li>
              </ul>
            </div>
            
            <button className="w-full py-3 px-6 rounded-lg bg-kpop-purple text-white font-medium hover:bg-purple-700 transition-colors duration-300">
              {translations['pricing.subscribe']}
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;

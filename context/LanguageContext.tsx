"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import enTranslations from '@/translations/en';

// Available languages
export type Language = 'en' | 'vi' | 'ja' | 'zh' | 'ko';

// Language context type
type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  translations: Record<string, string>;
};

// Default context values
const defaultContext: LanguageContextType = {
  language: 'en',
  setLanguage: () => {},
  translations: enTranslations,
};

// Create the context
const LanguageContext = createContext<LanguageContextType>(defaultContext);

// Provider component
export const LanguageProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  // Use local storage to persist language preference if available
  const [language, setLanguage] = useState<Language>('en');
  const [translations, setTranslations] = useState(enTranslations);

  // Load translations when language changes
  useEffect(() => {
    const loadTranslations = async () => {
      if (language === 'en') {
        setTranslations(enTranslations);
        return;
      }
      
      try {
        // Dynamic import for other languages
        const module = await import(`@/translations/${language}`);
        setTranslations(module.default);
      } catch (error) {
        console.error(`Error loading ${language} translations:`, error);
        // Fallback to English if translation fails to load
        setTranslations(enTranslations);
      }
    };
    
    loadTranslations();
  }, [language]);

  // Update language settings when language changes
  useEffect(() => {
    // Store the language preference
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', language);
    }
    
    // Update html lang attribute
    document.documentElement.lang = language;
  }, [language]);

  // Check for stored language preference on initial load
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedLanguage = localStorage.getItem('language') as Language;
      if (storedLanguage && ['en', 'vi', 'ja', 'zh', 'ko'].includes(storedLanguage)) {
        setLanguage(storedLanguage);
      } else {
        // Try to detect user's language from browser
        const browserLanguage = navigator.language.split('-')[0] as Language;
        if (['en', 'vi', 'ja', 'zh', 'ko'].includes(browserLanguage)) {
          setLanguage(browserLanguage);
        }
      }
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translations }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook for using the language context
export const useLanguage = () => useContext(LanguageContext);

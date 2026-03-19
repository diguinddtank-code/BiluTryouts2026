'use client';

import React, {createContext, useContext, useState} from 'react';
import {Language, i18n} from '@/lib/i18n';

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof i18n.EN;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({children}: {children: React.ReactNode}) {
  const [language, setLanguage] = useState<Language>('EN');

  const value = {
    language,
    setLanguage,
    t: i18n[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

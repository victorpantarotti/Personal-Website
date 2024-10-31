import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import translationPT_BR from './locales/pt-BR/translation'; 
import translationEN_US from './locales/en-US/translation';

const resources = {
  "pt-BR": {
    translation: translationPT_BR,
  },
  "en-US": {
    translation: translationEN_US,
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "pt-BR",
    // defaultNS: "translations"
  });

export default i18n;
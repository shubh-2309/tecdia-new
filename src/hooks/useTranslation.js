import { useLanguage } from '../contexts/LanguageContext';
import { en } from '../translations/en';
import { jp } from '../translations/jp';
import { cn } from '../translations/cn';

const translations = {
  EN: en,
  JP: jp,
  CN: cn
};

export const useTranslation = () => {
  const { language } = useLanguage();
  
  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        // Fallback to English if translation not found
        value = translations['EN'];
        for (const fallbackKey of keys) {
          if (value && typeof value === 'object' && fallbackKey in value) {
            value = value[fallbackKey];
          } else {
            return key; // Return the key if translation not found
          }
        }
      }
    }
    
    return value || key;
  };
  
  return { t, language };
}; 
import { useCallback } from 'react';
import * as i18next from 'react-i18next';
import locales from '../locales';

export function useTranslation() {
  const { t: iT , i18n: { language, changeLanguage } } = i18next.useTranslation();

  const setLocale = useCallback((locale: keyof typeof locales) => {
    changeLanguage(locale);
    localStorage.locale = locale;
  }, [language]);

  const t = (translation: keyof typeof locales.en.translation) => {
    return iT(translation);
  };

  return {
    t,
    locale: locales[language as keyof typeof locales],
    setLocale
  };
}
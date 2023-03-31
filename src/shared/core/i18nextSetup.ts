import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import translations from '../locales';

i18next
  .use(initReactI18next)
  .init({
    resources: translations,
    lng: localStorage.locale? localStorage.locale : Object.keys(translations)[0],
    fallbackLng: localStorage.locale? localStorage.locale : Object.keys(translations)[0]
  });
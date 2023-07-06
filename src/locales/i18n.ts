import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import ko from '@locales/resources/ko.json';

const userLanguage = window.navigator.language;

const resources = {
  ko: { translation: ko },
};

void i18n.use(initReactI18next).init({
  resources,
  lng: userLanguage || 'ko',
  fallbackLng: 'ko',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

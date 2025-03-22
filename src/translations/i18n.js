import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import en from './en.json';
import hi from './hi.json';

const resources = {en: {translation: en}, hi: {translation: hi}};

const loadLanguage = async () => {
  const savedLang = await AsyncStorage.getItem('language');
  return savedLang || 'en';
};

loadLanguage().then(lang => {
  i18next.use(initReactI18next).init({
    resources,
    lng: lang || 'en',
    fallbackLng: 'en',
    interpolation: {escapeValue: false},
  });
});

export default i18next;

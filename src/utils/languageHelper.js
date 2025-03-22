import i18next from 'i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const changeAppLanguage = async lang => {
  await AsyncStorage.setItem('language', lang);
  i18next.changeLanguage(lang);
};

export const getCurrentLanguage = () => i18next.language;

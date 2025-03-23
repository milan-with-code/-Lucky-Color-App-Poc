import AsyncStorage from '@react-native-async-storage/async-storage';
import httpClient from './httpClient';

export const loginUser = async (emailOrPhone, password) => {
  console.log('emailOrPhone,password :>> ', emailOrPhone, password);
  try {
    const response = await httpClient.post('/auth/login', {
      emailOrPhone,
      password,
    });
    if (response.status === 200) {
      try {
        await AsyncStorage.setItem('token', response.data.token);
      } catch (storageError) {
        console.log('AsyncStorage Error:', storageError);
      }
      return response.data;
    }
  } catch (error) {
    console.log('Login Error:', error);
    throw error;
  }
};

export const registerUser = async userData => {
  try {
    const response = await httpClient.post('/auth/register', userData);
    return response.data;
  } catch (error) {
    console.error('Register Error:', error);
    throw error;
  }
};

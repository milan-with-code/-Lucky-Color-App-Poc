import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {API_URL} from '../config/constants.js';

const httpClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

httpClient.interceptors.request.use(
  async config => {
    try {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    } catch (err) {
      console.log('Token Fetch Error:', err);
    }
    return config;
  },
  error => Promise.reject(error),
);

httpClient.interceptors.response.use(
  response => response,
  error => {
    console.log('API Error:', error?.response, error?.response?.data);
    return Promise.reject(error);
  },
);

export default httpClient;

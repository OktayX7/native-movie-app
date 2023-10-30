import axios from 'axios';
import {apiKey} from '../constants';

const apiBaseUrl = 'https://api.themoviedb.org/3';

export const axiosAgent = axios.create({
  baseURL: apiBaseUrl,
  params: {
    api_key: apiKey,
    language: 'tr-TR',
  },
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosAgent.interceptors.response.use(
  response => response,
  async error => {
    const response = error.response;
    return Promise.resolve(response);
  },
);

axiosAgent.interceptors.request.use(
  async config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

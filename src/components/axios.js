import axios from 'axios';
import config from './config';

const axiosInstance = axios.create({
  baseURL: config.BASE_URL, // Your API base URL
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 50000, // Timeout after 50 seconds
});

// Request interceptor: Add token to headers or handle any setup before the request is sent
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    // Set loading state to true (optional)
    console.log('Loading...');
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor: Handle responses and errors globally
axiosInstance.interceptors.response.use(
  (response) => {
    // Set loading state to false after receiving a response (optional)
    console.log('Response received');
    return response;
  },
  (error) => {
    if (error.response) {
      // Handle specific errors (e.g., 401 Unauthorized)
      if (error.response.status === 401) {
        window.location.href = '/login'; // Redirect to login
      }
      // Handle rate limit error (429)
      if (error.response.status === 429) {
        alert('Rate limit exceeded. Please try again later.');
      }
    } else {
      console.error('Network Error', error);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;

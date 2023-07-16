import axios, { AxiosError, AxiosResponse, HttpStatusCode } from 'axios';

import { ApiError } from '@models/api';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL as string,
  timeout: 10000,
  // withCredentials: true,
});

axiosInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data;
  },
  (error: AxiosError) => {
    const { code, response, message, config } = error;

    if (response) {
      throw new ApiError(message, response.status, config?.url);
    }

    if (code === 'ECONNABORTED' && message.includes('timeout')) {
      throw new ApiError('Request Timeout', HttpStatusCode.RequestTimeout, config?.url);
    }

    throw new ApiError('Service Unavailable', HttpStatusCode.InternalServerError, config?.url);
  },
);

export default axiosInstance;

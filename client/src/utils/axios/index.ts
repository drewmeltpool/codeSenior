import axios from 'axios';
import { url } from 'src/constants';

axios.defaults.baseURL = url;

axios.interceptors.request.use((req) => {
  const token = localStorage.getItem('token') || '';
  axios.defaults.headers.common.Authorization = token;
  return req;
});

export { axios };

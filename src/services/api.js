import axios from 'axios';

const urlLocal = 'http://192.168.43.237:3000';

const api = axios.create({
  baseURL: urlLocal,
});

export default api;
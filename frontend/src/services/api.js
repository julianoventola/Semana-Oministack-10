import axios from 'axios';

const api = axios.create({
  // Node server address
  baseURL: 'http://localhost:3333'
});

export default api;
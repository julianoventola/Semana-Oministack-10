import axios from 'axios';

const api = axios.create({
  // Expo IP address + Node server port
  baseURL: 'http://192.168.15.45:3333'
})

export default api;
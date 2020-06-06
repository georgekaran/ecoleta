import axios from 'axios';

const api = axios.create({
  url: "http://192.168.0.108:3333"
})

export default api;
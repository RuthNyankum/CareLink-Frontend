// // src/config.js
// const config = {
//     apiBaseUrl: 'http://your-backend-api-url.com',
//   };


//   export default config;


import axios from "axios";

const apiBaseUrl = import.meta.env.VITE_BASE_URL;

export const apiClient = axios.create({baseURL:baseURL});
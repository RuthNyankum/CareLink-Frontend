// // Config.js
// import axios from "axios";

// const baseUrl = import.meta.env.VITE_BASE_URL;
// // console.log('ruthuuuu', baseUrl)

// export const apiClient = axios.create({baseURL:baseUrl});
// // console.log('ruthuuuu', apiClient)

// import axios from 'axios';

// const apiClient = axios.create({
//   baseURL: import.meta.env.VITE_BASE_URL,
//   headers: {
//     'Authorization': `Bearer ${localStorage.getItem('token')}`
//   }
// });

import axios from 'axios';

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL, // Use your environment variable for the base URL
  headers: {
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  }
});

// Export the apiClient to be used in other parts of your application
export { apiClient };

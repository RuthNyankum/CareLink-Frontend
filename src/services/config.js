import axios from "axios";

const baseUrl = import.meta.env.VITE_BASE_URL;
// console.log('ruthuuuu', baseUrl)

export const apiClient = axios.create({baseURL:baseUrl});
// console.log('ruthuuuu', apiClient)
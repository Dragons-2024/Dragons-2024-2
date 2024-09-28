import axios from 'axios';

export const axiosApi = axios.create({
    baseURL: 'https://dragons-2024-2-api.onrender.com/',
    timeout: 5000,
})
import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.REACT_APP_RESTAURANT_API_URL
});

export default instance;

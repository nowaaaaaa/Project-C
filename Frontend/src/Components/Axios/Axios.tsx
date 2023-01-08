import Axios from 'axios';

export const axios = Axios.create({ 
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: { Auth: 'Simple Auth'},
    timeout: 3000,
});
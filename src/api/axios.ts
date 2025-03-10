import axios from 'axios';


export const config = axios.create({
    baseURL: "http://localhost:3000"
})
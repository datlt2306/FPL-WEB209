import axios from 'axios';


export const config = axios.create({
    baseURL: "https://api.fake-rest.refine.dev"
})
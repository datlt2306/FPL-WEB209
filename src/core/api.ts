import axios from 'axios'

const instance = axios.create({
    baseURL: import.meta.env.VITE_URL_API
})
export default instance

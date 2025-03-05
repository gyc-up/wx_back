import axios from "axios";
const instance = axios.create({
    baseURL: 'http://112.124.63.215:3000',
    timeout: 3000,
})

instance.interceptors.request.use(
    (config) => {
       

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
    
)
export default instance;
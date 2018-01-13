import axios from 'axios'

let axiosIns = axios.create({});

if (process.env.NODE_ENV == 'development') {
    axiosIns.defaults.baseURL = 'http://172.16.211.149:3333';
} else if (process.env.NODE_ENV == 'production') {
    axiosIns.defaults.baseURL = '';
}




export default axiosIns
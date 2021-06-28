import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-app-8e2bb.firebaseio.com/'
})

export default instance;
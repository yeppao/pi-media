import axios from 'axios';

const createClient = (baseURL) => {
    return axios.create({
        baseURL,
    });
}

export default createClient;
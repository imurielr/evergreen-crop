import axios from 'axios';

const clientAxios = (url, data, headers = {}, method) => {
    return axios({
        method,
        url,
        data,
        headers: {
            'Content-Type': 'application/json',
            ...headers
        }
    });
}

export default clientAxios;
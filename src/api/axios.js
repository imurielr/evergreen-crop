import axios from 'axios';

const clientAxios = (url, data, headers = {}, method) => {
    return axios({
        method,
        url,
        data,
        headers: {
            ...headers
        }
    });
}

export default clientAxios;
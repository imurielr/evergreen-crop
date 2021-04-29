import clientAxios from '../api/axios';

const BASE_URL = process.env.REACT_APP_BASE_URL;

const getPlots = async () => {
    return await clientAxios(`${BASE_URL}/plot`, null, null, 'GET');
}

export {
    getPlots
}
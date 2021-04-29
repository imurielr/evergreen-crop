import clientAxios from '../api/axios';

const BASE_URL = process.env.REACT_APP_BASE_URL;

const getCrops = async () => {
    return await clientAxios(`${BASE_URL}/crops`, null, null, 'GET');
}

const postCrop = async (data) => {
    return await clientAxios(`${BASE_URL}/crops`, data, null, 'POST');
}

export {
    getCrops,
    postCrop
}
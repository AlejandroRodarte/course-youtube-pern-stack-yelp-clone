import axios from '../../axios/axios-restaurants';

const getRestaurants = async () => {

    try {
        const response = await axios.get('/restaurants');
        return [response.data, undefined];
    } catch (e) {
        const error = e.message === 'Network Error' ? { status: 'Error', data: { message: e.message } } : e.response.data;
        return [undefined, error];
    }

};

export default getRestaurants;

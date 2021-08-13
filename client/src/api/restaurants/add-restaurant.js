import axios from '../../axios/axios-restaurants';

const addRestaurant = async (restaurant) => {

    const payload = {
        data: {
            restaurant
        }
    };

    try {
        const response = await axios.post('/restaurants', payload);
        return [response.data, undefined];
    } catch (e) {
        const error = e.message === 'Network Error' ? { status: 'Error', data: { message: e.message } } : e.response.data;
        return [undefined, error];
    }

};

export default addRestaurant;

import axios from '../../axios/axios-restaurants';

const updateRestaurant = async (id, restaurant) => {

    const payload = {
        data: {
            restaurant
        }
    };

    try {
        const response = await axios.put(`/restaurants/${id}`, payload);
        return [response.data, undefined];
    } catch (e) {
        const error = e.message === 'Network Error' ? { status: 'Error', data: { message: e.message } } : e.response.data;
        return [undefined, error];
    }

};

export default updateRestaurant;

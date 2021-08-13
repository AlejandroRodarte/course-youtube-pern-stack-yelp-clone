import axios from '../../axios/axios-restaurants';

const deleteRestaurant = async (id) => {

    try {
        const response = await axios.delete(`/restaurants/${id}`);
        return [response.data, undefined];
    } catch (e) {
        const error = e.message === 'Network Error' ? { status: 'Error', data: { message: e.message } } : e.response.data;
        return [undefined, error];
    }

};

export default deleteRestaurant;

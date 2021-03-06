import axios from '../../axios/axios-restaurants';

const getRestaurant = async (id, params = {}) => {

    try {
        const response = await axios.get(`/restaurants/${id}`, { params });
        return [response.data, undefined];
    } catch (e) {
        return [undefined, e.response.data];
    }

};

export default getRestaurant;

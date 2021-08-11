import axios from '../../axios/axios-restaurants';

const getRestaurant = async (id) => {

    try {
        const response = await axios.get(`/restaurants/${id}`);
        return [response.data, undefined];
    } catch (e) {
        return [undefined, e.response.data];
    }

};

export default getRestaurant;

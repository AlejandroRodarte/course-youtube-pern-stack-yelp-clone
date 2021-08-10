import axios from '../../axios/axios-restaurants';

const deleteRestaurant = async (id) => {

    try {
        const response = await axios.delete(`/restaurants/${id}`);
        return [response.data, undefined];
    } catch (e) {
        return [undefined, e.response.data];
    }

};

export default deleteRestaurant;

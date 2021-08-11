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
        return [undefined, e.response.data];
    }

};

export default updateRestaurant;

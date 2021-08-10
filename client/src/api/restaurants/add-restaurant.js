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
        return [undefined, e.response.data];
    }

};

export default addRestaurant;

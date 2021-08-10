import axios from '../../axios/axios-restaurants';

const getRestaurants = async () => {

    try {
        const response = await axios.get('/restaurants');
        return [response.data, undefined];
    } catch (e) {
        return [undefined, e.response.data];
    }

};

export default getRestaurants;

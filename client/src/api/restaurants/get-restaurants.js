import axios from '../../axios/axios-restaurants';

const getRestaurants = async () => {

    try {
        const response = await axios.get('/restaurants');
        return [response, undefined];
    } catch (e) {
        return [undefined, e];
    }

};

export default getRestaurants;

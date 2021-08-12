import axios from '../../axios/axios-restaurants';

const getReviewsByRestaurantId = async (id) => {

    try {
        const response = await axios.get(`/reviews/restaurant/${id}`);
        return [response.data, undefined];
    } catch (e) {
        return [undefined, e.response.data];
    }

};

export default getReviewsByRestaurantId;

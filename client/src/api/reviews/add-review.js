import axios from '../../axios/axios-restaurants';

const addReview = async (review) => {

    const payload = {
        data: {
            review
        }
    };

    try {
        const response = await axios.post('/reviews', payload);
        return [response.data, undefined];
    } catch (e) {
        const error = e.message === 'Network Error' ? { status: 'Error', data: { message: e.message } } : e.response.data;
        return [undefined, error];
    }

};

export default addReview;

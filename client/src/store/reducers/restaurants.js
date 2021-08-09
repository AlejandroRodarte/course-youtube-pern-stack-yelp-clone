import * as types from '../types';

const initialState = {
    restaurants: [],
    loading: false,
    error: null
};

const restaurantsReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.SET_RESTAURANTS_LOADING_FLAG:
            return state;
        case types.SET_RESTAURANTS_FAIL_FLAG:
            return state;
        case types.START_FETCH_RESTAURANTS:
            return state;
        case types.FETCH_RESTAURANTS:
            return state;
        default:
            return state;
    }

};

export default restaurantsReducer;

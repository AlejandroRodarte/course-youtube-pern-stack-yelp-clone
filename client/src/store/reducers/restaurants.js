import * as types from '../types';

const initialState = {
    restaurants: [],
    loading: false,
    error: null
};

const restaurantsReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.SET_RESTAURANTS_LOADING_FLAG:
            return {
                ...state,
                loading: true,
                error: null
            };
        case types.SET_RESTAURANTS_FAIL_FLAG:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
        case types.FETCH_RESTAURANTS:
            return {
                ...state,
                loading: false,
                restaurants: action.payload.restaurants,
                error: null
            };
        case types.ADD_RESTAURANT:
            return {
                ...state,
                loading: false,
                restaurants: [
                    ...state.restaurants,
                    action.payload.restaurant
                ],
                error: null
            };
        default:
            return state;
    }

};

export default restaurantsReducer;

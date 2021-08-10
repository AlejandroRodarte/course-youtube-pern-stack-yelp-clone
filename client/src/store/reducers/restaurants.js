import * as types from '../types';

const initialState = {
    restaurants: [],
    loading: false,
    error: null,
    selectedRestaurantId: '-1'
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
        case types.DELETE_RESTAURANT:
            return {
                ...state,
                loading: false,
                restaurants: state.restaurants.filter((restaurant) => restaurant.id !== action.payload.id),
                error: null
            };
        case types.SELECT_RESTAURANT_ID:
            return {
                ...state,
                selectedRestaurantId: action.payload.id
            };
        default:
            return state;
    }

};

export default restaurantsReducer;

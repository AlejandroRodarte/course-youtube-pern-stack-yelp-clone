import * as types from '../types';

const initialState = {
    restaurants: [],
    loading: false,
    error: null,
    selectedRestaurant: undefined
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
        case types.SELECT_RESTAURANT:
            return {
                ...state,
                selectedRestaurant: state.restaurants.find((restaurant) => restaurant.id === action.payload.id),
                error: null
            };
        case types.FETCH_RESTAURANT:
            return {
                ...state,
                loading: false,
                selectedRestaurant: {
                    ...state.selectedRestaurant,
                    ...action.payload.restaurant
                },
                error: null
            };
        case types.UPDATE_RESTAURANT: {

            const isListLoaded = state.restaurants.length !== 0;

            return {
                ...state,
                loading: false,
                restaurants: !isListLoaded ?
                    state.restaurants :
                    state.restaurants.map(
                        (restaurant) => restaurant.id === action.payload.restaurant.id ?
                            { ...restaurant, ...action.payload.restaurant } :
                            restaurant
                    ),
                error: null
            };

        }
        case types.CLEAR_RESTAURANTS_ERROR:
            return {
                ...state,
                error: null
            };
        case types.CLEAR_SELECTED_RESTAURANT:
            return {
                ...state,
                selectedRestaurant: undefined
            };
        case types.FETCH_RESTAURANT_REVIEWS:
            return {
                ...state,
                loading: false,
                selectedRestaurant: {
                    ...state.selectedRestaurant,
                    reviews: action.payload.reviews
                },
                error: null
            };
        default:
            return state;
    }

};

export default restaurantsReducer;

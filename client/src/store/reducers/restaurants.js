import * as types from '../types';

const initialState = {
    restaurants: [],
    loading: false,
    error: null,
    selectedRestaurantId: undefined,
    fetchedRestaurant: undefined,
    areRestaurantsLoaded: false
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
                areRestaurantsLoaded: true,
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
                selectedRestaurantId: action.payload.id,
                error: null
            };
        case types.FETCH_RESTAURANT:
            return {
                ...state,
                loading: false,
                fetchedRestaurant: action.payload.restaurant,
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
        case types.CLEAR_SELECTED_RESTAURANT_ID:
            return {
                ...state,
                selectedRestaurantId: undefined
            };
        case types.FETCH_RESTAURANT_REVIEWS:
            return {
                ...state,
                loading: false,
                fetchedRestaurant: state.areRestaurantsLoaded ? state.fetchedRestaurant : {
                    ...state.fetchedRestaurant,
                    reviews: action.payload.reviews
                },
                restaurants: !state.areRestaurantsLoaded ?
                    state.restaurants :
                    state.restaurants.map(
                        (restaurant) => restaurant.id === state.selectedRestaurantId ?
                        { ...restaurant, reviews: action.payload.reviews } :
                        restaurant
                    ),
                error: null
            };
        case types.SET_REVIEWS_FROM_FETCHED_RESTAURANT:
            return {
                ...state,
                restaurants: state.restaurants.map(
                    (restaurant) => restaurant.id === state.fetchedRestaurant.id ?
                    { ...restaurant, reviews: state.fetchedRestaurant.reviews } :
                    restaurant
                )
            };
        case types.CLEAR_FETCHED_RESTAURANT:
            return {
                ...state,
                fetchedRestaurant: undefined
            };
        default:
            return state;
    }

};

export default restaurantsReducer;

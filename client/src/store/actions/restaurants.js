import * as types from '../types';

const setRestaurantsLoadingFlag = () => ({
    type: types.SET_RESTAURANTS_LOADING_FLAG
});

const setRestaurantsFailFlag = (error) => ({
    type: types.SET_RESTAURANTS_FAIL_FLAG,
    payload: {
        error
    }
});

const fetchRestaurants = (restaurants) => ({
    type: types.FETCH_RESTAURANTS,
    payload: {
        restaurants
    }
});

const addRestaurant = (restaurant) => ({
    type: types.ADD_RESTAURANT,
    payload: {
        restaurant
    }
});

const deleteRestaurant = (id) => ({
    type: types.DELETE_RESTAURANT,
    payload: {
        id
    }
});

const selectRestaurant = (id) => ({
    type: types.SELECT_RESTAURANT,
    payload: {
        id
    }
});

const fetchRestaurant = (restaurant) => ({
    type: types.FETCH_RESTAURANT,
    payload: {
        restaurant
    }
});

const updateRestaurant = (restaurant) => ({
    type: types.UPDATE_RESTAURANT,
    payload: {
        restaurant
    }
});

const clearRestaurantsError = () => ({
    type: types.CLEAR_RESTAURANTS_ERROR
});

const clearSelectedRestaurant = () => ({
    type: types.CLEAR_SELECTED_RESTAURANT
});

const fetchRestaurantReviews = (reviews) => ({
    type: types.FETCH_RESTAURANT_REVIEWS,
    payload: {
        reviews
    }
});

const actions = {
    setRestaurantsLoadingFlag,
    setRestaurantsFailFlag,
    fetchRestaurants,
    addRestaurant,
    deleteRestaurant,
    selectRestaurant,
    fetchRestaurant,
    updateRestaurant,
    clearRestaurantsError,
    clearSelectedRestaurant,
    fetchRestaurantReviews
};

export default actions;

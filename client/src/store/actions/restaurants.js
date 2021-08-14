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

const selectRestaurantId = (id) => ({
    type: types.SELECT_RESTAURANT_ID,
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

const clearSelectedRestaurantId = () => ({
    type: types.CLEAR_SELECTED_RESTAURANT_ID
});

const fetchRestaurantReviews = (reviews) => ({
    type: types.FETCH_RESTAURANT_REVIEWS,
    payload: {
        reviews
    }
});

const setReviewsFromFetchedRestaurant = () => ({
    type: types.SET_REVIEWS_FROM_FETCHED_RESTAURANT
});

const clearFetchedRestaurant = () => ({
    type: types.CLEAR_FETCHED_RESTAURANT
});

const addReview = (review) => ({
    type: types.ADD_REVIEW,
    payload: {
        review
    }
});

const actions = {
    setRestaurantsLoadingFlag,
    setRestaurantsFailFlag,
    fetchRestaurants,
    addRestaurant,
    deleteRestaurant,
    selectRestaurantId,
    fetchRestaurant,
    updateRestaurant,
    clearRestaurantsError,
    clearSelectedRestaurantId,
    fetchRestaurantReviews,
    setReviewsFromFetchedRestaurant,
    clearFetchedRestaurant,
    addReview
};

export default actions;

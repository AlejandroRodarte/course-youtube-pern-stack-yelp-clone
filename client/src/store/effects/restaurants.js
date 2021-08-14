import * as types from '../types';

import { restaurantActions } from '../actions';

import { restaurantsApi, reviewsApi } from './../../api';

const startFetchRestaurants = () => async (dispatch) => {

    dispatch(restaurantActions.setRestaurantsLoadingFlag());

    const [response, error] = await restaurantsApi.getRestaurants();

    if (error) {
        dispatch(restaurantActions.setRestaurantsFailFlag(error.data.message));
        return error;
    }

    dispatch(restaurantActions.fetchRestaurants(response.data.restaurants));
    return undefined;

};

const startAddRestaurant = (restaurant) => async (dispatch) => {

    dispatch(restaurantActions.setRestaurantsLoadingFlag());

    const [response, error] = await restaurantsApi.addRestaurant(restaurant);

    if (error) {
        dispatch(restaurantActions.setRestaurantsFailFlag(error.data.message));
        return;
    }

    dispatch(restaurantActions.addRestaurant(response.data.restaurant));

};

const startDeleteRestaurant = (id) => async (dispatch) => {

    dispatch(restaurantActions.setRestaurantsLoadingFlag());

    const [response, error] = await restaurantsApi.deleteRestaurant(id);

    if (error) {
        dispatch(restaurantActions.setRestaurantsFailFlag(error.data.message));
        return;
    }

    dispatch(restaurantActions.deleteRestaurant(response.data.id));

};

const startFetchRestaurant = (id, params = {}) => async (dispatch) => {

    dispatch(restaurantActions.setRestaurantsLoadingFlag());

    const [response, error] = await restaurantsApi.getRestaurant(id, params);

    if (error) {
        dispatch(restaurantActions.setRestaurantsFailFlag(error.data.message));
        return;
    }

    dispatch(restaurantActions.fetchRestaurant(response.data.restaurant));

};

const startUpdateRestaurant = (id, restaurant) => async (dispatch) => {

    dispatch(restaurantActions.setRestaurantsLoadingFlag());

    const [response, error] = await restaurantsApi.updateRestaurant(id, restaurant);

    if (error) {
        dispatch(restaurantActions.setRestaurantsFailFlag(error.data.message));
        return error;
    }

    dispatch(restaurantActions.updateRestaurant(response.data.restaurant));
    return undefined;

};

const startFetchRestaurantReviews = (id) => async (dispatch) => {
    
    dispatch(restaurantActions.setRestaurantsLoadingFlag());

    const [response, error] = await reviewsApi.getReviewsByRestaurantId(id);

    if (error) {
        dispatch(restaurantActions.setRestaurantsFailFlag(error.data.message));
        return;
    }

    dispatch(restaurantActions.fetchRestaurantReviews(response.data.reviews));

};

const startFetchRestaurantsAndSetReviews = () => async (dispatch) => {

    const error = await dispatch(startFetchRestaurants());
    if (error) return;

    dispatch(restaurantActions.setReviewsFromFetchedRestaurant());
    dispatch(restaurantActions.clearFetchedRestaurant());

};

const startAddReview = (review) => async (dispatch) => {

    dispatch(restaurantActions.setRestaurantsLoadingFlag());

    const [response, error] = await reviewsApi.addReview(review);

    if (error) {
        dispatch(restaurantActions.setRestaurantsFailFlag(error.data.message));
        return;
    }

    dispatch(restaurantActions.addReview(response.data.review));

};

const effects = {
    [types.START_FETCH_RESTAURANTS]: startFetchRestaurants,
    [types.START_ADD_RESTAURANT]: startAddRestaurant,
    [types.START_DELETE_RESTAURANT]: startDeleteRestaurant,
    [types.START_FETCH_RESTAURANT]: startFetchRestaurant,
    [types.START_UPDATE_RESTAURANT]: startUpdateRestaurant,
    [types.START_FETCH_RESTAURANT_REVIEWS]: startFetchRestaurantReviews,
    [types.START_FETCH_RESTAURANTS_AND_SET_REVIEWS]: startFetchRestaurantsAndSetReviews,
    [types.START_ADD_REVIEW]: startAddReview
};

export default effects;

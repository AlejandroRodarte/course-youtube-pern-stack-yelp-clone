import * as types from '../types';

import { restaurantActions } from '../actions';

import restaurantsApi from './../../api/restaurants';

const startFetchRestaurants = () => async (dispatch) => {

    dispatch(restaurantActions.setRestaurantsLoadingFlag());

    const [response, error] = await restaurantsApi.getRestaurants();

    if (error) {
        dispatch(restaurantActions.setRestaurantsFailFlag(error.data.message));
        return;
    }

    dispatch(restaurantActions.fetchRestaurants(response.data.restaurants));

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

const effects = {
    [types.START_FETCH_RESTAURANTS]: startFetchRestaurants,
    [types.START_ADD_RESTAURANT]: startAddRestaurant,
    [types.START_DELETE_RESTAURANT]: startDeleteRestaurant
};

export default effects;

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

const effects = {
    startFetchRestaurants,
    startAddRestaurant
};

export default effects;

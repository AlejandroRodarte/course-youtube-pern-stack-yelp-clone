import { restaurantActions } from '../actions';

import restaurantsApi from './../../api/restaurants';

const startFetchRestaurants = () => async (dispatch) => {

    dispatch(restaurantActions.setRestaurantsLoadingFlag());

    const [{ data: response }, error] = await restaurantsApi.getRestaurants();

    if (error) {
        dispatch(restaurantActions.setRestaurantsFailFlag(error));
        return;
    }

    dispatch(restaurantActions.fetchRestaurants(response.data.restaurants));

};

const effects = {
    startFetchRestaurants
};

export default effects;

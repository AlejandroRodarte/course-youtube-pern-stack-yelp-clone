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

const actions = {
    setRestaurantsLoadingFlag,
    setRestaurantsFailFlag,
    fetchRestaurants,
    addRestaurant
};

export default actions;

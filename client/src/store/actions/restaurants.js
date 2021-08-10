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

const actions = {
    setRestaurantsLoadingFlag,
    setRestaurantsFailFlag,
    fetchRestaurants,
    addRestaurant,
    deleteRestaurant,
    selectRestaurantId
};

export default actions;

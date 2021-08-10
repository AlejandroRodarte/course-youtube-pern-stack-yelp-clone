import { useEffect } from 'react';
import { connect } from 'react-redux';

import * as types from '../../../store/types';
import { restaurantEffects } from '../../../store/effects';

import Header from './children/Header';
import AddRestaurantForm from './children/AddRestaurantForm';
import RestaurantList from './children/restaurant-list/RestaurantList';

import Spinner from './../../ui/spinners/BasicSpinner';

const RestaurantFinder = ({
    restaurants,
    loading,
    error,
    onFetchRestaurants,
    onAddRestaurant,
    onDeleteRestaurant
}) => {

    useEffect(() => {
        if (restaurants.length === 0) onFetchRestaurants();
    }, [restaurants.length, onFetchRestaurants]);

    let restaurantListJsx = (
        <RestaurantList 
            restaurants={ restaurants }
            onDeleteRestaurant={ onDeleteRestaurant }
        />
    );

    if (loading) {
        restaurantListJsx = <Spinner />;
    }

    if (error) {
        restaurantListJsx = error;
    }

    return (
        <div>
            <Header />
            <AddRestaurantForm
                onAddRestaurant={ onAddRestaurant }
            />
            { restaurantListJsx }
        </div>
    );

};

const mapStateToProps = (state) => ({
    restaurants: state.restaurants.restaurants,
    loading: state.restaurants.loading,
    error: state.restaurants.error
});

const mapDispatchToProps = (dispatch) => ({
    onFetchRestaurants: () => dispatch(restaurantEffects[types.START_FETCH_RESTAURANTS]()),
    onAddRestaurant: (restaurant) => dispatch(restaurantEffects[types.START_ADD_RESTAURANT](restaurant)),
    onDeleteRestaurant: (id) => dispatch(restaurantEffects[types.START_DELETE_RESTAURANT](id))
});

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantFinder);

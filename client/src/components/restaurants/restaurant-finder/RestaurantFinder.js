import { useEffect } from 'react';
import { connect } from 'react-redux';

import { restaurantEffects } from '../../../store/effects';

import Header from './children/Header';
import AddRestaurantForm from './children/AddRestaurantForm';
import RestaurantList from './children/restaurant-list/RestaurantList';

import Spinner from './../../ui/spinners/BasicSpinner';

const RestaurantFinder = ({ restaurants, loading, error, onFetchRestaurants }) => {

    useEffect(() => {
        if (restaurants.length === 0) onFetchRestaurants();
    }, [restaurants.length, onFetchRestaurants]);

    let restaurantListJsx = (
        <RestaurantList 
            restaurants={ restaurants }
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
            <AddRestaurantForm />
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
    onFetchRestaurants: () => dispatch(restaurantEffects.startFetchRestaurants())
});

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantFinder);

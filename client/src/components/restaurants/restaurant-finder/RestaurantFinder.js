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

    let jsx = (
        <div>
            <Header />
            <AddRestaurantForm />
            <RestaurantList 
                restaurants={ restaurants }
            />
        </div>
    );

    if (loading) {
        jsx = <Spinner />;
    }

    if (error) {
        jsx = (
            <div>
                { error }
            </div>
        );
    }

    return jsx;

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

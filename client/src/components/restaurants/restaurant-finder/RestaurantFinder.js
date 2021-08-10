import { useEffect } from 'react';
import { connect } from 'react-redux';

import { restaurantEffects } from '../../../store/effects';

import Header from './children/Header';
import AddRestaurantForm from './children/AddRestaurantForm';
import RestaurantList from './children/RestaurantList';

const RestaurantFinder = ({ restaurants, onFetchRestaurants }) => {

    useEffect(() => {
        onFetchRestaurants();
    }, [onFetchRestaurants]);

    return (
        <div>
            <Header />
            <AddRestaurantForm />
            <RestaurantList 
                restaurants={ restaurants }
            />
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

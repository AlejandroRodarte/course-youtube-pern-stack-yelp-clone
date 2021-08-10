import { useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import * as types from '../../../store/types';
import { restaurantEffects } from '../../../store/effects';

import Header from './children/Header';
import RestaurantList from './children/restaurant-list/RestaurantList';
import RestaurantForm from '../common/RestaurantForm';

import Spinner from './../../ui/spinners/BasicSpinner';

const RestaurantFinder = ({
    restaurants,
    loading,
    error,
    onFetchRestaurants,
    onAddRestaurant,
    onDeleteRestaurant,
    match
}) => {

    useEffect(() => {
        if (restaurants.length === 0) onFetchRestaurants();
    }, [restaurants.length, onFetchRestaurants]);

    const history = useHistory();

    const onEditButtonClick = useCallback((id) => history.push(`${match.url}/${id}/update`), [history, match.url]);

    let restaurantListJsx = (
        <RestaurantList 
            restaurants={ restaurants }
            onDeleteButtonClick={ onDeleteRestaurant }
            onEditButtonClick={ onEditButtonClick }
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
            <RestaurantForm
                onSubmit={ onAddRestaurant }
                submitButtonLabel="Add Restaurant"
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

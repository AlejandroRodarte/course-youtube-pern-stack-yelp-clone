import { useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import * as types from '../../../store/types';
import { restaurantEffects } from '../../../store/effects';
import { restaurantActions } from '../../../store/actions';

import Header from './children/Header';
import RestaurantList from './children/restaurant-list/RestaurantList';
import RestaurantForm from '../common/RestaurantForm';

import Spinner from './../../ui/spinners/BasicSpinner';

const RestaurantFinder = ({
    restaurants,
    loading,
    error,
    selectedRestaurantExists,
    onFetchRestaurants,
    onAddRestaurant,
    onDeleteRestaurant,
    onSelectRestaurant,
    onClearSelectedRestaurant,
    match
}) => {

    useEffect(() => {
        if (restaurants.length === 0) onFetchRestaurants();
        if (selectedRestaurantExists) onClearSelectedRestaurant();
    }, [restaurants.length, onFetchRestaurants, selectedRestaurantExists, onClearSelectedRestaurant]);

    const history = useHistory();

    const onRecordClick = useCallback((id) => {
        onSelectRestaurant(id);
        history.push(`${match.url}/${id}`);
    }, [onSelectRestaurant, history, match]);

    const onEditButtonClick = useCallback((id) => {
        onSelectRestaurant(id);
        history.push(`${match.url}/${id}/update`);
    }, [history, match.url, onSelectRestaurant]);

    let restaurantListJsx = (
        <RestaurantList 
            restaurants={ restaurants }
            onDeleteButtonClick={ onDeleteRestaurant }
            onEditButtonClick={ onEditButtonClick }
            onRecordClick={ onRecordClick }
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
    error: state.restaurants.error,
    selectedRestaurantExists: state.restaurants.selectedRestaurant !== undefined
});

const mapDispatchToProps = (dispatch) => ({
    onFetchRestaurants: () => dispatch(restaurantEffects[types.START_FETCH_RESTAURANTS]()),
    onAddRestaurant: (restaurant) => dispatch(restaurantEffects[types.START_ADD_RESTAURANT](restaurant)),
    onDeleteRestaurant: (id) => dispatch(restaurantEffects[types.START_DELETE_RESTAURANT](id)),
    onSelectRestaurant: (id) => dispatch(restaurantActions.selectRestaurant(id)),
    onClearSelectedRestaurant: () => dispatch(restaurantActions.clearSelectedRestaurant())
});

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantFinder);

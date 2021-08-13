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
    areRestaurantsLoaded,
    restaurants,
    fetchedRestaurant,
    loading,
    error,
    selectedRestaurantIdExists,
    onFetchRestaurants,
    onFetchRestaurantsAndSetReviews,
    onAddRestaurant,
    onDeleteRestaurant,
    onSelectRestaurantId,
    onClearSelectedRestaurantId,
    onClearFetchedRestaurant,
    match,
    location
}) => {

    useEffect(() => {
        
        const { from: fromPath = 'none' } = location.state || {};

        switch (fromPath) {
            case 'reviews':
                if (!areRestaurantsLoaded) {
                    if (fetchedRestaurant) onFetchRestaurantsAndSetReviews();
                    else onFetchRestaurants();
                }
                break;
            case 'update':
            case 'none':
            default:
                if (fetchedRestaurant) onClearFetchedRestaurant();
                if (!fetchedRestaurant && !areRestaurantsLoaded) onFetchRestaurants();
                break;
        }

        if (selectedRestaurantIdExists) onClearSelectedRestaurantId();

    }, [
        restaurants.length,
        onFetchRestaurants,
        onClearSelectedRestaurantId,
        areRestaurantsLoaded,
        selectedRestaurantIdExists,
        onFetchRestaurantsAndSetReviews,
        location.state,
        fetchedRestaurant,
        onClearFetchedRestaurant
    ]);

    const history = useHistory();

    const onRecordClick = useCallback((id) => {
        onSelectRestaurantId(id);
        history.push(`${match.url}/${id}`);
    }, [onSelectRestaurantId, history, match.url]);

    const onEditButtonClick = useCallback((id) => {
        onSelectRestaurantId(id);
        history.push(`${match.url}/${id}/update`);
    }, [history, match.url, onSelectRestaurantId]);

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
    areRestaurantsLoaded: state.restaurants.areRestaurantsLoaded,
    restaurants: state.restaurants.restaurants,
    fetchedRestaurant: state.restaurants.fetchedRestaurant,
    loading: state.restaurants.loading,
    error: state.restaurants.error,
    selectedRestaurantIdExists: state.restaurants.selectedRestaurantId !== undefined
});

const mapDispatchToProps = (dispatch) => ({
    onFetchRestaurants: () => dispatch(restaurantEffects[types.START_FETCH_RESTAURANTS]()),
    onFetchRestaurantsAndSetReviews: () => dispatch(restaurantEffects[types.START_FETCH_RESTAURANTS_AND_SET_REVIEWS]()),
    onAddRestaurant: (restaurant) => dispatch(restaurantEffects[types.START_ADD_RESTAURANT](restaurant)),
    onDeleteRestaurant: (id) => dispatch(restaurantEffects[types.START_DELETE_RESTAURANT](id)),
    onSelectRestaurantId: (id) => dispatch(restaurantActions.selectRestaurantId(id)),
    onClearSelectedRestaurantId: () => dispatch(restaurantActions.clearSelectedRestaurantId()),
    onClearFetchedRestaurant: () => dispatch(restaurantActions.clearFetchedRestaurant())
});

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantFinder);

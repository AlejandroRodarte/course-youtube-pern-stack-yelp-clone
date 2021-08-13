import { useEffect, useCallback } from 'react'
import { useParams, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

import * as types from '../../../store/types';
import { restaurantEffects } from '../../../store/effects';
import { restaurantActions } from '../../../store/actions';

import RestaurantForm from './../common/RestaurantForm';
import Spinner from './../../ui/spinners/BasicSpinner';

const RestaurantUpdate = ({
    areRestaurantsLoaded,
    fetchedRestaurant,
    selectedRestaurant,
    onStartFetchRestaurant,
    onStartUpdateRestaurant,
    onClearRestaurantsError,
    loading,
    error
}) => {

    const { id } = useParams();
    const history = useHistory();

    useEffect(() => {
        if (fetchedRestaurant || error) return;
        if (!areRestaurantsLoaded) onStartFetchRestaurant(id);
    }, [id, onStartFetchRestaurant, error, areRestaurantsLoaded, fetchedRestaurant]);

    const onSubmit = useCallback(async (restaurant) => {
        const error = await onStartUpdateRestaurant(id, restaurant);
        if (!error) history.push('/restaurants', { from: 'update' });
    }, [onStartUpdateRestaurant, id, history]);

    const onRedirectClick = useCallback((path) => {
        if (error) onClearRestaurantsError();
        history.push(path);
    }, [error, history, onClearRestaurantsError]);

    const restaurant = areRestaurantsLoaded ? selectedRestaurant : fetchedRestaurant;

    let restaurantFormJsx = (
        <RestaurantForm
            onSubmit={ onSubmit }
            submitButtonLabel="Update Restaurant"
            restaurant={ restaurant }
        />
    );

    let restaurantReviewsButtonJsx = (
        <button
            type="button"
            className="col-4 btn btn-warning mx-2"
            onClick={ () => onRedirectClick(`/restaurants/${id}`) }
        >
            Restaurant Reviews
        </button>
    );

    if (loading) {
        restaurantFormJsx = <Spinner />;
    }

    if (error) {
        restaurantFormJsx = error;
        restaurantReviewsButtonJsx = null;
    }

    return (
        <div
            className="text-center"
        >
            <h1>
                Update Restaurant
            </h1>
            { restaurantFormJsx }
            <div
                className="row justify-content-center mx-2"
            >
                <button
                    type="button"
                    className="col-4 btn btn-warning mx-2"
                    onClick={ () => onRedirectClick('/restaurants') }
                >
                    Restaurant List
                </button>
                { restaurantReviewsButtonJsx }
            </div>
        </div>
    );

};

const mapStateToProps = (state, ownProps) => ({
    areRestaurantsLoaded: state.restaurants.areRestaurantsLoaded,
    fetchedRestaurant: state.restaurants.fetchedRestaurant,
    selectedRestaurant: state.restaurants.restaurants.find((restaurant) => restaurant.id === ownProps.match.params.id),
    loading: state.restaurants.loading,
    error: state.restaurants.error
});

const mapDispatchToProps = (dispatch) => ({
    onStartFetchRestaurant: (id) => dispatch(restaurantEffects[types.START_FETCH_RESTAURANT](id)),
    onStartUpdateRestaurant: (id, restaurant) => dispatch(restaurantEffects[types.START_UPDATE_RESTAURANT](id, restaurant)),
    onClearRestaurantsError: () => dispatch(restaurantActions.clearRestaurantsError())
});

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantUpdate);

import { useEffect, useCallback } from 'react'
import { useParams, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

import * as types from '../../../store/types';
import { restaurantEffects } from '../../../store/effects';
import { restaurantActions } from '../../../store/actions';

import RestaurantForm from './../common/RestaurantForm';
import Spinner from './../../ui/spinners/BasicSpinner';

const RestaurantUpdate = ({
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
        if (selectedRestaurant || error) return;
        onStartFetchRestaurant(id);
    }, [id, onStartFetchRestaurant, selectedRestaurant, error]);

    const onSubmit = useCallback(async (restaurant) => {
        const error = await onStartUpdateRestaurant(id, restaurant);
        if (!error) history.push('/restaurants');
    }, [onStartUpdateRestaurant, id, history]);

    const onGoBackClick = () => {
        if (error) onClearRestaurantsError();
        history.push('/restaurants');
    };

    let restaurantFormJsx = (
        <RestaurantForm
            onSubmit={ onSubmit }
            submitButtonLabel="Update Restaurant"
            restaurant={ selectedRestaurant }
        />
    );

    if (loading) {
        restaurantFormJsx = <Spinner />;
    }

    if (error) {
        restaurantFormJsx = error;
    }

    return (
        <div
            className="text-center"
        >
            <h1>
                Update Restaurant
            </h1>
            { restaurantFormJsx }
            <div>
                <button
                    type="button"
                    className="btn btn-warning"
                    onClick={ onGoBackClick }
                >
                    Go back to restaurants list
                </button>
            </div>
        </div>
    );

};

const mapStateToProps = (state) => ({
    selectedRestaurant: state.restaurants.selectedRestaurant,
    loading: state.restaurants.loading,
    error: state.restaurants.error
});

const mapDispatchToProps = (dispatch) => ({
    onStartFetchRestaurant: (id) => dispatch(restaurantEffects[types.START_FETCH_RESTAURANT](id)),
    onStartUpdateRestaurant: (id, restaurant) => dispatch(restaurantEffects[types.START_UPDATE_RESTAURANT](id, restaurant)),
    onClearRestaurantsError: () => dispatch(restaurantActions.clearRestaurantsError())
});

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantUpdate);

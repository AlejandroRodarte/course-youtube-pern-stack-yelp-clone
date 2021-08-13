import { useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

import * as types from '../../../store/types';
import { restaurantEffects } from '../../../store/effects';
import { restaurantActions } from '../../../store/actions';

import ReviewList from './../../reviews/review-list/ReviewList';
import ReviewForm from './../../reviews/review-form/ReviewForm';

import Spinner from './../../ui/spinners/BasicSpinner';

const RestaurantReviews = ({
    areRestaurantsLoaded,
    fetchedRestaurant,
    selectedRestaurant,
    error,
    loading,
    onStartFetchRestaurant,
    onStartFetchRestaurantReviews,
    onClearRestaurantsError
}) => {

    const { id } = useParams();
    const history = useHistory();

    useEffect(() => {
        if (error) return;

        if (!areRestaurantsLoaded) {
            if (!fetchedRestaurant) onStartFetchRestaurant(id, { populateFields: 'reviews' });
            else if (!fetchedRestaurant.reviews) onStartFetchRestaurantReviews(id);
            return;
        }

        if (!selectedRestaurant.reviews) onStartFetchRestaurantReviews(id);

    }, [
        selectedRestaurant,
        id,
        error,
        onStartFetchRestaurant,
        onStartFetchRestaurantReviews,
        areRestaurantsLoaded,
        fetchedRestaurant
    ]);

    const onRedirectClick = useCallback((path) => {
        if (error) onClearRestaurantsError();
        history.push(path, { from: 'reviews' });
    }, [error, history, onClearRestaurantsError]);

    const restaurant = areRestaurantsLoaded ? selectedRestaurant : fetchedRestaurant;

    let reviewListJsx = !restaurant ? null : (
        <>
            <h1
                className="text-center display-1"
            >
                { restaurant.name }
            </h1>
            <div
                className="m-2"
            >
                {
                    (restaurant.reviews && restaurant.reviews.length > 0) ?
                    <ReviewList
                        reviews={ restaurant.reviews }
                    /> :
                    <p>
                        No reviews. Be the first one to post your opinion!
                    </p>
                }
            </div>
            <ReviewForm/>
        </>
    );

    let updateRestaurantButtonJsx = (
        <button
            type="button"
            className="col-4 btn btn-warning mx-2"
            onClick={ () => onRedirectClick(`/restaurants/${id}/update`) }
        >
            Update Restaurant
        </button>
    );

    if (loading) {
        reviewListJsx = <Spinner />;
    }

    if (error) {
        reviewListJsx = error;
        updateRestaurantButtonJsx = null;
    }

    return (
        <div>
            { reviewListJsx }
            <div
                className="row justify-content-center mx-4"
            >
                <button
                    type="button"
                    className="col-6 btn btn-warning mx-2"
                    onClick={ () => onRedirectClick('/restaurants') }
                >
                    Restaurant List
                </button>
                { updateRestaurantButtonJsx }
            </div>
        </div>
    );

}

const mapStateToProps = (state, ownProps) => ({
    areRestaurantsLoaded: state.restaurants.areRestaurantsLoaded,
    fetchedRestaurant: state.restaurants.fetchedRestaurant,
    selectedRestaurant: state.restaurants.restaurants.find((restaurant) => restaurant.id === ownProps.match.params.id),
    loading: state.restaurants.loading,
    error: state.restaurants.error
});

const mapDispatchToProps = (dispatch) => ({
    onStartFetchRestaurant: (id, params = {}) => dispatch(restaurantEffects[types.START_FETCH_RESTAURANT](id, params)),
    onStartFetchRestaurantReviews: (id, storeOnFetchedRestaurant) => dispatch(restaurantEffects[types.START_FETCH_RESTAURANT_REVIEWS](id, storeOnFetchedRestaurant)),
    onClearRestaurantsError: () => dispatch(restaurantActions.clearRestaurantsError())
});

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantReviews);

import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

import * as types from '../../../store/types';
import { restaurantEffects } from '../../../store/effects';
import { restaurantActions } from '../../../store/actions';

import ReviewList from './../../reviews/review-list/ReviewList';
import ReviewForm from './../../reviews/review-form/ReviewForm';

const RestaurantReviews = ({
    selectedRestaurant,
    error,
    onStartFetchRestaurant,
    onStartFetchRestaurantReviews,
    onClearRestaurantsError
}) => {

    const { id } = useParams();
    const history = useHistory();

    const onGoBackClick = () => {
        if (error) onClearRestaurantsError();
        history.push('/restaurants');
    };

    useEffect(() => {

        if (error) return;

        if (!selectedRestaurant) {
            onStartFetchRestaurant(id, { populateFields: 'reviews' });
            return;
        }

        if (!selectedRestaurant.reviews) onStartFetchRestaurantReviews(id);

    }, [selectedRestaurant, id, error, onStartFetchRestaurant, onStartFetchRestaurantReviews]);

    return (
        <div>
            {
                selectedRestaurant &&
                (
                    <>
                        <h1
                            className="text-center display-1"
                        >
                            { selectedRestaurant.name }
                        </h1>
                        <div
                            className="m-2"
                        >
                            <ReviewList />
                        </div>
                        <ReviewForm />
                        <div>
                        <button
                            type="button"
                            className="btn btn-warning"
                            onClick={ onGoBackClick }
                        >
                            Go back to restaurants list
                        </button>
                    </div>
                    </>
                )
            }
        </div>
    );

}

const mapStateToProps = (state) => ({
    selectedRestaurant: state.restaurants.selectedRestaurant,
    loading: state.restaurants.loading,
    error: state.restaurants.error
});

const mapDispatchToProps = (dispatch) => ({
    onStartFetchRestaurant: (id, params = {}) => dispatch(restaurantEffects[types.START_FETCH_RESTAURANT](id, params)),
    onStartFetchRestaurantReviews: (id) => dispatch(restaurantEffects[types.START_FETCH_RESTAURANT_REVIEWS](id)),
    onClearRestaurantsError: () => dispatch(restaurantActions.clearRestaurantsError())
});

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantReviews);

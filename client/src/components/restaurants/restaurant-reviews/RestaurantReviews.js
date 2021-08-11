import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import * as types from '../../../store/types';
import { restaurantEffects } from '../../../store/effects';

const RestaurantReviews = ({
    selectedRestaurant,
    error,
    onStartFetchRestaurant
}) => {

    const { id } = useParams();

    useEffect(() => {
        if (selectedRestaurant || error) return;
        onStartFetchRestaurant(id);
    });

    return (
        <div>
            <h1
                className="text-center display-1"
            >
                { selectedRestaurant && selectedRestaurant.name }
            </h1>
        </div>
    );

}

const mapStateToProps = (state) => ({
    selectedRestaurant: state.restaurants.selectedRestaurant,
    loading: state.restaurants.loading,
    error: state.restaurants.error
});

const mapDispatchToProps = (dispatch) => ({
    onStartFetchRestaurant: (id) => dispatch(restaurantEffects[types.START_FETCH_RESTAURANT](id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantReviews);

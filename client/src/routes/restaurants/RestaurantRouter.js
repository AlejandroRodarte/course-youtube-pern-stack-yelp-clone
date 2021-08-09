import React from 'react';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';

import withSuspense from '../../hoc/withSuspense/withSuspense';

const RestaurantFinder = withSuspense(React.lazy(() => import('../../components/restaurants/RestaurantFinder')));
const RestaurantReviews = withSuspense(React.lazy(() => import('../../components/restaurants/RestaurantReviews')));
const RestaurantUpdate = withSuspense(React.lazy(() => import('../../components/restaurants/RestaurantUpdate')));

const RestaurantRouter = ({ match }) => (
    <Switch>
        <Route
            exact
            path={ match.path }
            component={ RestaurantFinder }
        />
        <Route
            path={ `${match.path}/:id(\\d+)/update` }
            component={ RestaurantUpdate }
        />
        <Route
            path={ `${match.path}/:id(\\d+)` }
            component={ RestaurantReviews }
        />
        <Redirect
            to={ match.url }
        />
    </Switch>
);

export default withRouter(RestaurantRouter);

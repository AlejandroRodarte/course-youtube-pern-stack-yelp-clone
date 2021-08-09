import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import withSuspense from '../hoc/withSuspense/withSuspense';

const RestaurantContainer = withSuspense(React.lazy(() => import('../containers/restaurants/RestaurantContainer')));

const AppRouter = () => (
    <Switch>
        <Route
            path="/restaurants"
            component={ RestaurantContainer }
        />
        <Redirect
            to="/restaurants"
        />
    </Switch>
);

export default AppRouter;

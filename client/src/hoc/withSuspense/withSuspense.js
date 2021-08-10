import { Suspense } from 'react';

import Spinner from '../../components/ui/spinners/BasicSpinner';

const withSuspense = (WrappedComponent) => (props) => (
    <Suspense fallback={ <Spinner /> }>
        <WrappedComponent { ...props } />
    </Suspense>
);

export default withSuspense;

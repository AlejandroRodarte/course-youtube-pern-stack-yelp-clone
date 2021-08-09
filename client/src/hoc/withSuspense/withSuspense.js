import { Suspense } from 'react';

const withSuspense = (WrappedComponent) => (props) => (
    <Suspense fallback={ <div>Loading...</div> }>
        <WrappedComponent { ...props } />
    </Suspense>
);

export default withSuspense;

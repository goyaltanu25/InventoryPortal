import Product from './Products/Product';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import React from 'react';

const appWrapper = ()=>{
    return (
        <ErrorBoundary>
            <Product/>
        </ErrorBoundary>
    )
}

export default appWrapper;
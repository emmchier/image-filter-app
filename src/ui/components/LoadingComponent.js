import React from 'react';

export const LoadingComponent = () => {
    return (
        <div className="overlay alignX">
            <div className="spinners-content">
                <div className="spinner-grow loading-item" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
                <div className="spinner-grow loading-item" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
                <div className="spinner-grow loading-item" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        </div>
    )
}

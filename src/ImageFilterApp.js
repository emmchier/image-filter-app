import React from 'react';

import { AppRouter } from './router/AppRouter';
import './styles/main.scss';

export const ImageFilterApp = () => {
    return (
        <div className="main">
            <AppRouter />
        </div>
    )
}

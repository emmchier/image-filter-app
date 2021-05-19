import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import { useFetchImgs } from '../hooks/useFetchImgs';
  
import { DashboardScreen } from '../pages/DashboardScreen';
import { LoadingComponent } from '../ui/components/LoadingComponent';

export const AppRouter = () => {

    const { loading } = useFetchImgs();
    
    return (
        <Router>
            { loading && <LoadingComponent /> }
            <Switch>
                <Route exact path="/" component={ DashboardScreen } />
                <Redirect to="/" />
            </Switch>
        </Router>
    );
}

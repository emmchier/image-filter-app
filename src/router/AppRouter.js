import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
  
import { DashboardScreen } from '../pages/DashboardScreen';

export const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={ DashboardScreen } />
                <Redirect to="/" />
            </Switch>
        </Router>
    );
}

import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
  
import { DashboardScreen } from '../pages/DashboardScreen';
import { Navbar } from '../ui/components/Navbar';

export const AppRouter = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/" component={ DashboardScreen } />
                <Redirect to="/" />
            </Switch>
        </Router>
    );
}

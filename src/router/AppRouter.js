import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
  
import { HomeScreen } from '../pages/HomeScreen';
import { Navbar } from '../ui/components/Navbar';

export const AppRouter = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/" component={ HomeScreen } />
                <Redirect to="/" />
            </Switch>
        </Router>
    );
}

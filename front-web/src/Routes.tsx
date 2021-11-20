import React from "react";
import { Router, Switch, Route } from 'react-router-dom';
import Navbar from "./core/components/Navbar";
import Login from "./pages/Auth";
import Movies from "./pages/Movies";
import history from "./core/utils/history";
import PrivateRoute from "core/components/Routes/PrivateRoute";

/*
                <PrivateRoute path="/moveis/MoviesId" allowedRoutes={['ROLE_MEMBER']}>
                    <MoviesId />
                </PrivateRoute> 
                */

const Routes = () => {
    return(
        <Router history={history}>
            <Navbar />
            <Switch>
                <Route path="/" exact>
                    <Login />
                </Route>
                <PrivateRoute path="/movies">
                    <Movies />
                </PrivateRoute>
               
            </Switch>
        </Router>
    )
}

export default Routes;
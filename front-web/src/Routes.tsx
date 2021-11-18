import React from "react";
import { Router, Switch, Route } from 'react-router-dom';
import Navbar from "./core/components/Navbar";
import Login from "./pages/Auth";
import Movies from "./pages/Movies";
import history from "./core/utils/history";
import PrivateRoute from "core/components/Routes/PrivateRoute";
import MoviesId from "pages/Movies/MoviesId";

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
                <PrivateRoute path="/moveis/MoviesId" allowedRoutes={['ROLE_MEMBER']}>
                    <MoviesId />
                </PrivateRoute>
            </Switch>
        </Router>
    )
}

export default Routes;
import React from "react";
import { Router, Switch, Route } from 'react-router-dom';
import Navbar from "./core/components/Navbar";
import Auth from "./pages/Auth";
import Movies from "./pages/Movies";
import history from "./core/utils/history";
import PrivateRoute from "core/components/Routes/PrivateRoute";
import MoviesDetails from "pages/Movies/components/MovieCard/MovieDetails";



const Routes = () => {
    return(
        <Router history={history}>
            <Navbar />
            <Switch>
                <Route path="/" exact>
                    <Auth />
                </Route>
                <PrivateRoute exact path="/movies" component={Movies} />                   
                <PrivateRoute path="/movies/:movieId" component={MoviesDetails} />                              
            </Switch>
        </Router>
    )
}

export default Routes;
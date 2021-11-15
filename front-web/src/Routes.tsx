import React from "react";
import { Router, Switch, Route } from 'react-router-dom';
import Navbar from "./core/components/Navbar";
import Login from "./pages/Auth";
import Movies from "./pages/Movies";
import history from "./core/utils/history";

const Routes = () => {
    return(
        <Router history={history}>
            <Navbar />
            <Switch>
                <Route path="/" exact>
                    <Login />
                </Route>
                <Route path="/movies">
                    <Movies />
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes;
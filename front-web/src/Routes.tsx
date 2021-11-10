import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from "./core/components/Navbar";
import Login from "./pages/Login";
import Movies from "./pages/Movies";

const Routes = () => {
    return(
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route path="/" exact>
                    <Login />
                </Route>
                <Route path="/movies">
                    <Movies />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;
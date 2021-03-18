import React from 'react';
import {Route, Switch, Redirect, useLocation} from 'react-router-dom';
import {PrivateRoute} from "./components/_atomics/PrivateRoute";
import {Nav} from "./components/layout/Navigation";
import {Home} from "./components/pages/Home";
import {Login} from "./components/pages/Login";

function App() {
    const pathname = useLocation().pathname || '';

    return (
        <div>
            <Nav/>
            <div className="container pt-4">
                <Switch>
                    <Redirect from="/:url*(/+)" to={pathname.slice(0, -1)}/>
                    <PrivateRoute exact path="/scan" component={Home}/>
                    <Route path="/" component={Login}/>
                    <Redirect from="*" to="/"/>
                </Switch>
            </div>
        </div>
    );
}

export {App};

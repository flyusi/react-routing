import React from "react";
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { Layout, Menu } from "antd";

import "./style.css";
import { RoutingLayout, RoutingMenu } from "../core/components";
import { Home, About, Settings, Feedback, NotFound } from "../pages";

export const Routing = () => (
    <Router>
        <RoutingLayout menu={<RoutingMenu />}>
            <Switch>
                <Route exact path="/">
                    <Redirect to="/home"/>
                </Route>

                <Route path="/home">
                    <Home />
                </Route>

                <Route path="/about">
                    <About />
                </Route>

                <Route path="/settings">
                    <Settings />
                </Route>

                <Route path="/feedback">
                    <Feedback />
                </Route>
                
                <NotFound />
            </Switch>
        </RoutingLayout>
    </Router>
)
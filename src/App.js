import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import Inputform from "./Components/InputForm";
import Two from "./Components/Two";
import Three from "./Components/Three";
import NavigationBar from "./App.NavBar";
import Footer from "./App.Footer";
import NotFound from "./App.NotFound";
import Child1 from "./Components/Child1";
import Child2 from "./Components/Child2";

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pages: [
                { Name: "Home", Path: "/", component: Home },
                {
                    Name: "Input Form",
                    Path: "/InputForm",
                    component: Inputform,
                },
                { Name: "Two", Path: "/two", component: Two },
                { Name: "Three", Path: "/three", component: Three },
            ],
        };
    }

    render() {
        return (
            <div>
                <NavigationBar pages={this.state.pages} />
                {this.appRoutes()}
                <Footer />
            </div>
        );
    }

    appRoutes() {
        let routes = this.state.pages.map((page) => {
            return (
                <Route
                    key={page.Name}
                    path={page.Path}
                    exact
                    render={(props) => <page.component {...props} />}
                />
            );
        });

        let result = (
            <Switch>
                {routes}

                <Route
                    exact
                    path="/two/child1"
                    render={(props) => <Child1 {...props} />}
                />

                <Route
                    exact
                    path="/two/child2"
                    render={(props) => <Child2 {...props} />}
                />

                <Route exact children={<NotFound />} />
            </Switch>
        );

        return result;
    }
}

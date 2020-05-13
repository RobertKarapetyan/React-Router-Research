import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import One from "./Components/One";
import Two from "./Components/Two";
import Three from "./Components/Three";
import NavigationBar from "./App.NavBar";
import Footer from "./App.Footer";

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pages: [
                { Name: "Home", Path: "/", component: Home },
                { Name: "One", Path: "/One", component: One },
                { Name: "Two", Path: "/Two", component: Two },
                { Name: "Three", Path: "/Three", component: Three },
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
                    children={<page.component />}
                />
            );
        });

        let result = <Switch>{routes}</Switch>;

        return result;
    }
}

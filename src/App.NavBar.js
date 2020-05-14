import React from "react";
import { Link } from "react-router-dom";

export default class NavigationBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pages: this.props.pages,
        };
    }

    render() {
        return <div>{this.body()}</div>;
    }

    body() {
        let result = (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div id="navbarNav">{this.uls()}</div>
            </nav>
        );

        return result;
    }

    uls() {
        let links = this.state.pages.map((page) => {
            return (
                <li key={page.Name} className="nav-item nav-link">
                    <Link to={page.Path}>
                        <span style={{ color: "white" }}>{page.Name}</span>{" "}
                    </Link>
                </li>
            );
        });

        let result = <ul className="navbar-nav">{links}</ul>;

        return result;
    }
}

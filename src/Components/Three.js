import React from "react";
import { Link } from "react-router-dom";

export default class Three extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: "" };
    }

    render() {
        let result = <div style={{ margin: 15 }}>{this.goTo()}</div>;

        return result;
    }

    goTo() {
        let result = (
            <form
                style={{ margin: 15 }}
                onSubmit={(event) => {
                    event.preventDefault();
                }}
            >
                <label>Go To:</label>
                <input
                    style={{ marginLeft: 10 }}
                    onChange={(event) => {
                        this.state.text = event.target.value;
                        this.forceUpdate();
                    }}
                    type="text"
                    name="name"
                />

                {this.goButton()}
            </form>
        );

        return result;
    }

    goButton() {
        let destination = null;

        destination = {
            pathname: `${this.state.text}`,
            state: { header: "Hello from Child 1" },
        };

        let result = (
            <Link style={{ marginLeft: 10 }} to={destination}>
                <span className="btn btn-primary btn-sm">
                    <span className="glyphicon glyphicon-home"></span>
                    Go
                </span>
            </Link>
        );

        return result;
    }
}

import React from "react";
import { Prompt } from "react-router-dom";

export default class Inputform extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isBlocking: false,
        };
    }

    render() {
        let result = this.form();

        return result;
    }

    form() {
        let result = (
            <form
                style={{ margin: 15 }}
                onSubmit={(event) => {
                    event.preventDefault();
                }}
            >
                {this.preventUnmount()}

                <label>Name:</label>
                <input
                    style={{ marginLeft: 10 }}
                    onChange={(event) => {
                        this.state.isBlocking = event.target.value.length > 0;

                        this.forceUpdate();
                    }}
                    type="text"
                    name="name"
                />

                <button
                    style={{ marginLeft: 10 }}
                    className="btn btn-primary"
                    type="submit"
                    value="Submit"
                >
                    Submit
                </button>
            </form>
        );

        return result;
    }

    preventUnmount() {
        let result = (
            <Prompt
                when={this.state.isBlocking}
                message={(location) => {
                    return `Are you sure you want to transition to ${location.pathname}`;
                }}
            />
        );

        return result;
    }
}

import React from "react";

export default class Inputform extends React.Component {
    constructor(props) {
        super(props);
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
                <label>Name:</label>
                <input style={{ marginLeft: 10 }} type="text" name="name" />

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
}

import React from "react";

export default class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        let result = (
            <div
                className="container-fluids body-content"
                style={{ margin: 15 }}
            >
                <hr />
                <footer style={{ marginLeft: 10 }}></footer>
                <p>&copy; Demo Application </p>
            </div>
        );

        return result;
    }
}

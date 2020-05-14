import React from "react";
import { Link } from "react-router-dom";

export default class Two extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        let result = (
            <div style={{ margin: 15 }}>
                <div>Two</div>
                <Link to="/Child">Go to</Link>
            </div>
        );

        return result;
    }

    componentWillUnmount() {
        console.log("Unmounting");
    }
}

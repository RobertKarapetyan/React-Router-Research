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
                <div>
                    <Link
                        to={{
                            pathname: `${this.props.match.url}/child1`,
                            state: { header: "Hello from Child 1" },
                        }}
                    >
                        <span className="btn btn-success btn-lg">
                            <span className="glyphicon glyphicon-home"></span>
                            Take Me to Child One
                        </span>
                    </Link>
                </div>

                <div style={{ marginTop: 15 }}>
                    <Link
                        to={{
                            pathname: `${this.props.match.url}/child2`,
                            state: { header: "Hello from Child 2" },
                        }}
                    >
                        <span className="btn btn-success btn-lg">
                            <span className="glyphicon glyphicon-home"></span>
                            Take Me Child Two
                        </span>
                    </Link>
                </div>
            </div>
        );

        return result;
    }

    componentWillUnmount() {
        console.log("Unmounting");
    }
}

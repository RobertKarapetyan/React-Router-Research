import React from "react";
import { Link } from "react-router-dom";

export default class NotFound extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        let result = (
            <div>
                <div className="container">
                    <div
                        className="row"
                        style={{ textAlign: "center", margin: 15 }}
                    >
                        <div className="col-md-12">
                            <div className="error-template">
                                <h1>Oops!</h1>
                                <h2>404 Not Found</h2>
                                <div className="error-details">
                                    Sorry, an error has occured, Requested page
                                    not found!
                                </div>
                                <div
                                    className="error-actions"
                                    style={{ marginTop: 10 }}
                                >
                                    <Link to="/">
                                        <span className="btn btn-primary btn-lg">
                                            <span className="glyphicon glyphicon-home"></span>
                                            Take Me Home
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );

        return result;
    }
}

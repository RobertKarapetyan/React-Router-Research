import React from "react";

export default class Child2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { header: this.props.location.state.header };
    }

    render() {
        let result = (
            <div style={{ margin: 15 }}>
                <h3>{this.state.header}</h3>
            </div>
        );

        return result;
    }
}

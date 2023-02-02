import React, { Component } from "react";

export class Increment extends Component {
    state = { cnt: 0 }

    increment = () => {
        this.setState({ cnt: this.state.cnt + 1 })
    }
    render() {
        return (
            <div>
                <button onClick={this.increment}>Increment</button>
                <div>Count: {this.state.cnt}</div>
            </div>
        )
    }
}
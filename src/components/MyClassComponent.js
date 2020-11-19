import React, { Component } from "react";

class MyClassComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
        this.handleClick = this.handleClick.bind(this); // important if function is used
    }

    handleClick = () => {
        // increment counter
        this.setState({ count: this.state.count + 1 });
    };

    // component just mounted
    componentDidMount() {
        console.log("Class component has just mounted");
    };

    render() {
        const dog = "woof";
        return (
            <div>
                <h2>Click this to count up</h2>
                <p>{this.state.count}</p>
                <button onClick={this.handleClick}>Count up!</button>
            </div>
        )
    };
}

export default MyClassComponent;
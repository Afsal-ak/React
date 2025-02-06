import React, { Component } from "react";

class LifecycleDemo extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    console.log("1️⃣ Constructor: Component is created");
  }

  componentDidMount() {
    console.log("2️⃣ componentDidMount: Component mounted");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("3️⃣ componentDidUpdate: Component updated");
  }

  componentWillUnmount() {
    console.log("4️⃣ componentWillUnmount: Component is about to be removed");
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
      </div>
    );
  }
}

export default LifecycleDemo;

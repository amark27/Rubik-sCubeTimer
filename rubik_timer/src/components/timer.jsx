import React, { Component } from "react";

class Timer extends Component {
  state = { time: 0, running: false };

  increment = () => {
    this.setState({ time: time++, running: true });
  };
  render() {
    return (
      <React.Fragment>
        <h1>{this.state.time}</h1>
        <button onClick={this.increment}>Start</button>
        <button>Stop</button>
        <button>Reset</button>
      </React.Fragment>
    );
  }
}

export default Timer;

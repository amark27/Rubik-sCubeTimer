import React, { Component } from "react";

class Timer extends Component {
 
  constructor(){
    super();
    this.state = { time: 0, running: false };
  }

  componentDidMount(){
    window.addEventListener('keypress', this.incrementOrStop);
  }

  incrementOrStop = () => {
    return this.state.running ? this.stop : this.increment;
  }

  increment = () => {
    if (!this.state.running)
      this.timerID = setInterval(() => this.setState({ time: this.state.time + 1, running: true }), 100);
  };

  stop = () => {
    clearInterval(this.timerID);
    this.setState({time: this.state.time, running: false});
  }

  render() {
    return (
      <React.Fragment>
        <h1>{this.state.time}</h1>
        <button onClick={this.increment}>Start</button>
        <button onClick={this.stop}>Stop</button>
        <button>Reset</button>
      </React.Fragment>
    );
  }
}

export default Timer;

import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Timer from "./components/timer.jsx";

const SPACE_KEY = 32;

class App extends Component {
  state = {
    timerRunning: false
  };

  componentDidMount(){
    window.addEventListener('keyup', (e) => this.updateTimer(e));
  }

  updateTimer = (e) => {
    if (e.keyCode === SPACE_KEY)
      this.setState((state) => ({timerRunning: !state.timerRunning}))
  }

  render() {
    return <Timer running={this.state.timerRunning}/>;
  }
}

export default App;

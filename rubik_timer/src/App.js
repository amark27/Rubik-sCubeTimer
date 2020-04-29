import React, { Component } from "react";
import "./scss-css/styles.css";
import Timer from "./components/timer.jsx";
import TableTimes from "./components/timeTable.jsx";
import Graph from "./components/graph.jsx";
import ScrambleGen from "./components/scrambleGen.jsx";
import { withFirebase } from "./components/firebase/firebaseIndex";
import axios from "axios";
import { IP, setIP } from "./globals.js";

const SPACE_KEY = 32;

class AppBase extends Component {
  constructor(){
    super();
    this.state = {
      timerRunning: false,
      timerPrepare: false,
      times: [] 
    };
  }
  
  componentDidMount(){
    window.addEventListener('keyup', (e) => this.updateTimer(e));
    window.addEventListener('keydown', (e) => this.flashTimer(e));

    //get ip to register user
    this.setUp();
  }

  componentWillUnmount(){
    window.removeEventListener('keyup', (e) => this.updateTimer(e));
    window.removeEventListener('keydown', (e) => this.flashTimer(e));
  }
  
  setUp = () => {
    axios.get("http://api.ipify.org/?format=json")
    .then((response) => {
      setIP(response.data.ip);
      this.props.firebase.getTimes(IP, this.setTimes); //populate times array from db values
    }).catch((err) => {
      console.log(err);
    });   
  }

  setTimes = (times) => {
    this.setState({ times: times });
  }

  updateTimer = (e) => {
    if (e.keyCode === SPACE_KEY) 
      this.setState(state => ({timerRunning: !state.timerRunning, timerPrepare: false}));
  }
  
  flashTimer = (e) => {
    if (e.keyCode === SPACE_KEY)
      this.setState({timerPrepare: true});
  }

  addTime = (time) => {
    this.state.times.push(time);
    this.setState({times: this.state.times});
  } 

  render() {
    return (
    <React.Fragment>
      <div className="main">
        <div className="main-container">
          <Timer running={this.state.timerRunning} prepare = {this.state.timerPrepare} 
                times={this.state.times} addTime={this.addTime}/>
          <ScrambleGen update={this.state.timerRunning}/>
        </div>
      </div>
      <TableTimes times={this.state.times}/>
      <Graph times={this.state.times}/>

    </React.Fragment>
    );
  }
}

const App = withFirebase(AppBase);

export default App;


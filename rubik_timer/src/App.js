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
  constructor(props){
    super(props);
    this.state = {
      timerRunning: false,
      timerPrepare: false,
      times: [], 
      scrambles: []
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
      this.props.firebase.getData(IP, this.setTimes, this.setScrambles); //populate times array from db values

    }).catch((err) => {
      console.log(err);
    });   
  }

  setTimes = (t) => {
    if (!t) return;
    this.setState({ times: t });
  }

  setScrambles = (s) => {
    if (!s) return;
    //add the values of current scrambles to the scrambles from db
    Array.prototype.push.apply(s, this.state.scrambles);
    this.setState({ scrambles: s });
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

  addScramble = (scramble) => {
    this.state.scrambles.push(scramble);
    this.setState({scrambles: this.state.scrambles});
  } 

  render() {
    return (
    <React.Fragment>
      <div className="main">
        <div className="main-container">
          <Timer running={this.state.timerRunning} prepare = {this.state.timerPrepare} 
                times={this.state.times} addTime={this.addTime} scrambles={this.state.scrambles}/>
          <ScrambleGen update={this.state.timerRunning} addScramble={this.addScramble}/>
        </div>
      </div>
      <TableTimes times={this.state.times} scrambles={this.state.scrambles}/>
      <Graph times={this.state.times}/>
    </React.Fragment>
    );
  }
}

const App = withFirebase(AppBase);

export default App;


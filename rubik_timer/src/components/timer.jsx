import React, { Component } from "react";
import "../scss-css/styles.css";
import Avg from "./avg.jsx"


const formatNumber = (num) => {
	return ("0" + num).slice(-2);
};

export default class Timer extends Component {
	constructor(props) {
		super(props);

		//times stored in seconds
		this.state = { min: 0, sec: 0, msec: 0, running: this.props.running, times: [] };
	}

	componentDidUpdate(prevProps) {
		if (prevProps.running !== this.props.running) {
			if (prevProps.running) 
				this.stop();
			else {
				this.setState({min: 0, sec: 0, msec: 0});
				this.increment();
			}
		}
	}

	increment = () => {
   		this.timerID = setInterval(this.incrementHelper, 10);
	};

	incrementHelper = () => {
    	if (this.state.msec < 99)
    		this.setState(state => ({ msec: state.msec + 1 }));
    	else if (this.state.sec < 59)
     		this.setState(state => ({ sec: state.sec + 1, msec: 0 }));
    	else
      		this.setState(state => ({ min: state.min + 1, sec: 0, msec: 0 }));

	};

	stop = () => {
		clearInterval(this.timerID);
		let {min, sec, msec} = this.state;
		let secTime = this.convertSec(min, sec, msec);
		let newTimes = this.state.times.push(secTime);
		this.setState({ running: false, time: newTimes});
	};

	convertSec = (min, sec, msec) => {
		return min * 60 + sec + msec / 100;
	}

  
	render() {    
		let min = this.state.min !== 0 ? this.state.min : null;
		let sec = this.state.min !== 0 ? formatNumber(this.state.sec) : this.state.sec;
		let msec = formatNumber(this.state.msec);

		return (
			<React.Fragment>
				<h1 className="timer">{!!(min) ? this.state.min + ":" : ""}{sec}.{msec}</h1>
				<Avg times={this.state.times}/>
			</React.Fragment>
		);
	}
}
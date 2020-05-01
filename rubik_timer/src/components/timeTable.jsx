import React, { Component } from "react";
import HoverRow from "./hoverRow.jsx";
import Display from "./displayWindow.jsx";

class TableTimes extends Component {
	constructor(props){
		super(props);
		this.state = {
			hovered: false,
			hoveredID: 0
		};
	}

	componentDidUpdate(){
		var elem = document.querySelector("#tableTimes");
		elem.scrollTop = elem.scrollHeight;
	}

	handleHoverEnter = (id) => {
		this.setState({hovered: true, hoveredID: id});
	}

	handleHoverLeave = () => {
		this.setState({hovered: false});
	}

	render() {
		let { times, scrambles, dates } = this.props;

		return (
			<React.Fragment>
			<Display show={this.state.hovered}>
				<p><span style={{fontWeight:"normal"}}>ID:</span> {this.state.hoveredID+1}</p>
				<p><span style={{fontWeight:"normal"}}>Date Solved:</span> {dates[this.state.hoveredID]}</p>
				<p><span style={{fontWeight:"normal"}}>Scramble:</span> {scrambles[this.state.hoveredID]}</p>
			</Display>
			<div className="container-scroll">
				
				<div id="tableTimes" className="container-table">
					<table className="timeTable">
						<tbody>
							<tr>
								<th>ID</th>
								<th>Time</th>
							</tr>
							{times.map((curr, index) => {
								return (
								<HoverRow key={index} index={index} time={curr} 
								handleHoverEnter={() => this.handleHoverEnter(index)} handleHoverLeave={this.handleHoverLeave}/>
								)
							})}
						</tbody>
					</table>
				</div>
			</div>
			</React.Fragment>
		);
	}
}

export default TableTimes;

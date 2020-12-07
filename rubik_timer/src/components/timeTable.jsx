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

	handleHoverEnter = (id) => {
		this.setState({hovered: true, hoveredID: id});
	}

	handleHoverLeave = () => {
		this.setState({hovered: false});
	}

	render() {
		const { times, scrambles, dates, display, displayGraph } = this.props;
		let length = times.length;

		return (
			display ? 
			(<React.Fragment>
			<Display show={this.state.hovered}>
				<p><span style={{fontWeight:"normal"}}>ID:</span> {this.state.hoveredID+1}</p>
				<p><span style={{fontWeight:"normal"}}>Date Solved:</span> {dates[this.state.hoveredID]}</p>
				<p><span style={{fontWeight:"normal"}}>Scramble:</span> {scrambles[this.state.hoveredID]}</p>
			</Display>
			<div id="tableTimes" className={"container-scroll" + (!displayGraph ? " full-height" : "")}>
				<div className="container-table">
					<table className="timeTable">
						<tbody>
							<tr>
								<th>ID</th>
								<th>Time</th>
							</tr>
							{times.map((curr, index) => {
								let realIndex = length-1-index;
								return (
								<HoverRow key={index} index={realIndex} time={curr} 
								handleHoverEnter={() => this.handleHoverEnter(realIndex)} handleHoverLeave={this.handleHoverLeave}/>
								)
							})}
						</tbody>
					</table>
				</div>
			</div>
			</React.Fragment>)
			: null
		);
	}
}

export default TableTimes;

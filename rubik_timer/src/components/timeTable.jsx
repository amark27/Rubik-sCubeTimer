import React, { Component } from "react";
import { displayTime, separateSec } from "./utilities.jsx";

class TableTimes extends Component {
	
	componentDidUpdate(){
		var elem = document.querySelector("#tableTimes");
		elem.scrollTop = elem.scrollHeight;
	}

	render() {
		let { times } = this.props;
		return (
			<div className="container-scroll">
				<div id="tableTimes" className="container-table">
					<table className="timeTable">
						<tbody>
							<tr>
								<th>ID</th>
								<th>Time</th>
							</tr>
							{times.map((curr, index) => {
								let { min, sec, msec } = separateSec(curr);
								return (
									<tr key={index}>
										<td>{index + 1}</td>
										<td>{displayTime(min, sec, msec)}</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
			</div>
		);
	}
}

export default TableTimes;

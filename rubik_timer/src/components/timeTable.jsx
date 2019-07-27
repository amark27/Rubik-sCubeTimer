import React from "react";
import { displayTime, separateSec } from "./utilities.jsx";

const TableTimes = props => {
	let { times } = props;
	return (
		<div className="container-table">
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
	);
};

export default TableTimes;

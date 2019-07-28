import React from "react";
import { avg5, avg12, displayTime, blue } from "./utilities.jsx";

const Avg = props => {
	let { times } = props;
	let average5 = avg5(times);
	let average12 = avg12(times);

	return (
		<div className="average">
			<h2>
				Average of 5:{" "}
				<span style={{ color: blue }}>
					{!!average5.msec ? displayTime(average5.min, average5.sec, average5.msec) : "Undef"}
				</span>
			</h2>
			<h2>
				Average of 12:{" "}
				<span style={{ color: blue }}>
					{!!average12.msec ? displayTime(average12.min, average12.sec, average12.msec) : "Undef"}
				</span>
			</h2>
		</div>
	);
};

export default Avg;

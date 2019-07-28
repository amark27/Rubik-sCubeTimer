import React from "react";
import CanvasJSReact from "../assets/canvasjs.react.js";
import { blue, darkBlue } from "./utilities.jsx";

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Graph = props => {
    let { times: points } = props;

    points = points.map((time, ind) => ({x: ind + 1, y: time}));

	const options = {
		animationEnabled: true,
		exportEnabled: true,
		theme: "light2", // "light1", "dark1", "dark2"
		title: {
			text: "3x3 Times"
		},
		axisY: {
			title: "Time (sec)",
			includeZero: true
		},
		axisX: {
			title: "ID",
			interval: 1
		},
		data: [
			{
				type: "line",
				toolTipContent: "{x}: {y} sec",
				dataPoints: points,
				color: darkBlue,
				lineColor: blue
			}
		]
	};

	return (
		<div>
			<CanvasJSChart options={options} containerProps={{ width: "100%", bottom: "0px", position: "absolute" }} />
		</div>
	);
};

export default Graph;

import React from "react";
import CanvasJSReact from "../assets/canvasjs.react.js";
import {orange} from "./utilities.jsx";

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Graph = props => {
    let { times: points, display } = props;
	let length = points.length;

    points = points.map((time, ind) => ({x: length-ind, y: time}));

	const options = {
		animationEnabled: true,
		exportEnabled: true,
		theme: "dark2", // "light1", "dark1", "dark2"
		//backgroundColor: '#FFFFFF',
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
				color: orange,
				lineColor: orange
			}
		]
	};

	return (
		display ?
		(<CanvasJSChart options={options} containerProps={{ width: "100%", bottom: "0px", display: "table-row"}} />)
		: null
	);
};

export default Graph;

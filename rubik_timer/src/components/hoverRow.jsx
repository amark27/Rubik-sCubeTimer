import React from "react";
import { displayTime, separateSec } from "./utilities.jsx";

const HoverRow = (props) => {
    let {time, index, handleHoverEnter, handleHoverLeave} = props
    let { min, sec, msec } = separateSec(time);

    return (
        <tr onMouseEnter={handleHoverEnter} onMouseLeave={handleHoverLeave}>
            <td>{index + 1}</td>
            <td>{displayTime(min, sec, msec)}</td>
        </tr>
    );
}

export default HoverRow;
import React from "react";
import {displayTime, separateSec} from "./utilities.jsx";

const TableTimes = (props) => {
    let ID = 0;
    let { times } = props;
    return (
        <React.Fragment>
        <table className="timeTable">
            <tr>
                <th>ID</th>
                <th>Time</th>
            </tr>
        {times.map((curr) => {
            let {min, sec, msec} = separateSec(curr);
            return (
                <tr>
                    <td>
                        {++ID}
                    </td>
                    <td>
                        {displayTime(min, sec, msec)}
                    </td>
                </tr>
            );
        })}
        </table>
        </React.Fragment>
    );
}

export default TableTimes;
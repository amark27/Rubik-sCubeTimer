import React from "react";

const Avg = (props) => {
    let { times } = props;
    let avg5 = null, avg12 = null;

    //find averages if possible and format strings
    if (times.length > 4){
        avg5 = times.slice(-5).reduce((acc, curr) => acc + curr) / 5;
        avg5 = Math.floor(avg5 / 60) + ":" + parseFloat(Math.floor(avg5 * 100) / 100).toFixed(2);
    }

    if (times.length > 11){
        avg12 = times.slice(-12).reduce((acc, curr) => acc + curr) / 12;
        avg12 = Math.floor(avg12 / 60) + ":" + parseFloat(Math.floor(avg12 * 100) / 100).toFixed(2);
    }
    

    return (
        <div>
            <h2>Average of 5: {!!(avg5) ? avg5 : "Undef"}</h2>
            <h2>Average of 12: {!!(avg12) ? avg12 : "Undef"}</h2>
        </div>
    );
}

export default Avg;
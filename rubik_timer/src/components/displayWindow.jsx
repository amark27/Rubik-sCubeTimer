import React from "react";

//display on condition
const Display = (props) => {
    return props.show ? 
    (<div className="display-window">
		{props.children}
	</div>) : null;
}

export default Display;
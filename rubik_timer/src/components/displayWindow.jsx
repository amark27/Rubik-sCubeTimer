import React from "react";
import Paper from '@material-ui/core/Paper';

//display on condition
const Display = (props) => {
  return props.show ? 
  (<div className="display-window">
    <Paper variant='outlined' elevation={1}>
      {props.children}
    </Paper>
  </div>) : null;
}

export default Display;
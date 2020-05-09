import React, {useState} from "react";
import HelpIcon from '@material-ui/icons/Help';
import CloseIcon from '@material-ui/icons/Close';
import GitHubIcon from '@material-ui/icons/GitHub';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import DialogContent from '@material-ui/core/DialogContent';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import { Typography } from "@material-ui/core";

const SPACE_KEY = 32;

const HelpButton = (props) => {
    const [clicked, setClicked] = useState(false);

    const handleOpen = () => {
        setClicked(true);
    };
    
    const handleClose = () => {
        setClicked(false);
    };

    const preventClick = (e) => {
        if (e.keyCode === SPACE_KEY)
            e.preventDefault();
    }

    return (
        <React.Fragment>
        <Button variant="contained" disableElevation onClick={handleOpen} 
        onKeyUp={preventClick}>
            <HelpIcon/>
        </Button>
        <Dialog
            open={clicked}
            onClose={handleClose}
            aria-labelledby="help-title"
        >
            <MuiDialogTitle disableTypography id="help-title">
                <Typography variant="h6">
                    {"Help"}
                </Typography>
                <div className="modal-close">
                    <IconButton aria-label="close" onClick={handleClose}>
                        <CloseIcon/>
                    </IconButton>
                </div>
            </MuiDialogTitle>
            <DialogContent className="modal-content">
                <Typography variant="h6">
                    How to Use
                </Typography>
                <ul>
                    <li><Typography>Press space bar to start and stop the timer</Typography></li>
                    <li><Typography>Hover over times in table to see more details about each solve</Typography></li>
                </ul>
                <br></br>
                <Typography>
                    This timer was made with ReactJS, CanvasJS, Firebase and MaterialUI. It is not yet optimized for mobile use. Source code can be found below.
                </Typography>
                <div className="github-button">
                    <IconButton onClick={() => window.open('https://github.com/amark27/RubiksCubeTimer')}>
                        <GitHubIcon/>
                    </IconButton>
                </div>
            </DialogContent>
        </Dialog>
        </React.Fragment>
    );
}

export default HelpButton;
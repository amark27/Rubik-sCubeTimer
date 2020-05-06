import React, {useState} from "react";
import SettingsIcon from '@material-ui/icons/Settings';
import CloseIcon from '@material-ui/icons/Close';
import GitHubIcon from '@material-ui/icons/GitHub';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import DialogContent from '@material-ui/core/DialogContent';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Typography } from "@material-ui/core";

const SettingsButton = (props) => {
    const {setDisplay, showTable, showGraph} = props;
    const [clicked, setClicked] = useState(false);
    const [displayTime, setDisplayTime] = useState(showTable);
    const [displayGraph, setDisplayGraph] = useState(showGraph);

    const handleOpen = () => {
        setClicked(true);
    };
    
    const handleClose = () => {
        setClicked(false);
    };

    const toggleDisplayTime = () => {
        setDisplay('table', !displayTime);
        setDisplayTime(!displayTime);
    }

    const toggleDisplayGraph = () => {
        setDisplay('graph', !displayGraph);
        setDisplayGraph(!displayGraph);
    }

    return (
        <React.Fragment>
        <div className="button-wrapper">
            <Button variant="contained" disableElevation onClick={handleOpen}>
                <SettingsIcon/>
            </Button>
        </div>
        <Dialog
            open={clicked}
            onClose={handleClose}
            aria-labelledby="settings-title"
        >
            <MuiDialogTitle disableTypography id="settings-title">
                <Typography variant="h6">
                    {"Settings"}
                </Typography>
                <div className="modal-close">
                    <IconButton aria-label="close" onClick={handleClose}>
                        <CloseIcon/>
                    </IconButton>
                </div>
            </MuiDialogTitle>
            <DialogContent className="modal-content">
                <FormGroup>
                    <FormControlLabel
                        control={<Switch checked={displayTime} onChange={toggleDisplayTime} />}
                        label="Show Time Table"
                    />
                    <FormControlLabel
                        control={<Switch checked={displayGraph} onChange={toggleDisplayGraph} />}
                        label="Show Time Graph"
                    />
                </FormGroup>
                <br></br>
                <Typography>
                    This timer was made with ReactJS, CanvasJS, Firebase and MaterialUI. Source code can be found below.
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

export default SettingsButton;
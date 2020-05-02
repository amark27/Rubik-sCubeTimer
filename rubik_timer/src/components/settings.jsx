import React, {useState} from "react";
import SettingsIcon from '@material-ui/icons/Settings';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Typography } from "@material-ui/core";

const SettingsButton = () => {
    const [clicked, setClicked] = useState(false);

    const handleOpen = () => {
        setClicked(true);
    };
    
    const handleClose = () => {
        setClicked(false);
    };

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
            <DialogTitle id="settings-title">{"Settings"}</DialogTitle>
            <DialogContent>
                <Typography>
                    This timer was made with ReactJS, CanvasJS, Firebase and MaterialUI. Source code can be found below.
                </Typography>
            </DialogContent>
        </Dialog>
        </React.Fragment>
    );
}

export default SettingsButton;
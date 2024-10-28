import { IconButton, Dialog, DialogTitle, DialogActions, Switch, FormControlLabel, FormGroup} from "@mui/material";
import { useState } from "react";
import SettingsIcon from '@mui/icons-material/Settings';
import CloseIcon from '@mui/icons-material/Close';

const Settings = () => {

    const [open, setOpen] = useState(false)

    return (
    <>
        {/* Settings button */}
        <IconButton size="small" color="inherit" onClick={() => setOpen(true)} sx={{marginTop: "-30px"}}>
            <SettingsIcon />
        </IconButton>

        {/* Opens dialog box */}
        <Dialog open={open} onClose={() => setOpen(false)} aria-labelledby="dialog-title" PaperProps={{sx: {width: "100rem", height: "20rem", justifyContent: "center"}}}>

            {/* Title of dialog box */}
            <DialogTitle id="dialog-title" sx={{textAlign: "center", marginLeft: "10px"}}>
                Settings
                {/* Close button */}
                <IconButton onClick={() => setOpen(false)}>
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            {/* Options in the settings menu */}
            <DialogActions>
                <FormGroup>
                    {/* Dark mode switch */}
                    <FormControlLabel control={<Switch />} label="- - - Dark Mode - - -"></FormControlLabel>
                </FormGroup>
            </DialogActions>
        </Dialog>
    </>
    )
}

export default Settings;
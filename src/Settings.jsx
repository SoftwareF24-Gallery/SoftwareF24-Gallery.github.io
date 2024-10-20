import { IconButton, Dialog, DialogTitle, DialogActions, Switch, FormControlLabel, FormGroup} from "@mui/material";
import { useState } from "react";
import SettingsIcon from '@mui/icons-material/Settings';
import CloseIcon from '@mui/icons-material/Close';

const Settings = () => {

    const [open, setOpen] = useState(false)

    return (
    <>
        {/* Settings button */}
        <IconButton size="large" edge="end" color="inherit" onClick={() => setOpen(true)}>
            <SettingsIcon />
        </IconButton>
        <Dialog open={open} onClose={() => setOpen(false)} aria-labelledby="dialog-title">

            {/* Title of dialog box */}
            <DialogTitle id="dialog-title" sx={{textAlign: "center", marginLeft: "-1rem"}}>
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
                    <FormControlLabel control={<Switch />} label="Dark Mode"></FormControlLabel>
                </FormGroup>
            </DialogActions>
        </Dialog>
    </>
    )
}

export default Settings;
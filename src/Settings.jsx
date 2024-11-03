import { IconButton, Radio, RadioGroup, FormControl, FormControlLabel, FormLabel, Dialog, DialogTitle, DialogActions, useColorScheme} from "@mui/material";
import { useState } from "react";
import SettingsIcon from '@mui/icons-material/Settings';
import CloseIcon from '@mui/icons-material/Close';

const Settings = () => {

    const [open, setOpen] = useState(false)
    const { mode, setMode } = useColorScheme() // Retrieves color scheme from above in the hierarchy

    // Failsafe due to how theme rendering works
    if(!mode) {
        return null;
    }

    return (
    <>
        {/* Settings button */}
        <IconButton size="small" color="inherit" onClick={() => setOpen(true)} sx={{marginTop: "-30px"}}>
            <SettingsIcon />
        </IconButton>

        {/* Opens dialog box */}
        <Dialog open={open} onClose={() => setOpen(false)} aria-labelledby="dialog-title" PaperProps={{sx: {width: "40rem", height: "10rem"}}}>

            {/* Title of dialog box */}
            <DialogTitle id="dialog-title" sx={{}}>
                Settings
                {/* Close button */}
                <IconButton onClick={() => setOpen(false)} sx={{float: "right", padding: "0.2em"}}> {/* The CSS used here is kinda hack-y, replace later */}
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            {/* Options in the settings menu */}
            <DialogActions sx={{justifyContent: "center"}}>
                
                {/*Toggling light and dark mode*/}
                <FormControl>

                    <FormLabel id="theme-toggle">Theme</FormLabel>
                    <RadioGroup
                    aria-labelledby="theme-toggle"
                    name="theme-toggle"
                    row
                    value={mode}
                    onChange={(event) => setMode(event.target.value)}
                    >
                        <FormControlLabel value="system" control={<Radio />} label="System" />
                        <FormControlLabel value="light" control={<Radio />} label="Light" />
                        <FormControlLabel value="dark" control={<Radio />} label="Dark" />
                    </RadioGroup>

                </FormControl>
            </DialogActions>
        </Dialog>
    </>
    )
}

export default Settings;
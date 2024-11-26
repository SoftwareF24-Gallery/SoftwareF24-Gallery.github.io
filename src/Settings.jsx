import { ToggleButtonGroup, ToggleButton, IconButton, Stack, Dialog, DialogTitle, useColorScheme, Typography} from "@mui/material";
import { useState } from "react";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';
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
        <IconButton size="small" color="inherit" onClick={() => setOpen(true)}>
            <SettingsIcon />
        </IconButton>

        {/* Opens dialog box */}
        <Dialog open={open} onClose={() => setOpen(false)} aria-labelledby="dialog-title" PaperProps={{sx: {width: "40rem", height: "12rem"}}}>

            {/* Title of dialog box */}
            <DialogTitle id="dialog-title" sx={{display: "flex", justifyContent: "space-between"}}>
                Settings
                {/* Close button */}
                <IconButton onClick={() => setOpen(false)} sx={{padding: "0.2em"}}>
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            
            {/* Options in the settings menu */}
            <Stack style={{margin: "0 auto"}}>
                {/*Toggling light and dark mode*/}
                <Typography variant="settingsTitles">Theme</Typography>
                <ToggleButtonGroup
                aria-labelledby="theme-toggle"
                name="theme-toggle"
                row
                value={mode}
                onChange={(event) => setMode(event.target.value)}
                >
                    <ToggleButton aria-label="light mode" value="light">
                        <LightModeIcon style={{marginRight: "0.3rem"}}/>
                        Light
                    </ToggleButton>
                    <ToggleButton aria-label="system theme" value="system">
                        <SettingsBrightnessIcon style={{marginRight: "0.3rem"}}/>
                        System
                    </ToggleButton>
                    <ToggleButton aria-label="dark mode" value="dark">
                        <DarkModeIcon style={{marginRight: "0.3rem"}}/>
                        Dark
                    </ToggleButton>

                </ToggleButtonGroup>

            </Stack>
        </Dialog>
    </>
    )
}

export default Settings;
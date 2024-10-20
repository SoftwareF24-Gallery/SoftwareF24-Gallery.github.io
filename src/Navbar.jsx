 {/*Imports various tools needed for the website */}
import { AppBar, Toolbar, IconButton, Typography, Stack, Dialog, DialogTitle, DialogActions, Switch, FormControlLabel, FormGroup, InputLabel, Select, FormControl, MenuItem} from "@mui/material";
import { useState } from "react";
import SettingsIcon from '@mui/icons-material/Settings';
import CloseIcon from '@mui/icons-material/Close';

 {/*Makes dialog box open.  */}
const Navbar = () => {
    const [open, setOpen] = useState(false)
 {/*used for location dropdown */}
    const [location, setLocation] = useState("");
 {/*used to keep the selected location displayed on the bar. */}
    const handleLocation = (event) => {
        setLocation(event.target.value);
    }
 {/*Main navigation bar function */}
    return (
        <AppBar position="static" sx={{background: "#203c5c"}}>
            <Toolbar>
                <Typography variant="h6" sx={{flexGrow: 1, textAlign: "left"}}>
                    Art Gallery
                </Typography>
                 {/*Displays components on the left side by side */}
                <Stack direction="row" spacing={2}>

                    {/* Location Select */}
                    <FormControl variant="standard" sx={{minWidth: 150}} style={{}}>
                        {/* Label for dropdown menu */}
                        <InputLabel sx={{color: "white"}}>Location</InputLabel>
                        {/* Dropdown menu for location */}
                        <Select value={location} onChange={handleLocation} label="Location" autoWidth sx={{color: "white", ".MuiSvgIcon-root": {color: "white"}}}>
                            {/* Placeholder dropdown menu item */}
                            <MenuItem value="">
                                <b>Any</b>
                            </MenuItem>
                            {/* Menu items */}
                            <MenuItem value={10}>Cy-Fair</MenuItem>
                            <MenuItem value={20}>Westway Park</MenuItem>
                            <MenuItem value={30}>Montgomery</MenuItem>
                            <MenuItem value={40}>Kingwood</MenuItem>
                            <MenuItem value={50}>North Harris</MenuItem>
                            <MenuItem value={60}>Tomball</MenuItem>
                        </Select>
                    </FormControl>

                    {/* Settings button */}
                    <IconButton size="large" edge="end" color="inherit" onClick={() => setOpen(true)}>
                        <SettingsIcon />
                    </IconButton>
                    {/* Opens dialog box */}
                    <Dialog open={open} onClose={() => setOpen(false)} aria-labelledby="dialog-title">
                    
                    {/* Title of dialog box */}
                    <DialogTitle id="dialog-title" sx={{textAlign: "center", marginLeft: "-1rem"}}>
                    {/* Close button */}
                    <IconButton onClick={() => setOpen(false)}>
                        <CloseIcon />
                    </IconButton>Settings</DialogTitle>
                     {/* Options in the settings menu */}
                    <DialogActions>
                        <FormGroup>
                            {/* Dark mode switch */}
                            <FormControlLabel control={<Switch />} label="Dark Mode"></FormControlLabel>
                        </FormGroup>
                    </DialogActions>
                    </Dialog>
                </Stack>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;
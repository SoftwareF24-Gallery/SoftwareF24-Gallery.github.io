import { AppBar, Toolbar, IconButton, Typography, Stack, Dialog, DialogTitle, DialogActions, Switch, FormControlLabel, FormGroup, InputLabel, Select, FormControl, MenuItem} from "@mui/material";
import { useState } from "react";
import SettingsIcon from '@mui/icons-material/Settings';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
    const [open, setOpen] = useState(false)

    const [location, setLocation] = useState("");

    const handleLocation = (event) => {
        setLocation(event.target.value);
    }

    return (
        <AppBar position="static" sx={{background: "#203c5c"}}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{flexGrow: 1, textAlign: "left"}}>
                    Art Gallery
                </Typography>
                <Stack direction="row" spacing={2}>

                    {/* Location Select */}
                    <FormControl variant="standard" sx={{minWidth: 150}} style={{}}>
                        <InputLabel sx={{color: "white"}}>Location</InputLabel>
                        <Select value={location} onChange={handleLocation} label="Location" autoWidth sx={{color: "white", ".MuiSvgIcon-root": {color: "white"}}}>
                            <MenuItem value="">
                                <b>Any</b>
                            </MenuItem>
                            <MenuItem value={10}>Cy-Fair</MenuItem>
                            <MenuItem value={20}>Westway Park</MenuItem>
                            <MenuItem value={30}>Montgomery</MenuItem>
                            <MenuItem value={40}>Kingwood</MenuItem>
                            <MenuItem value={50}>North Harris</MenuItem>
                            <MenuItem value={60}>Tomball</MenuItem>
                        </Select>
                    </FormControl>

                    {/* Settings */}
                    <IconButton size="large" edge="end" color="inherit" onClick={() => setOpen(true)}>
                        <SettingsIcon />
                    </IconButton>
                    <Dialog open={open} onClose={() => setOpen(false)} aria-labelledby="dialog-title">
                    
                    <DialogTitle id="dialog-title" sx={{textAlign: "center", marginLeft: "-1rem"}}>
                    <IconButton onClick={() => setOpen(false)}>
                        <CloseIcon />
                    </IconButton>Settings</DialogTitle>
                    <DialogActions>
                        <FormGroup>
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
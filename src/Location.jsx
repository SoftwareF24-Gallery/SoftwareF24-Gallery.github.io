import { InputLabel, FormControl, MenuItem, TextField } from "@mui/material";
import { useState } from "react";

const Location = () => {
    {/*used for location dropdown */}
    const [location, setLocation] = useState("");

    {/*used to keep the selected location displayed on the bar. */}
    const handleLocation = (event) => {
        setLocation(event.target.value);
    }

    return (
    <>
    {/* Location Select */}
    <FormControl variant="standard" sx={{minWidth: 150}} style={{}}>
    {/* Label for dropdown menu */}
    <InputLabel sx={{color: "Black"}}></InputLabel>
    {/* Dropdown menu for location */}
    <TextField select value={location} onChange={handleLocation} label="Location" autoWidth sx={{color: "Black", ".MuiSvgIcon-root": {color: "Black"}}}>
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
    </TextField>
    </FormControl>
    </>
    )
}

export default Location;

import { Box, TextField, MenuItem } from "@mui/material"
import locations from '../json/locations.json';
import { useEffect } from "react";

// Setting up function to be used in other files
export const SelectGallery = ({selectedGallery, setSelectedGallery}) => { 

    // Handles change on element and updates gallery
    // "event" is an object consisting of value, label and default, parsed from JSON file
    const handleChange = (event) => {
      setSelectedGallery(event.target.value);
      document.title = event.target.value.label;
    };
  
    // Dropdown menu
    return (
      <Box sx={{width: 400, padding: "0 3px"}} className="select">
        <TextField
          label="Gallery Location"
          // Select dropdown from mui
          select sx={{width: '100%'}} // Make width take up 100% of box
          value={selectedGallery}
          onChange={handleChange}
        >
          
          {locations.map((location) => ( // Map function to set key and values from JSON
            // "value" receives whole location object, necessary to change
            <MenuItem key={location.value} value={location}> 
              {location.label}
            </MenuItem>
          ))}
        </TextField>
      </Box>
    );
  };
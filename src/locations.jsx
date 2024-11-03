import { Box, TextField, MenuItem } from "@mui/material"
import { useState } from 'react'
import locations from '../JSONS/locations.json';

// Setting up function to be used in other files
export const SelectGallery = () => { 

    const defaultLocation = locations[0].label;
    // Uses index 0 of locations.json as default, the Bosque Gallery
    const [gallery, setGallery] = useState(defaultLocation);
  
    // console.log({ gallery }); - i dont think this does
  
    // Handles change on element and updates gallery
    // "event" is an object consisting of value and label, parsed from JSON file
    const handleChange = (event) => {
      setGallery(event.target.value); 
      console.log({gallery})
      document.title = event.target.value.label; 
    };
  
    // Dropdown menu
    return (
      <Box sx={{ width: 400 }} className="select">
        <TextField
          label="Select Gallery Location"
          // Select dropdown from mui
          select sx={{ width: '100%' }} // Make width take up 100% of box
          value={gallery}
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
import { Box, TextField, MenuItem } from "@mui/material"
import { useState } from 'react'
import locations from '../json/locations.json';

// Setting up function to be used in other files
export const SelectGallery = () => { 

    // makes location dynamic, i think needs double checking
    const defaultLocation = locations.find(locations => locations.default);

    // Uses default location variable to get location
    const [gallery, setGallery] = useState(defaultLocation);
    
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
import { Box, TextField, MenuItem } from "@mui/material"
import { useState } from 'react'
import locations from '../JSONS/locations.json';

//setting up function to be used in other files
export const SelectGallery = () => { 

    const [gallery, setGallery] = useState('');
  
    console.log({ gallery });
  
    //handles change on element and updates gallery
    const handleChange = (event) => {
      setGallery(event.target.value); 
    };
  
    //dropdown menu
    return (
      <Box sx={{ width: 400 }} className="select">
        <TextField
          label="Select Gallery Location"
          //select dropdown from mui
          select sx={{ width: '100%' }} //make width take up 100% of box
          value={gallery}
          onChange={handleChange}
        >
          
          {locations.map((location) => ( //map function to set key and values from JSON
            <MenuItem key={location.value} value={location.value}> 
              {location.label}
            </MenuItem>
          ))}
        </TextField>
      </Box>
    );
  };
import React from 'react';
import { Box, TextField, MenuItem } from "@mui/material"
import { useState } from 'react'
import locations from '../JSONS/locations.json';

//setting up function to be used in other files
export const SelectGallery = () => { 

    const [gallery, setGallery] = useState('');
  
    console.log({ gallery });
  
    //handles change on html element and updates gallery
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setGallery(event.target.value); 
    };
  
    //dropdown menu
    return (
      <Box width="250px" className="select">
        <TextField
          label="Select Gallery Location"
          //select dropdown from mui
          select
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
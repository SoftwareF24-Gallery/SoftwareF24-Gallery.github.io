import { Button, Autocomplete, TextField, Chip, Box, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { useState } from 'react';
import jsonData from './assets/json/artData.json';

// filters array is sent down from Gallery.jsx, contains methods to modify 
// filter variables declared in Gallery.jsx
const ArtFilters = ({filters}) => {
   
    //selectedFilters will be used once art is implemented
    const [selectedFilters, setSelectedFilters] = useState([]);

    const handleDelete = (chipToDelete) => () => {
        setSelectedFilters((prevFilters) =>
            prevFilters.filter((filter) => filter !== chipToDelete)
        );
    };

    //flat map puts all keywords into 1 array 
    const keywords = jsonData.flatMap(item => item.keywords);

    const handleFilterClick = (newFilters) => {
        setSelectedFilters(newFilters)
    };

    //handles art name filter update
    const handleArtNameChange = (event) => {
        filters.setArtName(event.target.value);
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%'}}>

            {/* Textfield searchbar for Artist/Art name*/}
            <TextField
                label="Name"
                sx={{m: 1}}
                value={filters.artName}
                onChange={handleArtNameChange}
            />

            {/* Art Types Filter*/}
            <Box sx={{m: 1}}>
                {/* Autocomplete function for keywords*/}
                <Autocomplete
                    multiple
                    id="Arttype-keywords"
                    options={keywords}
                    getOptionLabel ={(option) => option}
                    onChange={(event, newFilters) => handleFilterClick(newFilters)}

                    //renderTags display as chip for each keyword
                    renderTags={(value, getTagProps) => 
                        //maps over keyword array
                        value.map((option, index) => (
                            <Chip 
                                variant="outlined"
                                label={option}
                                {...getTagProps({ index })}
                                // use handleClickFitler again to delete chips
                                onDelete={() => handleDelete(option)}
                                key={index}
                            />
                        ))
                    }
                    //place holder text
                    renderInput={(params) => (
                        <TextField {...params} label="Keywords" placeholder="Select Art Type" />
                    )}
                    
                />
            </Box>
            
            {/* Medium Filter */}
            <FormControl sx={{m: 1}}>
                <InputLabel id="medium-selection">Medium</InputLabel>
                    <Select
                    labelId="medium-selection"
                    id="medium"
                    label="Medium"
                    >
                        <MenuItem>
                            <em>None</em>
                        </MenuItem>
                        <MenuItem>Traditional Painting</MenuItem>
                        <MenuItem>Digital Painting</MenuItem>
                        <MenuItem>Photograph</MenuItem>
                    </Select>
            </FormControl>

            {/* Clear Filters Button
                Clears all filter fields */}
            <Button 
                color="inherit" 
                variant="outlined"
                sx={{m: 1,}}

                onClick={(event) => {
                    filters.setArtName('');
                }}>
                Clear Filters
            </Button>
        </Box>
    );
}

export default ArtFilters;
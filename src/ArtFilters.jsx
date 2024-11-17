import { Typography, Autocomplete, TextField, Chip, Box } from "@mui/material";
import { useState } from 'react';
import jsonData from '../json/artData.json';



const ArtFilters = () => {
   
//selectedFilters will be used once art is implemented
    const [selectedFilters, setSelectedFilters] = useState([]);

    const handleDelete = (chipToDelete) => () => {
        setSelectedFilters((prevFilters) =>
            prevFilters.filter((filter) => filter !== chipToDelete)
        );
    };
    //flat map puts all keywords into 1 array 
    const keywords = jsonData.flatMap(item => item.keywords);

    const [searchQuery, setSearchQuery] = useState('');

    const handleFilterClick = (newFilters) => {
        setSelectedFilters(newFilters)
    };

    //handles search filter update
    const handleSearchChange = (event) => {

        setSearchQuery(event.target.value);
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <Typography sx={{paddingLeft: '5px'}}>Art Name</Typography>
            {/* Textfield searchbar for Artist/Art name*/}
            <TextField
                label="Search"
                value={searchQuery}
                onChange={handleSearchChange}
                sx={{ marginBottom: 2, 
                    width: '220px', 
                    paddingLeft: '10px'
                }}
            />
            {/* Art Types Filter*/}
            <Typography sx={{paddingLeft: '5px'}}>Art Types</Typography>
            <Box sx={{ marginBottom: 2 }}>
                {/* Autocomplete function for keywords*/}
                <Autocomplete sx={{ 
                    width: '220px',
                    paddingLeft: '10px'
                 }}
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
                        <TextField {...params} label="Art Type" placeholder="Select Art Type" />
                    )}
                    
                />
            </Box>

            <Typography sx={{paddingLeft: '5px'}}>Art Medium</Typography>
            
        </Box>
    );
}

export default ArtFilters;
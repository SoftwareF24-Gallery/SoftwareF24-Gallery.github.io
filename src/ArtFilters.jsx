import { Button, Stack, Autocomplete, TextField, Chip, Box, FormControl, InputLabel, Select, MenuItem, ClickAwayListener, Typography } from "@mui/material";
import artistData from '../json/artistdata.json';
import keywordData from '../json/keywordData.json';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

const currentYear = dayjs();
const earliestYear = dayjs("1500");

// Create keywords array, then push each keyword into it
let keywords = [];
keywordData.keys.map((key) => keywords.push(key));

let artistNames = [];
artistData.map((item) => artistNames.push(item.name));
artistNames.sort();

// filters array is sent down from Gallery.jsx, contains methods to modify 
// filter variables declared in Gallery.jsx
const ArtFilters = ({ filters }) => {   

    const handleFilterClick = (newFilters) => {
        filters.setSelectedFilters(newFilters);
    };

    const handleDelete = (chipToDelete) => () => {
        filters.setSelectedFilters((prevFilters) => {
            console.log("Deleting Chip:", chipToDelete);
            const updatedFilters = prevFilters.filter((filter) => filter !== chipToDelete);
            console.log("Updated filters:", updatedFilters);
            return updatedFilters;
        });
    };

    // Handles art name filter update
    const handleArtNameChange = (event) => {
        filters.setArtName(event.target.value);
    };

    // Handles artist filter update
    const handleArtistChange = (newArtist) => {
        filters.setArtistName(newArtist);
    };

    // Handle year filter update
    const handleStartYearChange = (newYear) => {
        filters.setStartYear(newYear);
    };

    const handleEndYearChange = (newYear) => {
        filters.setEndYear(newYear);
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%'}}>

            {/* Textfield searchbar for Art name*/}
            <TextField
                label="Name"
                sx={{m: 1}}
                value={filters.artName}
                onChange={handleArtNameChange}
            />

            {/* Artist Name Filter*/}
            <Box sx={{m: 1}}>
                {/* Autocomplete function for keywords*/}
                <Autocomplete
                    disablePortal
                    options={artistNames}
                    value={filters.artistName}
                    renderInput={(params) => <TextField {...params} label="Artist" />}
                    onChange={(event, newArtist) => handleArtistChange(newArtist)}
                />
            </Box>

            {/* Keywords Filter*/}
            <Box sx={{m: 1}}>
                {/* Autocomplete function for keywords*/}
                <Autocomplete
                    multiple
                    id="Arttype-keywords"
                    options={keywords}
                    getOptionLabel ={(option) => option}
                    onChange={(event, newFilters) => handleFilterClick(newFilters)}
                    value={filters.selectedFilters}
                    //renderTags display as chip for each keyword
                    renderTags={(value, getTagProps) => 
                        //maps over keyword array
                        value.map((option, index) => (
                            <Chip 
                                variant="outlined"
                                label={option}
                                {...getTagProps({ index })}
                                // use handleClickFitler again to delete chips
                                onDelete={() => handleDelete(option)()}
                                key={index}
                            />
                        ))
                    }
                    //place holder text
                    renderInput={(params) => (
                        <TextField {...params} label="Keywords"/>
                    )}
                    
                />
            </Box>
            
            {/* Medium Filter */}
            <FormControl sx={{m: 1}} id="medium-filter">
                <InputLabel id="medium-selection">Medium</InputLabel>
                 
                    <Select 
                    labelId="medium-selection"
                    id="medium"
                    label="Medium"
                    value={filters.selectedMedium}
                    onChange={(e) => filters.setSelectedMedium(e.target.value)}
                    >
                        <MenuItem value="">
                            <em>Any</em>
                        </MenuItem>
                        <MenuItem value="Traditional Painting">Traditional Painting</MenuItem>
                        <MenuItem value="Digital Painting">Digital Painting</MenuItem>
                        <MenuItem value="Photograph">Photograph</MenuItem>
                    </Select>
            </FormControl>

            <Box sx={{m: 1}}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <Stack direction="row">
                        <DatePicker 
                            value={filters.startYear}
                            onChange={(newYear) => handleStartYearChange(newYear)}
                            label={'Start Year'}
                            minDate={earliestYear}
                            maxDate={currentYear} 
                            yearsOrder="desc" 
                            views={['year']} 
                        />
                        <Typography sx={{p: 1, alignSelf: "center"}}>to</Typography>
                        <DatePicker 
                            value={filters.endYear}
                            onChange={(newYear) => handleEndYearChange(newYear)}
                            label={'End Year'}
                            minDate={earliestYear}
                            maxDate={currentYear} 
                            yearsOrder="desc" 
                            views={['year']} 
                        />
                    </Stack>
                </LocalizationProvider>
            </Box>

            {/* Clear Filters Button
                Clears all filter fields */}
            <Button 
                color="inherit" 
                variant="outlined"
                sx={{m: 1,}}

                onClick={filters.handleClearFilters}
                >
                Clear Filters
            </Button>
        </Box>
    );
}

export default ArtFilters;
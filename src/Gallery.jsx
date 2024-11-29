import FilterDrawer from "./FilterDrawer";
import Box from '@mui/material/Box';
import { ImageList, ImageListItem, ImageListItemBar, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import artData from '../json/artData.json';
import artistData from '../json/artistdata.json';
import { useState } from "react";
import ArtPopup from "./ArtPopup";

// Receives the artist's ID number, which is contained in the artist property
// within each item in artData. 
// Returns a JSON object containing the artist's information
const artistById = (artistID) => {
  return artistData.filter((artistData) => {
    return (artistData['id'] == artistID);})[0];
}

const Gallery = (location) => {

    // [Pop-Up]

    // Dummy art object that prevents access error in ArtPopup.jsx
    const artDummy = {
      "id": 0,
      "artist": 0,
      "url": null,
      "title": null,
      "date": null,
      "medium": null,
      "description": null,
      "tags" : null,
    };

    // Handles selection of image for popup, passing dummy object to avoid error in ArtPopup.jsx
    const [selectedImg, setSelectedImg] = useState(artDummy);

    // Whether ArtPopup is open
    const [open, setOpen] = useState(false);

    const handleOpen = (img) => {
      setSelectedImg(img);
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

    // [Filters]

    //clear filters function
    const handleClearFilters = () => {
      setSelectedFilters([]);
      setArtName('');
      setSelectedMedium('');
    };

    // Setting variables for the filters
    const [selectedFilters, setSelectedFilters] = useState([]);
    const [artName, setArtName] = useState('');
    const [selectedMedium, setSelectedMedium] = useState('')
    // "filters" array will be sent down the hierarchy to ArtFilters
    const filters = {artName, setArtName, selectedFilters, setSelectedFilters, selectedMedium, setSelectedMedium, handleClearFilters};

    const searchArray = artData.filter((item) => {
      const matchesArtName = filters.artName.trim() === '' || item.title.toLowerCase().includes(filters.artName.toLowerCase().trim()); // Filter by art piece name
      const matchesChips = filters.selectedFilters.length === 0 || filters.selectedFilters.every(tag => item.tags.includes(tag));      // Filter by keywords
      const matchesMedium = filters.selectedMedium === '' || item.medium === filters.selectedMedium;
      const matchesLocation = item.gallery == location;
      console.log(location);

      return matchesArtName && matchesChips && matchesMedium && matchesLocation;
    })

    return(
        <div style={{alignItems: "flex-start", padding: "3%"}}>

          <FilterDrawer filters={filters}/>

          <Box style={{alignSelf: "stretch"}}>

          <Typography variant="h2" sx={{textTransform: "none"}}>Found {searchArray.length} images</Typography>

              {/* Gallery logic */}
              <ImageList variant="masonry" cols={4} gap={8}>
                {/* Creating an array of img from objects in artData */}
                {
                  // return artName.toLowerCase() === '' 
                  // ? item 
                  // : item.title.toLowerCase().includes(artName.toLowerCase());
                }

                {
                  searchArray.map((item) => (

                  <ImageListItem key={item.url} sx={{cursor: 'pointer', '&:hover': {filter: 'brightness(80%)'}}} onClick={() => {handleOpen(item)}}>

                      <img
                      srcSet={`${item.url}?w=248&fit=crop&auto=format&dpr=2 2x`}
                      src={`${item.url}?w=248&fit=crop&auto=format`}
                      alt={item.title}
                      loading="lazy"
                      href="#"
                      />

                    <ImageListItemBar
                      title={item.title}
                      subtitle={artistById(item.artist).name} // Uses ID in each art object to pull the artist name from artistData.json
                      actionIcon={
                        <IconButton
                          sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                          aria-label={`info about ${item.title}`}
                        >
                          <InfoIcon />
                        </IconButton>
                      }
                    />

                  </ImageListItem>
                ))}
              </ImageList>

          </Box>

          <ArtPopup
                    open={open}
                    artistById={artistById}
                    selectedImg={selectedImg}
                    handleClose={handleClose}
          />
        </div>
    )
}

export default Gallery;
import FilterDrawer from "./FilterDrawer";
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import artData from '../json/artData.json';
import { Dialog } from '@mui/material'
import { useState } from "react";
import { Typography } from "@mui/material";
import { OtherHouses } from "@mui/icons-material";

const Gallery = () => {
    // handles opening and closing of image pop ups
    const [selectedImg, setSelectedImg] = useState(null);
    const handleClose = () => setSelectedImg(null);

    // Setting variables for the filters
    const [artName, setArtName] = useState('');
    // filters array will be sent down the hierarchy to ArtFilters
    const filters = {artName, setArtName};

    return(
        <div style={{alignItems: "flex-start", padding: "3%"}}>

          <FilterDrawer filters={filters}/>

          <Box style={{alignSelf: "stretch"}}>

              <ImageList variant="masonry" cols={4} gap={8}>

                {/* Creating an array of img from objects in artData */}
                {artData.filter((item) => {
                  return artName.toLowerCase() === '' 
                  ? item 
                  : item.title.toLowerCase().includes(artName.toLowerCase());
                })
                .map((item) => (

                  <ImageListItem key={item.url}>

                      <img
                      srcSet={`${item.url}?w=248&fit=crop&auto=format&dpr=2 2x`}
                      src={`${item.url}?w=248&fit=crop&auto=format`}
                      alt={item.title}
                      loading="lazy"
                      href="#"
                      />

                    <ImageListItemBar
                      title={item.title}
                      subtitle={item.author}
                      actionIcon={
                        <IconButton
                          sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                          aria-label={`info about ${item.title}`}
                          onClick={() => {setSelectedImg(item.url);}}
                        >
                          <InfoIcon />
                        </IconButton>
                      }
                    />

                    {/* Image Pop-up and title */}
                    <Dialog 
                    onClose={handleClose} 
                    open={item.url === selectedImg}>
                    <img 
                    src={item.url}
                    alt={item.title}
                    loading="lazy"
                    />
                        <Typography loading="lazy" sx={{fontSize: 30}}>
                          {item.title}
                        </Typography>
                    </Dialog>

                  </ImageListItem>
                ))}

              </ImageList>

          </Box>

        </div>
    )
}

export default Gallery;
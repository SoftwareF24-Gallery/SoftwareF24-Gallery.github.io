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

const Gallery = () => {
  {/* handles opening and closing of image pop ups */}
    const [selectedImg, setSelectedImg] = useState(null);
    const handleClose = () => setSelectedImg(null);

    return(
        <div style={{alignItems: "flex-start", padding: "3%"}}>
          <FilterDrawer/>
          <Box style={{alignSelf: "stretch"}}>
              <ImageList variant="masonry" cols={4} gap={8}>
                {/* Creating an array of img from objects in artData */}
                {artData.map((item) => (
                  <ImageListItem key={item.img}>
                      <img
                      srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                      src={`${item.img}?w=248&fit=crop&auto=format`}
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
                          onClick={() => {setSelectedImg(item.img);}}
                        >
                          <InfoIcon />
                        </IconButton>
                      }
                    />

                  {/* Image Pop-up and title */}
                  <Dialog 
                  onClose={handleClose} 
                  open={item.img === selectedImg}>
                  <img 
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                  />
                      <Typography >
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
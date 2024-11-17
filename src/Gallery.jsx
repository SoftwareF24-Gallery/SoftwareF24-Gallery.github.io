import FilterDrawer from "./FilterDrawer";
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import artData from '../json/artData.json';
import { Dialog, Typography, Card, CardMedia, CardContent } from '@mui/material'
import { useState } from "react";

const Gallery = () => {

    const [open, setOpen] = useState(false)

    return(
        <div style={{alignItems: "flex-start", padding: "3%"}}>
          <FilterDrawer/>
          <Box style={{alignSelf: "stretch"}}>
              <ImageList variant="masonry" cols={4} gap={8}>
                {/* Creating an array of img from objects in artData */}
                {artData.map((item) => (
                  <ImageListItem key={item.img} onClick={() => setOpen(true)}>
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
                        >
                          <InfoIcon />
                        </IconButton>
                      }
                    />

                  <Dialog open={open} onClose={() => setOpen(false)} sx={{background: 'rgba(0, 0, 0, 0.3)'}}>
                    <Card sx={{ width: 450 }} elevation="10">
                      <CardMedia
                        component="img"
                        image={`${item.img}?w=248&fit=crop&auto=format`}
                        title={item.title}
                        loading="lazy"
                      />
                      <CardContent>
                        <Typography>
                          {item.title}
                        </Typography>
                        <Typography>
                          Description
                        </Typography>
                      </CardContent>
                    </Card>
                  </Dialog>

                  </ImageListItem>
                ))}
              </ImageList>
          </Box>
        </div>
    )
}

export default Gallery;
import FilterDrawer from "./FilterDrawer";
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import artData from '../json/artData.json';

const Gallery = () => {
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
                  </ImageListItem>
                ))}
              </ImageList>
          </Box>
        </div>
    )
}

export default Gallery;
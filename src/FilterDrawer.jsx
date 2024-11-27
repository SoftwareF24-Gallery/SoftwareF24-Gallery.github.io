import { Drawer, IconButton, Button, Typography, ClickAwayListener} from "@mui/material";
import TuneIcon from '@mui/icons-material/Tune';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import { useState } from "react";
import { useTheme } from '@mui/material/styles';
import ArtFilters from './ArtFilters';
const drawerWidth = 320;

const FilterDrawer = ({filters}) => {
  
    {/* Setting up variables and functions for opening and closing drawer */}
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
      };
    
    const handleDrawerClose = () => {
          setOpen(false);
      };

      
    const theme = useTheme();


    return (
        <div>
         {/* Tooltip Adds alt text over hamburger menu, that says filters*/}
          <Tooltip title="Filters">
            <Button
              color="inherit"
              variant="outlined"
              startIcon={<TuneIcon />}
              aria-label="open drawer"
              onClick={(event) => {
                open ? handleDrawerClose() : handleDrawerOpen();
                {/* Propagation helps prevent click from traveling to parent elements */}
                event.stopPropagation();
              }}
              edge="start"
              sx={[
                { mr: 2 },
                { mb: 2 },
                open,
              ]}>
                Filters
            </Button>
          </Tooltip>
        
        {/* Allows user to click off drawer and it will close*/}
            <Drawer
                sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                    height: '100%',
                    overflow: 'hidden',
                },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
              <ClickAwayListener onClickAway={handleDrawerClose} mouseEvent={'onMouseUp'}>


              {/* main box for drawer*/}
              <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%', padding: "1em"}}>

                {/* Filter Text & button within drawer, 
                box for button and "X" for alignent*/}
                <Box sx={{ display: 'flex', m: 1, justifyContent: 'space-between'}}>

                    <Typography variant="h6"
                    sx={{display: 'flex',
                        mt: '2px',
                        ml: '7px',
                        fontWeight: 500,
                    }}>
                      Filters
                    </Typography>
                
                    {/* Close icon within nav drawer*/}

                    <IconButton 
                        sx={{
                        color: 'black',
                        alignSelf: 'flex-start',
                        padding: "0.3em",
                        '&:hover': { // Add a hover effect to the IconButton
                            backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)', // Slightly change background color on hover
                        }}}

                        onClick={handleDrawerClose}>
                        <CloseIcon sx={{ 
                          color: theme.palette.mode === 'dark' ? 'white' : 'black',
                        }} /> 
                    </IconButton>
                  </Box>    

                  {/* Filter component*/}
                  <ArtFilters filters={filters}/>
                  
                </Box>
              </ClickAwayListener>  
            </Drawer>  
        </div>       
    )
}

export default FilterDrawer;
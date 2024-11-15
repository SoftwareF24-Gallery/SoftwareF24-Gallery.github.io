import { Drawer, IconButton, Typography, ClickAwayListener } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import { useState } from "react";

const drawerWidth = 240;

const FilterDrawer = () => {

    {/* Setting up variables and functions for opening and closing drawer */}
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
      };
    
      const handleDrawerClose = () => {
        setOpen(false);
      };

    return (
        <div>
         {/* Tooltip Adds alt text over hamburger menu, that says filters*/}
          <Tooltip title="Filters">
            <IconButton
              color="inherit"
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
              ]}
            >
              <MenuIcon />
            </IconButton>
          </Tooltip>
        
        {/* Allows user to click off drawer and it will close*/}
        <ClickAwayListener onClickAway={handleDrawerClose}>
            <Drawer 
                sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <Box display={'flex'}>

            {/* Filter Text within drawer*/}
                    <Typography variant="h6"
                    sx={{display: 'flex',
                        mt: '2px',
                        ml: '7px',
                        fontWeight: 500, 
                        '&:hover' : {
                            textDecoration: 'underline'
                        }
                    }}
                    >Filters</Typography>
            
             {/* Hamburger menu within nav drawer*/}
                <IconButton 
                    sx={{
                    marginLeft: '137px',
                    color: 'black',
                    '&:hover': { // Add a hover effect to the IconButton
                        backgroundColor: 'rgba(0, 0, 0, 0.1)', // Slightly change background color on hover
                    }
                    }}
                    onClick={handleDrawerClose}
                >
                    <CloseIcon/> 
                </IconButton>
                
                </Box>
            </Drawer>
        </ClickAwayListener>     
        </div>       
    )
}

export default FilterDrawer;
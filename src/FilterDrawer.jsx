import { Drawer, IconButton } from "@mui/material";
import TuneIcon from '@mui/icons-material/Tune';
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

    return(
        <>
            <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={[
                {
                mr: 2,
                },
                open,
            ]}
            >
                <TuneIcon />
            </IconButton>
            <Drawer 
            sx={{width: drawerWidth,
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
            </Drawer>
        </>
    )
}

export default FilterDrawer;
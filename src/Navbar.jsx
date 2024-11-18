 /*Imports various tools needed for the website */
import { AppBar, Paper, Toolbar, Typography, Stack, Button, IconButton } from "@mui/material";
import Settings from "./Settings"
import HomeIcon from '@mui/icons-material/Home';
import { useTheme } from '@mui/material/styles';

 /*Makes dialog box open.  */
const Navbar = () => {

    const theme = useTheme(); // Access current theme

    // Main navigation bar function
    return (
        <>
            {/* 
                Breakpoints determine height of header depending on the screen size 
                51px for medium screen sizes
                70px for large screen sizes
            */}

            <Paper square elevation={0} sx={{display: "flex", alignItems: "center", justifyContent: "left",
                        [theme.breakpoints.down('md')]: { height: "51px"}, 
                        [theme.breakpoints.up('md')]: { height: "70px" },
                        background: theme.palette.mode === 'dark' ? "linear-gradient(to right, rgba(0,0,0,0), rgba(200,200,200,0.1), rgba(0,0,0,0)), black" 
                        : "linear-gradient(to right, rgba(200,200,200,255), rgba(0,0,0,0), rgba(200,200,200,255)), white"}}>
                <div id="top-navbar" style={{width: "100%", maxWidth: "1200px", margin: "0 auto", padding: "0 30px"}}>
                    <Typography sx={{fontFamily: "EPISODE1"}}>
                        Virtual Art Gallery
                    </Typography>
                </div>
            </Paper>

            <AppBar position="sticky" elevation={0} sx={{height: "52px", justifyContent: "center"}}>
                <Toolbar style={{width: "100%", maxWidth: "1200px", margin: "0 auto"}}> {/* Toolbar styling prevents width from expanding after 1200px, to keep content at center of page */}
                    <IconButton color="inherit" href="/#/">
                        <HomeIcon />
                    </IconButton>
                    <Typography variant="h6" sx={{flexGrow: 1, textAlign: "left"}}>
                    </Typography>
                    {/*Displays components on the left side by side */}
                    <Stack direction="row">
                        <Button color="inherit" href="/#/credits">
                        Credits
                        </Button>
                        <Settings/>
                    </Stack>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;
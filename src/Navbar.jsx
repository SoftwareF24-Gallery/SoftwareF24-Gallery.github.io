 /*Imports various tools needed for the website */
import { AppBar, Paper, Toolbar, Typography, Stack, Button, IconButton } from "@mui/material";
import Settings from "./Settings"
import HomeIcon from '@mui/icons-material/Home';
import { useTheme } from '@mui/material/styles';

 /*Makes dialog box open.  */
const Navbar = () => {

    const theme = useTheme(); // Access current theme

 {/*Main navigation bar function */}
    return (
        <>
            {/* 
                Breakpoints determine height of header depending on the screen size 
                51px for medium screen sizes
                70px for large screen sizes
            */}
            <Paper square sx={{padding: "20px", display: "flex", alignItems: "center", justifyContent: "left",
                        [theme.breakpoints.down('md')]: { height: "51px"}, 
                        [theme.breakpoints.up('md')]: { height: "70px" },
                        background: theme.palette.mode === 'dark' ? "linear-gradient(to right, rgba(0,0,0,0), rgba(200,200,200,0.1), rgba(0,0,0,0)), black" 
                        : "linear-gradient(to right, rgba(200,200,200,255), rgba(0,0,0,0), rgba(200,200,200,255)), white"}}>
                <Typography>
                    Virtual Art Gallery
                </Typography>
            </Paper>
            <AppBar position="sticky" sx={{background: "#203c5c", height: "52px", justifyContent: "center"}}>
                <Toolbar>
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
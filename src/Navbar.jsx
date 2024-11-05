 /*Imports various tools needed for the website */
import { AppBar, Paper, Toolbar, Typography, Stack, Button, IconButton } from "@mui/material";
import Settings from "./Settings"
import HomeIcon from '@mui/icons-material/Home';
import { theme } from './App'

 /*Makes dialog box open.  */
const Navbar = () => {
 {/*Main navigation bar function */}
    return (
        <>
            {/* 
                Breakpoints determine height of header depending on the screen size 
                51px for medium screen sizes
                70px for large screen sizes
            */}
            <Paper sx={{padding: "20px", display: "flex", alignItems: "center", justifyContent: "left",
                        [theme.breakpoints.down('md')]: { height: "51px"}, 
                        [theme.breakpoints.up('md')]: { height: "70px" }}}> 
                <Typography>
                    Virtual Art Gallery
                </Typography>
            </Paper>
            <AppBar position="sticky" sx={{background: "#203c5c"}}>
                <Toolbar sx={{marginBottom: "-30px"}}>
                    <IconButton color="inherit" href="/#/" sx={{marginTop: "-30px"}}>
                        <HomeIcon />
                    </IconButton>
                    <Typography variant="h6" sx={{flexGrow: 1, textAlign: "left"}}>
                    </Typography>
                    {/*Displays components on the left side by side */}
                    <Stack direction="row">
                        <Button color="inherit" href="/#/credits" sx={{marginTop: "-25px"}}>
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
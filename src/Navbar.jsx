 /*Imports various tools needed for the website */
import { AppBar, Paper, Toolbar, Typography, Stack, Button, IconButton } from "@mui/material";
import Settings from "./Settings"
import HomeIcon from '@mui/icons-material/Home';

 /*Makes dialog box open.  */
const Navbar = () => {
 {/*Main navigation bar function */}
    return (
        <Paper sx={{alignItems: "stretch"}}> 
            <Typography sx={{flexGrow: 1, textAlign: "left", margin: "12px"}}>
            Virtual Art Gallery
            </Typography>

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
        </Paper>
    )
}

export default Navbar;
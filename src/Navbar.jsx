 /*Imports various tools needed for the website */
import { AppBar, Toolbar, Typography, Stack, Button, IconButton } from "@mui/material";
import Settings from "./Settings"
import HomeIcon from '@mui/icons-material/Home';

 /*Makes dialog box open.  */
const Navbar = () => {
 {/*Main navigation bar function */}
    return (
        <AppBar position="sticky" sx={{background: "#203c5c"}}>
            <Toolbar sx={{marginBottom: "-30px"}}>
                <IconButton color="inherit" href="/softwaref24-gallery/#/" sx={{marginTop: "-30px"}}>
                    <HomeIcon />
                </IconButton>
                <Typography variant="h6" sx={{flexGrow: 1, textAlign: "left"}}>
                </Typography>
                 {/*Displays components on the left side by side */}
                <Stack direction="row">
                    <Button color="inherit" href="/softwaref24-gallery/#/credits" sx={{marginTop: "-25px"}}>
                    Credits
                    </Button>
                    <Settings/>
                </Stack>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;
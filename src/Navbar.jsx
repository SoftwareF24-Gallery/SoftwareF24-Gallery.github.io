 {/*Imports various tools needed for the website */}
import { AppBar, Toolbar, Typography, Stack} from "@mui/material";
import Settings from "./Settings"

 {/*Makes dialog box open.  */}
const Navbar = () => {
 {/*Main navigation bar function */}
    return (
        <AppBar position="sticky" sx={{background: "#203c5c"}}>
            <Toolbar sx={{marginBottom: "-30px"}}>
                <Typography variant="h6" sx={{flexGrow: 1, textAlign: "left"}}>
                </Typography>
                 {/*Displays components on the left side by side */}
                <Stack>
                    <Settings/>
                </Stack>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;
import { Typography, Button, Dialog, DialogTitle, IconButton } from "@mui/material";
import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';

const MichaelBioPopup = () => {
    
    const [bio, setBio] = useState(false)

    return (
        <>
        
        <Button onClick={() => setBio(true)}>
        View Bio
        </Button>

        {/* Tags popup */}
        <Dialog open={bio} onClose={() => setBio(false)} aria-labelledby="dialog-title">

        <DialogTitle id="dialog-title" sx={{display: "flex", justifyContent: "space-between"}}>
            Bio
            <IconButton onClick={() => setBio(false)} sx={{padding: "0.2em"}}>
                <CloseIcon />
            </IconButton>
        </DialogTitle>

        <Typography sx={{padding: 3}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Typography>

        </Dialog>

        </>
    )
}

export default MichaelBioPopup;
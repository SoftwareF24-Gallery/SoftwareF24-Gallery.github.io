import { Typography, Button, Dialog, DialogTitle, IconButton } from "@mui/material";
import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';

const JohanBioPopup = () => {
    
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
        Hello, my name is Johan. I am an aspiring software developer on the last semester of my associates degree, 
        finishing it up by helping build the website you are currently on. I loved working and making friends with
        the team you see around me in this credits page, all talented and capable. I learned a lot from this project
        and hope this to be one of the first of many endeavors in my software development career.
        </Typography>

        </Dialog>

        </>
    )
}

export default JohanBioPopup;
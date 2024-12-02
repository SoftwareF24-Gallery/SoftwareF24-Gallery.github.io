import { Typography, Button, Dialog, DialogTitle, IconButton } from "@mui/material";
import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';

const GuillermoBioPopup = ({description}) => {
    
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
            {description}
        </Typography>

        </Dialog>

        </>
    )
}

export default GuillermoBioPopup;
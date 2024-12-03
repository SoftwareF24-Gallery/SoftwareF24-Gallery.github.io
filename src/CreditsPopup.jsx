import { Typography, Button, Dialog, DialogTitle, DialogContent, IconButton } from "@mui/material";
import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';

const GuillermoBioPopup = ({description}) => {
    
    const [bio, setBio] = useState(false)

    return (
        <>
        
        <Button variant="outlined" onClick={() => setBio(true)}>
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
            
            <DialogContent>
                <Typography>
                    {description}
                </Typography>
            </DialogContent>

        </Dialog>

        </>
    )
}

export default GuillermoBioPopup;
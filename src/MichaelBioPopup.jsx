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
        My name is Michael and I am a driven student and software programmer who enjoys 
        learning and is ready to apply my skills to solve real-world problems. 
        I am passionate about using technology to make the world a better place. 
        And I enjoy facing new challenges and opportunities to learn and grow.
        </Typography>

        </Dialog>

        </>
    )
}

export default MichaelBioPopup;
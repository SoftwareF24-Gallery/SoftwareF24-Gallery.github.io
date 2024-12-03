import { Avatar, Modal, Box, Typography, Stack, Paper, IconButton, Button, Dialog, DialogTitle} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";

const ArtPopup = ({open, artistById, selectedImg, handleClose}) => {

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };
    
      // Manages tags popup opening and closing
      const [tags, setTags] = useState(false)
    
    return(
        <>
            <Modal 
            onClose={handleClose} 
            open={open}
            keepMounted
            >
                <Box sx={style}>
                    <Stack direction={"row"} sx={{justifyContent: "right"}}>
                        <IconButton onClick={handleClose}>
                            <CloseIcon />
                        </IconButton>
                    </Stack>
                    <Stack direction={{xs: "column", md: "row"}} sx={{display: "flex", width: "inherit", height: "inherit", margin: "0 auto"}}>
                        <Stack direction="column">
                            <img 
                                src={selectedImg.url}
                                alt={selectedImg.title}
                                loading="lazy"
                                style={{maxHeight: "100%", maxWidth: "100%", margin: "0 auto"}}
                            />
                                <Stack direction={"row"}>
                                    <Typography variant="h2" loading="lazy" sx={{fontSize: "2rem", lineHeight: "2.2rem"}}>
                                        {selectedImg.title}
                                    </Typography>
                                    <Button variant="outlined" onClick={() => setTags(true)}>
                                        View Tags
                                    </Button>

                                    {/* Tags popup */}
                                    <Dialog open={tags} onClose={() => setTags(false)} aria-labelledby="dialog-title">

                                        <DialogTitle id="dialog-title" sx={{display: "flex", justifyContent: "space-between"}}>
                                            Tags
                                            <IconButton onClick={() => setTags(false)} sx={{padding: "0.2em"}}>
                                                <CloseIcon />
                                            </IconButton>
                                        </DialogTitle>

                                        <Typography loading="lazy" sx={{fontSize: 30, padding: 3}}>
                                            {/* The quotes and plus sign make it so the comma shows up to separate each tag. Not completely sure why it yields that result but it does */}
                                            {selectedImg.tags.join(", ")}
                                        </Typography>
                                    </Dialog>


                                </Stack>
                            {/* Image description */}
                            <Typography loading="lazy" sx={{}}>
                                {selectedImg.description}
                            </Typography>
                            </Stack>
                            <Stack direction={{xs: "row", md: "column"}} sx={{}}>
                                {/* Artist's picture */}
                                <Avatar 
                                    src={artistById(selectedImg.artist).picture}
                                    alt={artistById(selectedImg.artist).name}
                                    sx={{height: "8rem", width: "8rem", margin: "1rem auto",}}
                                    loading="lazy"
                                />
                                <Stack direction="column">
                                    <Typography variant="h6" sx={{padding: 1}}>
                                        Artist
                                    </Typography>
                                    <Paper elevation={4} sx={{padding: 1, m: 1}}>
                                        <Typography variant="h6" loading="lazy">
                                            {artistById(selectedImg.artist).name}
                                        </Typography>
                                        <Typography loading="lazy">
                                            {artistById(selectedImg.artist).bio}
                                        </Typography>
                                    </Paper>
                                </Stack>
                            
                        </Stack>
                    </Stack>
                </Box>
            </Modal>
        </>
    )
}

export default ArtPopup;
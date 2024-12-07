import { Avatar, Modal, Card, CardMedia, CardContent, Box, Typography, Stack, Paper, IconButton, Button, Dialog, DialogTitle} from "@mui/material";
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
        maxHeight: '100vh',
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
                <Card sx={style}>
                    <Stack direction={"row"} sx={{justifyContent: "right"}}>
                        <IconButton onClick={handleClose}>
                            <CloseIcon />
                        </IconButton>
                    </Stack>
                    <Stack direction={{xs: "column"}}>
                        <Stack direction="column">
                            <CardMedia
                                sx={{objectFit: "contain"}}
                                component="img"
                                image={selectedImg.url}
                                alt={selectedImg.title}
                            />
                                <Stack direction={"row"} sx={{display: "flex", justifyContent: "space-between"}}>
                                    <CardContent>
                                        <Typography variant="h2" loading="lazy" sx={{whiteSpace: "nowrap", fontSize: "1.5rem"}}>
                                            {selectedImg.title}
                                        </Typography>
                                    </CardContent>
                                    <Button sx={{height: "2.5rem", margin: "auto 0"}} variant="outlined" onClick={() => setTags(true)}>
                                        <Typography sx={{whiteSpace: "nowrap", fontSize: "100%", padding: "1rem"}}>View Tags</Typography>
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
                            <Typography loading="lazy">
                                {selectedImg.description}
                            </Typography>
                            </Stack>
                            <Stack direction={{xs: "row"}}>
                                {/* Artist's picture */}
                                <Avatar 
                                    src={artistById(selectedImg.artist).picture}
                                    alt={artistById(selectedImg.artist).name}
                                    sx={{height: "8rem", width: "8rem", margin: "1rem auto",}}
                                    loading="lazy"
                                />
                                <Paper elevation={4} sx={{padding: 1, m: 1, display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                        <Typography variant="h6" loading="lazy">
                                            {artistById(selectedImg.artist).name}
                                        </Typography>
                                        <Typography loading="lazy">
                                            {artistById(selectedImg.artist).bio}
                                        </Typography>
                                </Paper>
                        </Stack>
                    </Stack>
                </Card>
            </Modal>
        </>
    )
}

export default ArtPopup;
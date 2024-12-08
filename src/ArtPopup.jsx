import { Avatar, Modal, Card, CardMedia, CardContent, Box, Typography, Stack, Paper, IconButton, Button, Dialog, DialogTitle} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";

const ArtPopup = ({open, artistById, selectedImg, handleClose}) => {

    const style = {
        bgcolor: 'background.paper',
        maxWidth: '700px',
        m: 'auto',
        boxShadow: 24,
      };
    
      // Manages tags popup opening and closing
      const [tags, setTags] = useState(false)
    
    return(
        <>
            <Modal 
            onClose={handleClose} 
            open={open}
            keepmounted
            sx={{display: 'flex',
                overflow: 'auto',
                alignItems: 'center',
                justifyContent: 'center'}}
            >
                <Card sx={style}>
                    <Stack direction="column">
                        <Stack direction="row" sx={{justifyContent: "right"}}>
                            <IconButton onClick={handleClose}>
                                <CloseIcon />
                            </IconButton>
                        </Stack>
                        <CardContent>
                            <Stack direction="column">
                                <CardMedia
                                    sx={{objectFit: "contain", maxHeight: "60vh", margin: "0 auto"}}
                                    component="img"
                                    image={selectedImg.url}
                                    alt={selectedImg.title}
                                />
                                <Stack direction={"row"} sx={{padding: "0.4rem 0", display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                                    
                                    <Typography variant="h2" loading="lazy" sx={{whiteSpace: "nowrap", fontSize: "1.5rem"}}>
                                        {selectedImg.title}
                                    </Typography>
                                    <Button sx={{height: "2.5rem", margin: "auto 0"}} variant="outlined" onClick={() => setTags(true)}>
                                        <Typography sx={{whiteSpace: "nowrap", fontSize: "100%", padding: "1rem"}}>View Tags</Typography>
                                    </Button>

                                    {/* Tags popup */}
                                    <Dialog open={tags} onClose={() => setTags(false)} aria-labelledby="dialog-title">

                                        <DialogTitle id="dialog-title" sx={{justifyContent: "space-between"}}>
                                            Tags
                                            <IconButton onClick={() => setTags(false)} sx={{padding: "0.2em"}}>
                                                <CloseIcon />
                                            </IconButton>
                                        </DialogTitle>

                                        <Typography loading="lazy" sx={{fontSize: 30, padding: 3}}>
                                            {selectedImg.tags.join(", ")}
                                        </Typography>
                                    </Dialog>
                                </Stack>

                                {/* Image description */}
                                <Typography loading="lazy">
                                    {selectedImg.description}
                                </Typography>
                            </Stack>
                            <Stack direction="row" sx={{justifyContent: 'center', marginTop: '0.6rem'}}>
                                {/* Artist's picture */}
                                <Avatar 
                                    src={artistById(selectedImg.artist).picture}
                                    alt={artistById(selectedImg.artist).name}
                                    sx={{height: "6rem", width: "6rem", margin: "1rem"}}
                                    loading="lazy"
                                />
                                <Paper elevation={4} sx={{p: 1, display: "flex", flexDirection: "column", justifyContent: "center", width: '100%'}}>
                                    <Typography variant="h6" loading="lazy">
                                        {artistById(selectedImg.artist).name}
                                    </Typography>
                                    <Typography loading="lazy">
                                        {artistById(selectedImg.artist).bio}
                                    </Typography>
                                </Paper>
                            </Stack>
                        </CardContent>
                    </Stack>
                </Card>
            </Modal>
        </>
    )
}

export default ArtPopup;
import { Modal, Box, Typography, Stack, IconButton, Button, Dialog, DialogTitle} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";

const ArtPopup = ({open, artistById, selectedImg, handleClose}) => {

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };
    
      //Manages tags popup opening and closing
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
                        <IconButton onClick={handleClose} sx={{padding: "0.2em"}}>
                            <CloseIcon />
                        </IconButton>
                    </Stack>
                    <Stack direction={"row"}>
                        <Stack direction={"column"} sx={{justifyContent: "left", width: "150%"}}>
                            <img 
                                src={selectedImg.url}
                                alt={selectedImg.title}
                                loading="lazy"
                                style={{padding: 10, width: "100%"}}
                            />
                                <Stack direction={"row"}>
                                    <Typography loading="lazy" sx={{fontSize: 30, paddingLeft: 1}}>
                                        {selectedImg.title}
                                    </Typography>
                                    <Button onClick={() => setTags(true)}>
                                        View Tags
                                    </Button>


                                    <Dialog open={tags} onClose={() => setTags(false)} aria-labelledby="dialog-title">

                                        <DialogTitle id="dialog-title" sx={{display: "flex", justifyContent: "space-between"}}>
                                            Tags
                                            <IconButton onClick={() => setTags(false)} sx={{padding: "0.2em"}}>
                                                <CloseIcon />
                                            </IconButton>
                                        </DialogTitle>

                                        <Typography loading="lazy" sx={{fontSize: 30, padding: 3}}>
                                            {"" + selectedImg.tags}
                                        </Typography>
                                    </Dialog>


                                </Stack>
                            <Typography loading="lazy" sx={{paddingLeft: 1, paddingBottom: 1}}>
                                {selectedImg.description}
                            </Typography>
                            </Stack>
                            <Stack direction={"column"} sx={{justifyContent: "right", width: "80%"}}>
                                <Typography loading="lazy" sx={{paddingLeft: 1, paddingBottom: 1}}>
                                    {"By " + artistById(selectedImg.artist).name}
                                </Typography>
                                <img 
                                    src={artistById(selectedImg.artist).picture}
                                    alt={artistById(selectedImg.artist).name}
                                    loading="lazy"
                                    style={{padding: 10, width: "100%"}}
                                />
                                <Typography loading="lazy" sx={{paddingLeft: 1, paddingBottom: 1}}>
                                    {artistById(selectedImg.artist).bio}
                                </Typography>
                            
                        </Stack>
                    </Stack>
                </Box>
            </Modal>
        </>
    )
}

export default ArtPopup;
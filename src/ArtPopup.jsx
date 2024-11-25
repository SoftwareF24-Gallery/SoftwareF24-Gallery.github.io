import { Dialog, Typography, Stack, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

const ArtPopup = ({open, artistById, selectedImg, handleClose}) => {

    return(
        <>
            <Dialog 
            onClose={handleClose} 
            open={open}
            >
                <Stack direction={"row"} sx={{justifyContent: "right"}}>
                    <IconButton onClick={handleClose} sx={{padding: "0.2em"}}>
                        <CloseIcon />
                    </IconButton>
                </Stack>
                <img 
                src={selectedImg.url}
                alt={selectedImg.title}
                loading="lazy"
                style={{padding: 10}}
                />

                <Typography loading="lazy" sx={{fontSize: 30, paddingLeft: 1}}>
                    {selectedImg.title}
                </Typography>
                <Typography loading="lazy" sx={{paddingLeft: 1, paddingBottom: 1}}>
                {"Artist: " + artistById(selectedImg.artist).name}
                </Typography>
            </Dialog>
        </>
    )
}

export default ArtPopup;
import { Modal, Box, Typography, Stack, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

const ArtPopup = ({open, artistById, selectedImg, handleClose}) => {

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };

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
                    <img 
                    src={selectedImg.url}
                    alt={selectedImg.title}
                    loading="lazy"
                    style={{padding: 10, width: "100%"}}
                    />

                    <Typography loading="lazy" sx={{fontSize: 30, paddingLeft: 1}}>
                        {selectedImg.title}
                    </Typography>
                    <Typography loading="lazy" sx={{paddingLeft: 1, paddingBottom: 1}}>
                    {"Artist: " + artistById(selectedImg.artist).name}
                    </Typography>
                </Box>
            </Modal>
        </>
    )
}

export default ArtPopup;
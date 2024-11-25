import Grid from "@mui/material/Grid2"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { IconButton, Typography } from "@mui/material";
import profilePhoto from "../public/img/Steve headshot.jpeg";
import DrakePhoto from "../public/img/Drake_Headshot.jpg";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import JohanPicture from "../public/img/Johan_Headshot.png"
import MichaelPicture from "../public/img/Michael Picture.jpg";

const Credits = () => {
    return (
        <>
        {/* Credits title */}
        <h1 style={{display: "flex", justifyContent: "center", alignItems: "center"}}>Credits</h1>

        {/* Grid holds cards */}
        {/* Yes, I know I hardcoded blank space using CardMedia.
            I wanna get that fixed soon.*/}
        <Grid container spacing={4} sx={{justifyContent: "center"}}>
            <Card elevation={5}>
                <CardContent sx={{display: "flex", flexDirection: "row", alignItems: "center", gap: "1rem"}}>
                    {/* Card image */}
                    <CardMedia sx={{ height: 200, width: 200, objectFit: 'contain' }} component="img" image={MichaelPicture}/>
                    {/* Div groups the typographies in a column style */}
                    <div>
                    <Typography variant="h5" fontWeight={"bold"}>
                        Michael Santos
                    </Typography>

                    <CardMedia sx={{ height: 200, width: 200 }} image=""/>
                    <Typography>
                        Did cool stuff
                    </Typography>

                    {/* Icon buttons for Github and LinkedIn */}
                    <IconButton href="https://github.com/Michaelmadeit2001">
                        <GitHubIcon />
                    </IconButton>

                    <IconButton href="">
                        <LinkedInIcon />
                    </IconButton>

                    </div>
                </CardContent>
            </Card>
            <Card elevation={5}>
                <CardContent sx={{display: "flex", flexDirection: "row", alignItems: "center", gap: "1rem"}}>

                    <CardMedia sx={{ height: 200, width: 200 }} image={profilePhoto} />
                    <div>
                    <Typography variant="h5" fontWeight={"bold"}>
                        Guillermo Labarca
                    </Typography>
                    <Typography>
                        Did cool stuff
                    </Typography>

                    {/* Icon buttons for Github and LinkedIn */}
                    <IconButton href="https://github.com/Gcarlab">
                        <GitHubIcon />
                    </IconButton>
                    
                    <IconButton href="">
                        <LinkedInIcon />
                    </IconButton>


                    </div>

                </CardContent>
            </Card>
            <Card elevation={5}>
                <CardContent sx={{display: "flex", flexDirection: "row", alignItems: "center", gap: "1rem"}}>

                    <CardMedia sx={{ height: 200, width: 200 }} image={DrakePhoto} />
                    <div>
                    <Typography variant="h5" fontWeight={"bold"}>
                        Drake Calhoun
                    </Typography>
                    <Typography>
                        Did cool stuff
                    </Typography>

                    {/* Icon buttons for Github and LinkedIn */}
                    <IconButton href="https://github.com/DrakeCal">
                        <GitHubIcon />
                    </IconButton>

                    <IconButton href="https://www.linkedin.com/in/drake-calhoun-285874296/">
                        <LinkedInIcon />
                    </IconButton>

                    </div>

                </CardContent>
            </Card>
            <Card elevation={5}>
                <CardContent sx={{display: "flex", flexDirection: "row", alignItems: "center", gap: "1rem"}}>

                    <CardMedia sx={{ height: 200, width: 200, objectFit: "contain" }} component="img" image={JohanPicture} />
                    <div>
                    <Typography variant="h5" fontWeight={"bold"}>
                        Johan Rodriguez
                    </Typography>
                    <Typography>
                        Did cool stuff
                    </Typography>

                    {/* Icon buttons for Github and LinkedIn */}
                    <IconButton href="https://github.com/The-Jragon">
                        <GitHubIcon />
                    </IconButton>

                    </div>

                </CardContent>
            </Card>
        </Grid>
        <div style={{padding: "50px"}}></div> {/* Hacky fix. Find a better solution later */}
        </>

    )

}

export default Credits;
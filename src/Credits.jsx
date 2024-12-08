import Grid from "@mui/material/Grid2"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { IconButton, Typography } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import JohanPicture from "../public/img/credits/Johan_Headshot.png"
import MichaelPicture from "../public/img/credits/Michael_Headshot.jpg";
import DrakePicture from "../public/img/credits/Drake_Headshot.jpg";
import GuillermoPicture from "../public/img/credits/Guillermo_Headshot.jpg";
import CreditsPopup from "./CreditsPopup";

const Credits = () => {

    const cardStyle = {
        height: "16rem",
        width: "30rem",
    }

    return (
        <>
        {/* Credits title */}
        <h1 style={{display: "flex", justifyContent: "center", alignItems: "center"}}>Credits</h1>

        {/* Grid holds cards */}
        {/* Yes, I know I hardcoded blank space using CardMedia.
            I wanna get that fixed soon.*/}
        <Grid container spacing={4} sx={{justifyContent: "center"}}>
            <Card elevation={5} sx={cardStyle}>
                <CardContent sx={{display: "flex", flexDirection: "row", alignItems: "center", gap: "1rem"}}>
                    {/* Card image */}
                    <CardMedia sx={{ height: 200, width: 180, objectFit: 'contain' }} component="img" image={MichaelPicture}/>
                    {/* Div groups the typographies in a column style */}
                    <div>
                    <Typography variant="h5" fontWeight={"bold"}>
                        Michael Santos
                    </Typography>

                    <CreditsPopup
                        description="Hi, My name is Michael. I recently graduated from Lone Star College with an Associate Degree in Software Programming. 
                        I'm a driven programmer with a passion for learning and building 
                        innovative solutions that tackle real-world problems. Besides coding I like staying up to date with tech trends, 
                        exploring new languages and frameworks. When I'm not immersed in a project, 
                        you'll find me producing music or coding up cool side projects that fuel my creativity. 
                        I'm a firm believer that challenges are opportunities in disguise, and I'm always eager to learn and grow."
                    />

                    
                    {/* Icon buttons for Github and LinkedIn */}
                    <IconButton href="https://github.com/Michaelmadeit2001" target="_blank">
                        <GitHubIcon />
                    </IconButton>

                    <IconButton href="https://www.linkedin.com/in/michael-santos-713714s/" target="_blank">
                        <LinkedInIcon />
                    </IconButton>

                    </div>
                </CardContent>
            </Card>
            <Card elevation={5} sx={cardStyle}>
                <CardContent sx={{display: "flex", flexDirection: "row", alignItems: "center", gap: "1rem"}}>

                    <CardMedia sx={{ height: 200, width: 180, objectFit: 'contain' }} component="img" image={GuillermoPicture} />
                    <div>
                    <Typography variant="h5" fontWeight={"bold"} sx={{fontSize: "1.28rem"}}>
                        Guillermo Carroz Labarca
                    </Typography>

                    <CreditsPopup
                        description="This is Guillermo's description"
                    />


                    {/* Icon buttons for Github and LinkedIn */}
                    <IconButton href="https://github.com/gcarlab" target="_blank">
                        <GitHubIcon />
                    </IconButton>
                    
                    <IconButton href="https://www.linkedin.com/in/guillermo-carroz-labarca" target="_blank">
                        <LinkedInIcon />
                    </IconButton>

                    </div>

                </CardContent>
            </Card>
            <Card elevation={5} sx={cardStyle}>
                <CardContent sx={{display: "flex", flexDirection: "row", alignItems: "center", gap: "1rem"}}>

                    <CardMedia sx={{ height: 200, width: 180, objectFit: 'contain'  }} component="img" image={DrakePicture} />
                    <div>
                    <Typography variant="h5" fontWeight={"bold"}>
                        Drake Calhoun
                    </Typography>
                    
                    <CreditsPopup
                        description="Drake Calhoun is a Lone Star College graduate with an Associate's Degree as a Programming Specialist.
                        Outside of work, he enjoys gaming, collecting unique keyboards and controllers, and pet sitting.
                        As enjoyable as working alone can be, he also loves to work in a team.
                        He tries to stay up to date with the latest information on technology in order to be the most knowledgable person he can possibly be in his field."
                    />

                    {/* Icon buttons for Github and LinkedIn */}
                    <IconButton href="https://github.com/DrakeCal" target="_blank">
                        <GitHubIcon />
                    </IconButton>

                    <IconButton href="https://www.linkedin.com/in/drake-calhoun-285874296/" target="_blank">
                        <LinkedInIcon />
                    </IconButton>

                    </div>
                </CardContent>
            </Card>
            <Card elevation={5} sx={cardStyle}>
                <CardContent sx={{display: "flex", flexDirection: "row", alignItems: "center", gap: "1rem"}}>

                    <CardMedia sx={{ height: 200, width: 180, objectFit: "contain" }} component="img" image={JohanPicture} />
                    <div>
                    <Typography variant="h5" fontWeight={"bold"}>
                        Johan Rodriguez
                    </Typography>

                    <CreditsPopup
                        description="Hello, my name is Johan. I am an aspiring software developer with two levels of computer
                        programming certifications, computer programming associate's degree, and a member of the
                        team that created this art gallery website. I loved working and making friends with
                        the team you see around me in this credits page, all talented and capable. I learned a lot from 
                        this project and hope this to be one of the first of many endeavors in my software development career."
                    />


                    {/* Icon buttons for Github and LinkedIn */}
                    <IconButton href="https://github.com/The-Jragon" target="_blank">
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
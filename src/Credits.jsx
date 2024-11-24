import Grid from "@mui/material/Grid2"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Typography } from "@mui/material";
import profilePhoto from "../public/img/Steve headshot.jpeg";

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
                    <CardMedia sx={{ height: 250, width: 100 }} />
                    <CardMedia sx={{ height: 200, width: 200 }} image={profilePhoto} />
                    {/* Div groups the typographies in a column style */}
                    <div>
                    <Typography variant="h5" fontWeight={"bold"}>
                        Michael Santos
                    </Typography>
                    <Typography>
                        Did cool stuff
                    </Typography>
                    <Typography>
                        Github: Michaelmadeit2001
                    </Typography>
                    <Typography>
                        LinkedIn:
                    </Typography>

                    </div>
                    <CardMedia sx={{ height: 250, width: 100 }} />
                </CardContent>
            </Card>
            <Card elevation={5}>
                <CardContent sx={{display: "flex", flexDirection: "row", alignItems: "center", gap: "1rem"}}>
                    <CardMedia sx={{ height: 250, width: 100 }} />
                    <CardMedia sx={{ height: 200, width: 200 }} image={profilePhoto} />
                    <div>
                    <Typography variant="h5" fontWeight={"bold"}>
                        Guillermo Labarca
                    </Typography>
                    <Typography>
                        Did cool stuff
                    </Typography>
                    <Typography>
                        Github: Gcarlab
                    </Typography>
                    <Typography>
                        LinkedIn:
                    </Typography>


                    </div>
                    <CardMedia sx={{ height: 250, width: 100 }} />
                </CardContent>
            </Card>
            <Card elevation={5}>
                <CardContent sx={{display: "flex", flexDirection: "row", alignItems: "center", gap: "1rem"}}>
                    <CardMedia sx={{ height: 250, width: 100 }} />
                    <CardMedia sx={{ height: 200, width: 200 }} image={profilePhoto} />
                    <div>
                    <Typography variant="h5" fontWeight={"bold"}>
                        Drake Calhoun
                    </Typography>
                    <Typography>
                        Did cool stuff
                    </Typography>
                    <Typography>
                        Github: DrakeCal
                    </Typography>
                    <Typography>
                        LinkedIn:
                    </Typography>

                    </div>
                    <CardMedia sx={{ height: 250, width: 100 }} />
                </CardContent>
            </Card>
            <Card elevation={5}>
                <CardContent sx={{display: "flex", flexDirection: "row", alignItems: "center", gap: "1rem"}}>
                    <CardMedia sx={{ height: 250, width: 100 }} />
                    <CardMedia sx={{ height: 200, width: 200 }} image={profilePhoto} />
                    <div>
                    <Typography variant="h5" fontWeight={"bold"}>
                        Johan Rodriguez
                    </Typography>
                    <Typography>
                        Did cool stuff
                    </Typography>
                    <Typography>
                        Github: The-Jragon
                    </Typography>

                    </div>
                    <CardMedia sx={{ height: 250, width: 100 }} />
                </CardContent>
            </Card>
        </Grid>
        <div style={{padding: "50px"}}></div> {/* Hacky fix. Find a better solution later */}
        </>

    )

}

export default Credits;
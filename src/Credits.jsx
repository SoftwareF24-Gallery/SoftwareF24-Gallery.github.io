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
        <Grid container spacing={4}>
            <Card>
                <CardContent sx={{display: "flex", flexDirection: "row", alignItems: "center", gap: "1rem"}}>
                    {/* Card image */}
                    <CardMedia sx={{ height: 250, width: 100 }} />
                    <CardMedia sx={{ height: 200, width: 200 }} image={profilePhoto} />
                    {/* Div groups the typographies in a column style */}
                    <div>
                    <Typography variant="h5" fontWeight={"bold"}>
                        This Guy
                    </Typography>
                    <Typography>
                        Did cool stuff
                    </Typography>
                    </div>
                    <CardMedia sx={{ height: 250, width: 100 }} />
                </CardContent>
            </Card>
            <Card>
                <CardContent sx={{display: "flex", flexDirection: "row", alignItems: "center", gap: "1rem"}}>
                    <CardMedia sx={{ height: 250, width: 100 }} />
                    <CardMedia sx={{ height: 200, width: 200 }} image={profilePhoto} />
                    <div>
                    <Typography variant="h5" fontWeight={"bold"}>
                        This Guy
                    </Typography>
                    <Typography>
                        Did cool stuff
                    </Typography>
                    </div>
                    <CardMedia sx={{ height: 250, width: 100 }} />
                </CardContent>
            </Card>
            <Card>
                <CardContent sx={{display: "flex", flexDirection: "row", alignItems: "center", gap: "1rem"}}>
                    <CardMedia sx={{ height: 250, width: 100 }} />
                    <CardMedia sx={{ height: 200, width: 200 }} image={profilePhoto} />
                    <div>
                    <Typography variant="h5" fontWeight={"bold"}>
                        This Guy
                    </Typography>
                    <Typography>
                        Did cool stuff
                    </Typography>
                    </div>
                    <CardMedia sx={{ height: 250, width: 100 }} />
                </CardContent>
            </Card>
            <Card>
                <CardContent sx={{display: "flex", flexDirection: "row", alignItems: "center", gap: "1rem"}}>
                    <CardMedia sx={{ height: 250, width: 100 }} />
                    <CardMedia sx={{ height: 200, width: 200 }} image={profilePhoto} />
                    <div>
                    <Typography variant="h5" fontWeight={"bold"}>
                        This Guy
                    </Typography>
                    <Typography>
                        Did cool stuff
                    </Typography>
                    </div>
                    <CardMedia sx={{ height: 250, width: 100 }} />
                </CardContent>
            </Card>
        </Grid>
        <div style={{padding: "50px"}}></div>
        </>

    )

}

export default Credits;
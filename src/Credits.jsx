import Grid from "@mui/material/Grid2"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Typography } from "@mui/material";
import profilePhoto from "../img/Steve headshot.jpeg";

const Credits = () => {
    return (
        <>
        {/* Credits title */}
        <h1 style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>Credits</h1>

        {/* Grid holds cards */}
        <Grid container spacing={6} alignItems="center" sx={{display: "flex", flexDirection: "column"}}>
            <Card>
                <CardContent sx={{display: "flex", flexDirection: "row", alignItems: "center", gap: "1rem"}}>
                    {/* Card image */}
                    <CardMedia sx={{ height: 100, width: 100 }} image={profilePhoto} />
                    {/* Div groups the typographies in a column style */}
                    <div>
                    <Typography variant="h5" fontWeight={"bold"}>
                        This Guy
                    </Typography>
                    <Typography>
                        Did cool stuff
                    </Typography>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardContent sx={{display: "flex", flexDirection: "row", alignItems: "center", gap: "1rem"}}>
                    <CardMedia sx={{ height: 100, width: 100 }} image={profilePhoto} />
                    <div>
                    <Typography variant="h5" fontWeight={"bold"}>
                        This Guy
                    </Typography>
                    <Typography>
                        Did cool stuff
                    </Typography>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardContent sx={{display: "flex", flexDirection: "row", alignItems: "center", gap: "1rem"}}>
                    <CardMedia sx={{ height: 100, width: 100 }} image={profilePhoto} />
                    <div>
                    <Typography variant="h5" fontWeight={"bold"}>
                        This Guy
                    </Typography>
                    <Typography>
                        Did cool stuff
                    </Typography>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardContent sx={{display: "flex", flexDirection: "row", alignItems: "center", gap: "1rem"}}>
                    <CardMedia sx={{ height: 100, width: 100 }} image={profilePhoto} />
                    <div>
                    <Typography variant="h5" fontWeight={"bold"}>
                        This Guy
                    </Typography>
                    <Typography>
                        Did cool stuff
                    </Typography>
                    </div>
                </CardContent>
            </Card>
            
        </Grid>

        </>

    )

}

export default Credits;
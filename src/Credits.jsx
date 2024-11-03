import Grid from "@mui/material/Grid2"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Typography } from "@mui/material";


const Credits = () => {
    return (
        <>
        <h1 style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>Credits</h1>

        <Grid container spacing={6} sx={{display: "flex", flexDirection: "column", maxWidth: "500px"}}>

            <Card>
                <CardContent sx={{display: "flex", flexDirection: "row", alignItems: "center", gap: "1rem"}}>
                    <CardMedia sx={{ height: 100, width: 100 }} image={"../JSONS/images/Steve headshot.jpeg"} />
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
                    <CardMedia sx={{ height: 100, width: 100 }} image={"../JSONS/images/Steve headshot.jpeg"} />
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
                    <CardMedia sx={{ height: 100, width: 100 }} image={"../JSONS/images/Steve headshot.jpeg"} />
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
                    <CardMedia sx={{ height: 100, width: 100 }} image={"../JSONS/images/Steve headshot.jpeg"} />
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
import Grid from "@mui/material/Grid2"

const Credits = () => {
    return (
        <>
        <h1 style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>Credits</h1>

        <Grid container spacing={6}>
            
            <Grid size={10} sx={{display: "flex", flexDirection: "row", alignItems: "center", gap: "1rem"}}>
                <img src="..\JSONS\images\Steve headshot.jpeg" width="5%"></img>
                <p><b>This Guy</b>: Did cool stuff</p>
            </Grid>
            <Grid size={10} sx={{display: "flex", flexDirection: "row", alignItems: "center", gap: "1rem"}}>
                <img src="..\JSONS\images\Steve headshot.jpeg" width="5%"></img>
                <p><b>This Guy</b>: Did cool stuff</p>
            </Grid>
            <Grid size={10} sx={{display: "flex", flexDirection: "row", alignItems: "center", gap: "1rem"}}>
                <img src="..\JSONS\images\Steve headshot.jpeg" width="5%"></img>
                <p><b>This Guy</b>: Did cool stuff</p>
            </Grid>
            <Grid size={10} sx={{display: "flex", flexDirection: "row", alignItems: "center", gap: "1rem"}}>
                <img src="..\JSONS\images\Steve headshot.jpeg" width="5%"></img>
                <p><b>This Guy</b>: Did cool stuff</p>
            </Grid>
            
        </Grid>

        </>

    )

}

export default Credits;
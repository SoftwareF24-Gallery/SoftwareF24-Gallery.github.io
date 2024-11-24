import { Button, Typography } from '@mui/material';
import { SelectGallery } from "./locations"
import { useTheme } from '@mui/material';

const Home = () => {
    const theme = useTheme(); // access current theme to apply button colors

    return (
        <>

        <div id="search" style={{display: "flex", justifyContent: "center", margin: "50px auto"}}>
            <SelectGallery/>
            <Button className="select-button" href="/#/gallery"//Button
                variant="contained"
                disableElevation
                sx={{backgroundColor: '#951717'}}>
                <Typography variant="h2">Go</Typography>
            </Button>
            
        </div>

        </>
    )
}
export default Home;
import { Button, Typography } from '@mui/material';
import { SelectGallery } from "./locations"
import { useTheme } from '@mui/material/styles';

const Home = () => {
    const theme = useTheme(); //access current theme to apply button colors

    return (
        <>

        <div id="search" style={{display: "flex", justifyContent: "center", margin: "50px auto"}}>
            <SelectGallery/>
            <Button className="select-button" href="/#/gallery"//Button
                variant="contained"
                disableElevation
                sx={{
                    backgroundColor: theme.palette.mode === 'dark' ? 'blue.500' : '#951717', // Changes color depending on the current theme
                    }}>
                Go
            </Button>
            
        </div>

        </>
    )
}
export default Home;
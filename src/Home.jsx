import { Button } from '@mui/material';
import { SelectGallery } from "./locations"
import { useTheme } from '@mui/material/styles';

const Home = () => {
    const theme = useTheme(); //access current theme to apply button colors

    return (
        <>

        <div id="search" style={{display: "flex", flexDirection: 'column', alignItems: "center", padding: "3%"}}>
            <SelectGallery/>
            
            <Button className="select-button" href="/#/gallery"//Button
                variant="contained" 
                sx={{ 
                    marginLeft: '5px', //in line css for button
                    marginTop: '25px',
                    width: '100px',
                    height: '50px',
                    backgroundColor: theme.palette.mode === 'dark' ? 'blue.500' : '#951717', // checks current them and applies grey and blue
                    }}>
                Select
            </Button>
            
        </div>

        </>
    )
}
export default Home;
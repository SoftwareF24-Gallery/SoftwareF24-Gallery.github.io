import { Button } from '@mui/material';
import { SelectGallery } from "./locations"
import { useTheme } from '@mui/material/styles';

const Home = () => {
    const theme = useTheme(); //access current theme

    return (
        <>

        <div id="search" style={{display: "flex", justifyContent: "center", padding: "3%"}}>
            <SelectGallery/>
        
            <Button variant="contained" sx={{ marginLeft: '5px', backgroundColor: theme.palette.mode === 'dark' ? 'grey.600' : 'blue.[500]' }}>
                Select
            </Button>
        </div>

        </>

    )

}

export default Home;
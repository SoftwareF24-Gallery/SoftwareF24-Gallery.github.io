import Location from "./Location"
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from "@mui/material"

const Home = () => {
    return (
        <>

        <div id="search" style={{display: "flex", justifyContent: "center", padding: "3%"}}>
        <Location />
        <IconButton>
        <SearchIcon></SearchIcon>
        </IconButton>
        </div>

        </>

    )

}

export default Home;
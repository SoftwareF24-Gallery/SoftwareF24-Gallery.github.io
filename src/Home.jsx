import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from "@mui/material"
import { SelectGallery } from "./locations"

const Home = () => {
    return (
        <>

        <div id="search" style={{display: "flex", justifyContent: "center", padding: "3%"}}>
        {/* <Location /> */}
        <SelectGallery/>
        <IconButton>
        <span>
            <SearchIcon></SearchIcon>
        </span>
        </IconButton>
        </div>

        </>

    )

}

export default Home;
import Navbar from "./Navbar"
import Location from "./Location"
import { IconButton, CssBaseline, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

function App() {

  return (
    <>
      <CssBaseline />
      {/* Navigation bar implementation */}
      <div id="sticky" style={{position: "sticky", top: 12}}>
      <Typography sx={{flexGrow: 1, textAlign: "left", margin: "12px"}}>
      Art Gallery
      </Typography>
      <Navbar />
      </div>

      <div id="search" style={{display: "flex", justifyContent: "center", padding: "3%"}}>
      <Location />
      <IconButton>
        <SearchIcon></SearchIcon>
      </IconButton>
      </div>
    </>
  )
}

export default App

import Navbar from "./Navbar"
import { TextField, IconButton, CssBaseline } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

function App() {

  return (
    <>
      {/* Navigation bar implementation */}
      <CssBaseline />
      <Navbar />
      <div id="search" style={{display: "flex", justifyContent: "center", padding: "5%"}}>
      <TextField label="Search" variant="standard" sx={{width: "50%"}}/>
      <IconButton>
        <SearchIcon></SearchIcon>
      </IconButton>
      </div>
    </>
  )
}

export default App

import './App.css'
import Navbar from "./Navbar"
import { TextField, IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

function App() {

  return (
    <>
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

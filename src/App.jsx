import Navbar from "./Navbar"
import Home from "./Home"
import Credits from "./Credits";
import { CssBaseline, Typography } from '@mui/material'
import { Route, Routes, BrowserRouter } from "react-router-dom";

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

      {/* Routing used to navigate the website */}
      <BrowserRouter>
      <div id="component">
        <Routes>
          <Route path="/softwaref24-gallery" element={<Home />} />
          <Route path="/softwaref24-gallery/credits" element={<Credits />} />
        </Routes>
      </div>
      </BrowserRouter>
      
    </>
  )
}

export default App

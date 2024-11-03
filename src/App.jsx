import Navbar from "./Navbar"
import Home from "./Home"
import Credits from "./Credits";
import { CssBaseline, ThemeProvider, createTheme, useColorScheme, Typography } from '@mui/material'
import { Route, Routes, HashRouter } from "react-router-dom";

// Theme information, can be toggled between Dark and Light
const theme = createTheme({
  colorSchemes: {
    dark: true,
  },
});

function App() {

  return (
    <>
      {/* ThemeProvider allows children components to access theme information */}
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {/* Navigation bar implementation */}
        <div id="sticky" style={{position: "sticky", top: 12}}>
          <Typography sx={{flexGrow: 1, textAlign: "left", margin: "12px"}}>
          Virtual Art Gallery
          </Typography>
          <Navbar />
        </div>

        {/* Routing used to navigate the website */}
        <HashRouter>
        <div id="component">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/credits" element={<Credits />} />
          </Routes>
        </div>
        </HashRouter>
      </ThemeProvider>
    </>
  )
}

export default App

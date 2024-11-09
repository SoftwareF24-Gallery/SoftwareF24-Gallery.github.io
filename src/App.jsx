import Navbar from "./Navbar";
import Home from "./Home";
import Credits from "./Credits";
import Gallery from "./Gallery";
import { CssBaseline, ThemeProvider, createTheme, Paper } from '@mui/material';
import { Route, Routes, HashRouter } from "react-router-dom";

// Theme information, can be toggled between Dark and Light
const theme = createTheme({
  colorSchemes: {
    dark: true,
  },
});

const App = () => {

  return (
    <>
      {/* ThemeProvider allows children components to access theme information */}
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Paper square style={{minHeight: "100%", maxWidth: "1920px", margin: "0 auto"}}>
          {/* Navigation bar implementation */}
          <div id="sticky" style={{position: "sticky", zIndex: 3, top: 0}}>
            <Navbar />
          </div>
          {/* Routing used to navigate the website */}
          <HashRouter>
          <div id="component">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/credits" element={<Credits />} />
              <Route path="/gallery" element={<Gallery />} />
            </Routes>
          </div>
          </HashRouter>
        </Paper>
      </ThemeProvider>
    </>
  )
}

export default App

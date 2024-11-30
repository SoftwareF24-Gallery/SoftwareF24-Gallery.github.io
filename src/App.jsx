import Navbar from "./Navbar";
import Home from "./Home";
import Credits from "./Credits";
import Gallery from "./Gallery";
import locations from '../json/locations.json';
import { SelectGallery } from "./locations"
import { CssBaseline, ThemeProvider, createTheme, Paper } from '@mui/material';
import { Route, Routes, HashRouter } from "react-router-dom";
import { useState } from "react";

// Theme information, can be toggled between Dark and Light
const theme = createTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: '#203c5c', // Lone Star's signature blue color
          contrastText: '#ffffff',
        },
        background: {
          default: '#121212',
        },
      },
    },

    dark:  {
      palette: {
        primary: {
          main: '#ffffff',
          contrastText: '#ffffff',
        },
      },
    },
  },
  
  // Overriding capitalization and other styles for Typography's h2 variant
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          variants: [
            {
              props: { variant: 'h2' },
              style: {
                textTransform: 'capitalize',
                fontSize: '1em',
                fontWeight: '700',
              },
            },
          ],
        },
      },
    },
  },

  typography: {

    fontFamily: "Roboto", 

    h1: {
      fontFamily: "EPISODE1",
      fontSize: '1.5em',
    },

    settingsTitles: {
      fontSize: '0.8em',
      textTransform: 'uppercase',
      fontWeight: '700',
    },
  },
});

const defaultLocation = locations.find((location) => location.default);
    document.title = defaultLocation.label;

const App = () => {

  const [selectedGallery, setSelectedGallery] = useState(defaultLocation);

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
          <div id="component" style={{width: "100%", maxWidth: "1200px", margin: "0 auto"}}> {/* Div styling prevents width from expanding after 1200px, to keep content at center of page */}
            <Routes>
              <Route path="/" element={
                // Passing the SelectGallery component to render gallery selection in Home, passing the selectedGallery variables to it
                <Home>
                  <SelectGallery selectedGallery = {selectedGallery} setSelectedGallery = {setSelectedGallery} />
                </Home>
                } />
              <Route path="/credits" element={<Credits />} />
              <Route path="/gallery" element={<Gallery selectedGallery={selectedGallery}/>} />
            </Routes>
          </div>
          </HashRouter>
        </Paper>
      </ThemeProvider>
    </>
  )
}

export default App

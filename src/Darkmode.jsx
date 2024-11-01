// import { ThemeProvider, createTheme } from "@mui/material/styles";
// import CssBaseline from "@mui/material";
// import { Card, CardContent, CardMedia, Switch, Typography } from "@mui/material"

// export default function App() {

// const [toggleDarkMode, setToggleDarkMode] = useState(true);

// const toggleDartkTheme = () => {
//     setToggleDarkMode (!toggleDarkMode);
// };

//     const darkTheme = createTheme({
//         palette: {
//             mode: 'dark',
//             primary: {
//                 main: '#90caf9',
//             },
//             secondary: {
//                 main: '#131052',
//             },
//             //add other properties here...
//         },
//     });

//     return(
//         <ThemeProvider theme={darkTheme}>
//             <CssBaseline />
//             <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
//                 <h2>Toggle Dark mode</h2>
//                 <Switch checked={toggleDarkMode} onChange={toggleDartkTheme} />
//                 <Card sx = {{ width: '30%', borderRadius: 3, padding: 1 }}>
//                     <CardContent>
//                         CardMedia sx={{ height: 180, borderRadius: 3}}
// image="https://images.pexels.come/photos/546819/pexels-photo-546819.jpeg" title="semaphore" />
//                 <Typography variant="h4" component="div" sx={{ marginTop: 3 }}>
//                     Programming Blogs
//                 </Typography>
//                 <Typography sx={{ mb: 1.5 }} color="text.secondary">
//                     by Semaphore
//                 </Typography>
//                 <Typography variant="body1">
//                     Checkout the latest blogs on semphore. semaphore provides you the best CI/Cd solution for high performance engineering teams.
//                 </Typography>
//                     </CardContent>                   
//                 </Card>
//                 </div>
//         </ThemeProvider>
//     )
// }

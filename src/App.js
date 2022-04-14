import { useState, useEffect } from 'react';
import './App.css';
import Products from './components/Products/Products';
import Navbar from './components/Navbar/Navbar';
import { CssBaseline } from '@material-ui/core';
import Footer from './components/Footer/Footer';
import Mail from './components/Mail/Mail';
import Deals from './components/TopDeals/Deals';
import Categories from './components/Categories/Categories';
import Sponsor from './components/Sponsors/Sponsor';
import { createTheme, ThemeProvider } from "@material-ui/core/styles";

function App() {
    const isSystemDark = window.matchMedia("(prefers-color-scheme: dark)").matches
  const [darkState, setDarkState] = useState(isSystemDark);
  const palletType = darkState ? "dark" : "light";
  const mainPrimaryColor = darkState ? '#ff9800' : '#3F51B5';
  const mainSecondaryColor = darkState ? '#e65100' : '#F50057';
  const mainTextColor = darkState ? '#fff' : '#36454F';
  const darkTheme = createTheme({
    palette: {
      type: palletType,
      primary: {
        main: mainPrimaryColor
      },
      secondary: {
        main: mainSecondaryColor
      },
    //   text: {
    //       primary: mainTextColor
    //   },
    }
  });
  const handleThemeChange = () => {
    setDarkState(!darkState);
  };

//   useEffect(() => {
//     setDarkState(isSystemDark);
//   },[window.matchMedia("(prefers-color-scheme: dark)").matches])
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Navbar />
      <Sponsor />
      <Products />
      <Deals />
      <Categories />
	  <Mail />
	  <Footer />
    </ThemeProvider>
  );
}

export default App;

import { createContext } from "react";
import { createTheme } from '@mui/material/styles';
import { green, orange, purple } from '@mui/material/colors';
import { ThemeProvider } from '@mui/private-theming';

export const ThemeContext = createContext();

export const ThemeContextProvider = ({children}) => {
    const theme = createTheme({
        palette: {
          primary: {
            main: orange[500],
          },
          secondary: {
            main: green[500],
          },
        },
      });

      return(
        <ThemeContext.Provider value={theme}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}
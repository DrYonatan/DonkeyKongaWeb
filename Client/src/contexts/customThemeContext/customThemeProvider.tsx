import { useState, FC } from "react";
import CustomThemeContext from "./customThemeContext";
import { createTheme, Theme } from "@mui/material";

interface CustomThemeProps {
  children: JSX.Element | JSX.Element[];
}

export const CustomThemeProvider: FC<CustomThemeProps> = ({ children }) => {
  const lightTheme = createTheme({
    cssVariables: true,
    palette: {
      primary: {
        main: "#e8e8e8" , //background white
        contrastText: "#fffefc", //text white
      },
      secondary: {
        main: "#5c7d29", //green
        contrastText: "#000000" //text black
      },
      

    },
  });
  const darkTheme = createTheme({
    cssVariables: true,
    palette: {
      primary: {
        main: "#151717", //background black
        contrastText: "#fffefc", //text white
      },
      secondary: {
        main: "#1e1752", //blue
        contrastText: "#ffffff" //text white
      },
    },
  });
  const [theme, setTheme] = useState<Theme>(lightTheme);

  const changeTheme = () => {
    if (theme.palette.primary.main == lightTheme.palette.primary.main)
      setTheme(darkTheme);
    else {
      setTheme(lightTheme);
    }
  };

  return (
    <CustomThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </CustomThemeContext.Provider>
  );
};

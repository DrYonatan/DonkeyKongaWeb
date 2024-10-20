import { Theme } from "@mui/material";
import { createContext, useContext } from "react";

interface CustomThemeContext {
  theme: Theme;
  changeTheme: () => void;
}

const CustomThemeContext = createContext<CustomThemeContext | undefined>(undefined);

export const useCustomThemeContext = () => {
  const context = useContext(CustomThemeContext);
  if (context === undefined) {
    throw new Error("useCustomThemeContext must be used within a ThemeContext");
  }
  return context;
};

export default CustomThemeContext;
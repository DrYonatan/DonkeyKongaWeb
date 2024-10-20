import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent";
import "./style.css";
import { pages } from "./routes";
import { ThemeProvider } from "@mui/material";
import { useCustomThemeContext } from "./contexts/customThemeContext/customThemeContext";
import { useState } from "react";
import { Context, createContext } from "vm";

function App() {
  const { theme } = useCustomThemeContext();

  return (
    <div>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <HeaderComponent />
          <Routes>
            {pages.map((page) => {
              return <Route path={page.path} element={page.element}></Route>;
            })}
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;

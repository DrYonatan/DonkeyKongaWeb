import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent";
import "./style.css";
import { pages } from "./routes";
import { ThemeProvider } from "@mui/material";
import { useCustomThemeContext } from "./contexts/customThemeContext/customThemeContext";
import  { useUserContext } from "./contexts/userContext/userContext";
import { UserProvider } from "./contexts/userContext/userProvider";

function App() {
  const { theme } = useCustomThemeContext();
  const { user } = useUserContext();

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

import "../style.css";
import { Link } from "react-router-dom";
import { pages } from "../routes";
import ContrastIcon from "@mui/icons-material/Contrast";
import { Button } from "@mui/material";
import { useCustomThemeContext } from "../contexts/customThemeContext/customThemeContext";

function HeaderComponent() {
  const {changeTheme} = useCustomThemeContext();
  return (
    <div className="headerComponent">
      <Button onClick={changeTheme}>
      <ContrastIcon style={{color:"white"}}/>
      </Button>
      {pages
        .filter((page) => page.shown)
        .map((page) => {
          return (
            <Link to={page.path} className="headerLink">
              {page.pageName}
            </Link>
          );
        })}
      <img
        style={{
          width: "50px",
          height: "50px",
          borderRadius: "100%",
        }}
        src="https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"
      />
    </div>
  );
}

export default HeaderComponent;

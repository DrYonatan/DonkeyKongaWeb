import "../style.css";
import { Link } from "react-router-dom";
import { pages } from "../routes";
import ContrastIcon from "@mui/icons-material/Contrast";
import { Button } from "@mui/material";
import { useCustomThemeContext } from "../contexts/customThemeContext/customThemeContext";
import { useUserContext } from "../contexts/userContext/userContext";

function HeaderComponent() {
  const { changeTheme } = useCustomThemeContext();
  const { user } = useUserContext();
  const { logOut } = useUserContext();

  return (
    <div className="headerComponent">
      <Button onClick={changeTheme}>
        <ContrastIcon style={{ color: "white" }} />
      </Button>
      {pages
        .filter((page) => page.shown)
        .map((page) => {
          if (page.pageName != "Login" || !user) {
            return (
              <Link to={page.path} className="headerLink">
                {page.pageName}
              </Link>
            );
          } else {
            return (
              <Link to="" className="headerLink" onClick={logOut}>
                Logout
              </Link>
            );
          }
        })}
      <Link to={user ? "/profile" : "/login"}>
        <img
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "100%",
          }}
          src={user ? user.profilepic : "https://i.pinimg.com/originals/f1/0f/f7/f10ff70a7155e5ab666bcdd1b45b726d.jpg"}
        />
      </Link>
    </div>
  );
}

export default HeaderComponent;

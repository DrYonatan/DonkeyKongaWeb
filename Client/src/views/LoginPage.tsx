import "../style.css";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material";
import { useState } from "react";
import { useUserContext } from "../contexts/userContext/userContext";


function LoginPage() {
  const theme = useTheme();
  const { logIn } = useUserContext();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onChangeUsername = (username: string) => {
    setUsername(username);
  };

  const onChangePassword = (password: string) => {
    setPassword(password);
  };

  const submitUser = async () => {
     logIn(username, password);
  }

  return (
    <div>
      <form className="genericContainer" onSubmit={submitUser}>
        <h2>Username</h2>
      <input
          required
          value={username}
          onChange={(e) => onChangeUsername(e.target.value)}
        />
        <h2>Password</h2>
        <input
          required
          type="password"
          value={password}
          onChange={(e) => onChangePassword(e.target.value)}
        />
        <br />
        <Link
          to="/signup"
          style={{ color: theme.palette.secondary.contrastText }}
        >
          Don't have an account? Sign Up
        </Link>

        <br />
        <button type="button" className="submitButton" onClick={submitUser}>
          Submit
        </button>
        <img
          src="https://cdn-icons-png.flaticon.com/512/579/579703.png"
          style={{ width: "200px", margin: "50px" }}
        ></img>
      </form>
    </div>
  );
}

export default LoginPage;

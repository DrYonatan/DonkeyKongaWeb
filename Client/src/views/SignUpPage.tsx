import { useState } from "react";
import "../style.css";
import { Link } from "react-router-dom";
import { User } from "../types/user";
import { addUser } from "../api/users";
import { useTheme } from "@mui/material";

function SignUpPage() {
  const theme = useTheme();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submitUser = async () => {
    const user: User = { username: username, password: password, profilepic: "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"};
    await addUser(user);
  };

  const onChangeUsername = (username: string) => {
    setUsername(username);
  };

  const onChangePassword = (password: string) => {
    setPassword(password);
  };

  return (
    <div>
      <form className="genericContainer" onSubmit={submitUser}>
        <h1>Create a new Account</h1>
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
          to="../login"
          style={{ color: theme.palette.secondary.contrastText }}
        >
          Already have an account? Log in
        </Link>

        <br />
        <button type="button" className="submitButton" onClick={submitUser}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default SignUpPage;

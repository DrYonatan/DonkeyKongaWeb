import { useState } from "react";
import { useUserContext } from "../contexts/userContext/userContext";
import "../style.css";
import { changeUserDetails } from "../api/users";
import TextField from "@mui/material/TextField";
import { useTheme } from "@mui/material";

function ProfilePage() {
  const { user } = useUserContext();
  const { logIn } = useUserContext();
  const theme = useTheme();

  const [username, setUsername] = useState(user?.username);
  const [profilepic, setProfilepic] = useState(user?.profilepic);
  const onChangeUsername = (username: string) => {
    setUsername(username);
  };

  const onChangeProfilepic = (profilepic: string) => {
    setProfilepic(profilepic);
  };

  const submitUser = async () => {
    changeUserDetails(user?.id, username, user?.password, profilepic).then(
      () => {
        logIn(username as string, user?.password as string);
      }
    );
  };

  return (
    <div>
      <div className="genericContainer">
        <h1>Profile</h1>
        <img
          src={user?.profilepic}
          style={{ borderRadius: "100%", height: "200px", width: "200px" }}
        ></img>
        <h2>Username</h2>
        <TextField
          required
          id="outlined-required"
          variant="standard"
          defaultValue={user?.username}
          InputProps={{
            style: { color: theme.palette.secondary.contrastText },
          }}
          onChange={(e) => onChangeUsername(e.target.value)}
        />
        <h2>Profile Picture</h2>
        <TextField
          required
          id="outlined-required"
          defaultValue={user?.profilepic}
          variant="standard"
          InputProps={{
            style: { color: theme.palette.secondary.contrastText },
          }}
          onChange={(e) => onChangeProfilepic(e.target.value)}
        />

        <br />
        <button className="submitButton" onClick={submitUser}>
          Save details
        </button>
      </div>
    </div>
  );
}

export default ProfilePage;

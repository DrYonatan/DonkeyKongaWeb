import { useState } from "react";
import { useUserContext } from "../contexts/userContext/userContext";
import "../style.css";
import { changeUserDetails } from "../api/users";

function ProfilePage() {
  const { user } = useUserContext();
  const { logIn } = useUserContext();

  const [username, setUsername] = useState(user?.username);
  const [profilepic, setProfilepic] = useState(user?.profilepic);
  const onChangeUsername = (username: string) => {
    setUsername(username);
  };

  const onChangeProfilepic = (profilepic: string) => {
    setProfilepic(profilepic);
  };

  const submitUser = async () => {
    changeUserDetails(user?.id, username, user?.password, profilepic).then(() => {
      logIn(username as string, user?.password as string);
    });
  };

  return (
    <div>
      <div className="genericContainer">
        <h1>Profile</h1>
        <img src={user?.profilepic} style={{ borderRadius: "100%", height: "200px", width: "200px"}}></img>
        <h2>Username</h2>
        <input
          required
          defaultValue={user?.username}
          onChange={(e) => onChangeUsername(e.target.value)}
        />
        <h2>Profile Picture</h2>
        <input
          defaultValue={user?.profilepic}
          onChange={(e) => onChangeProfilepic(e.target.value)}
        ></input>
        <br />
        <button className="submitButton" onClick={submitUser}>Save details</button>
      </div>
    </div>
  );
}

export default ProfilePage;

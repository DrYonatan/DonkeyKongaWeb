import { User } from "../types/user";

const serverIP = "http://192.168.1.120:3000/users";

const addUser = async (user: User) => {
  try {
    const response = await fetch(`${serverIP}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    console.log(response);
  } catch (error) {
    console.error("Error creating user:", error);
  }
};

const changeUserDetails = async (
  userId: number | undefined,
  username: string | undefined,
  password: string | undefined,
  profilepic: string | undefined
) => {
  try {
    const response = await fetch(`${serverIP}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId, username, password, profilepic }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    console.log(response);
  } catch (error) {
    console.error("Error creating user:", error);
  }
};

const findUserByUsernameAndPassword = async (
  username: string,
  password: string
) => {
  try {
    const response = await fetch(`${serverIP}/user/${username}/${password}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    console.log("working here");
    console.log(response);
    const user = await response.json();

    return user;
  } catch (error) {
    console.log("Error fetching user: " + error);
  }
};

const findUserById = async (userId: number) => {
  try {
    const response = await fetch(`${serverIP}/${userId}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    console.log(response);
    const user = await response.json();

    return user;
  } catch (error) {
    console.log("Error fetching user: " + error);
  }
};

export { addUser, findUserByUsernameAndPassword, changeUserDetails, findUserById };

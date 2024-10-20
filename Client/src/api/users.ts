import { User } from "../types/user";

const serverIP = "http://192.168.1.120:3000/users";

const addUser = async (user: User) => {
  try {
    const response = await fetch(`${serverIP}`, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify( user ),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    console.log(response);
  } catch (error) {
    console.error("Error creating user:", error);
  }
};

export { addUser };

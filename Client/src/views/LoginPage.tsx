import "../style.css";
import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <div>
      <form className="genericContainer">
        <h2>Username</h2>
        <input></input>
        <h2>Password</h2>
        <input></input>
        <br />
        <Link to="/signup">Don't have an account? Sign Up</Link>

        <br />
        <button type="submit" className="submitButton">
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

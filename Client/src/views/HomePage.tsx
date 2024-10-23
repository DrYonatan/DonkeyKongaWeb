import { mainImage } from "../assets/images";
import { useUserContext } from "../contexts/userContext/userContext";
import "../style.css";

function HomePage() {
  const {user} = useUserContext();

  return (
    <div>
      <div className="mainBlock">
        <div className="text-fadeIn">
          <h1>Welcome {user?.username} to the Super Army Level Website</h1>
        </div>
        <img src={mainImage} className="mainImage" />
      </div>
    </div>
  );
}

export default HomePage;

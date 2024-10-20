import { mainImage } from "../assets/images";
import "../style.css";

function HomePage() {
  return (
    <div>
      <div className="mainBlock">
        <div className="text-fadeIn">
          <h1>Welcome to the Super Army Level Website</h1>
        </div>
        <img src={mainImage} className="mainImage" />
      </div>
    </div>
  );
}

export default HomePage;

import "../style.css";
import { sonicImage } from "../assets/images";

function AboutPage() {
  return (
    <div>
      <div className="creatorContainer">
        <img src={sonicImage} style={{ height: "300px" }}></img>
        <p>"Never say Alma in Japanese, worst mistake of my life."</p>
        <p>-DrYonatan</p>
      </div>
      <div className="genericContainer">
        <h1>About The Game</h1>
        <p>
          Danganronpa Army is a game made by Tal Agin, AKA DrYonatan, and it's
          an IDF version of the original Danganronpa game, with all new
          characters, story, and basically everything.
        </p>

        <h1>About The Website</h1>
        <p>
          The website functions as a community, discussion and promotional
          material for the game. This website was also created by the creator of
          the Danganronpa Army game.
        </p>

        <h1>About The Creator</h1>
        <p>
          Tal Agin, also known as DrYonatan, The creator of Danganronpa Army, or Donkey Konga if you will, created it to make the Danganronpa Army dream come true, as it seemd to really fit. 
        </p>
      </div>
    </div>
  );
}

export default AboutPage;

import { Link } from "react-router-dom";
import Video from "../Video/Video";
import "./HomeContent.css";

const HomeContent = () => {
  return (
    <>
      <div className="homecontent-container">
        <div className="hc-top">
          <div className="hc-first">
            <span>L'étincelle</span>
          </div>
          <div className="hc-second">
            <span>qui</span>
            <div className="hc-second-video">
              {" "}
              <Video />
            </div>
            <span>génère</span>
          </div>
          <div className="hc-third">
            <span>la </span>
            <span>créativité</span>
          </div>
        </div>
        <div className="hc-main-para">
            <p>K72 est une agence qui pense chaque action pour nourrir la marque. Demain, dans 5 mois et dans 5 ans. On cherche la friction qui crée l’étincelle pour générer de l’émotion. Pour assurer une relation honnête, on est sans filtre, on dit ce qui doit être dit, on fait ce qui doit être fait.</p>
        </div>
        <ul className="hc-bottom-links">
          <li>
            <Link to="/projets">Projets</Link>
          </li>
          <li>
            <Link to="/agency">Agence</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default HomeContent;

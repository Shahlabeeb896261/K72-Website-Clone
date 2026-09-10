import { Link } from "react-router-dom";
import "./HomeBottom.css";

const HomeBottom = () => {
  return (
    <>
      <div className="homeBottom-container">
        <ul className="home-b-buttons">
          <li>
            <Link to="/work">Work</Link>
          </li>
          <li>
            <Link to="/agency">Agency</Link>
          </li>
          <li>
          </li>
        </ul>
      </div>
    </>
  );
};

export default HomeBottom;

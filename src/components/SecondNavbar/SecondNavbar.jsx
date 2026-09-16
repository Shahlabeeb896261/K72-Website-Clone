import { Link } from "react-router-dom";
import logo from "../../assets/secondLogo.svg";
import "./SecondNavbar.css";
import { useRef } from "react";

const SecondNavbar = () => {
  const firstRef = useRef();
  const handleMouseEnter = () => {
    firstRef.current.style.height = "100%";
  };
  const handleMouseLeave = () => {
    firstRef.current.style.height = "0%";
  };
  return (
    <>
      <div className="secondnav-container">
        <div className="sec-logo">
          <img src={logo} alt="" />
        </div>
        <ul className="sec-nav-links">
          <li
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="sec-nav-linksfirst"
          >
            <Link to="/projets">Projets (17)</Link>
            <div ref={firstRef} className="green-v"></div>
          </li>
          <li
            // onMouseEnter={handleMouseEnter}
            // onMouseLeave={handleMouseLeave}
            className="sec-nav-linkssecond"
          >
            <Link to="/agency">Agence</Link>
            <div className="green-v"></div>
          </li>
          <li
            // onMouseEnter={handleMouseEnter}
            // onMouseLeave={handleMouseLeave}
            className="sec-nav-linksthird"
          >
            <div className="sec-nav-ham">
              <div className="sec-nav-ham-first"></div>
              <div className="sec-nav-ham-second"></div>
            </div>
            <Link to="/">Menu</Link>
            <div className="green-v"></div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SecondNavbar;

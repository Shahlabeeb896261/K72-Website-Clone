import { useRef } from "react";
import logo from "../../assets/logo.svg";
import "./Navbar.css";

const Navbar = () => {
  const navRef = useRef();
  const handleEnter = () => {
    navRef.current.style.height = "100%";
    console.log(navRef.current.style.height);
  };
  const handleLeave = () => {
    navRef.current.style.height = "0";
  };
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>

        <div onMouseEnter={handleEnter} onMouseLeave={handleLeave} className="nav-div">
          <div className="nav-div-top">
            <div className="nd-first"></div>
            <div className="nd-second"></div>
          </div>
          <div ref={navRef} className="nav-div-bottom">
            <div className="nd-first"></div>
            <div className="nd-second"></div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

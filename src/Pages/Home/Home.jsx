import HomeContent from "../../components/HomeContent/HomeContent";
import Navbar from "../../components/Navbar/Navbar";
import Video from "../../components/Video/Video"
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="home-navbar">
          <Navbar />
        </div>
        <div className="home-bg-video">
          <Video />
        </div>
        <div className="home-content-x">
          <HomeContent />
        </div>
      </div>
    </>
  )
}

export default Home;
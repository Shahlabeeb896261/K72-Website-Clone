import HomeTop from "../../components/Home/HomeTop";
import HomeBottom from "../../components/HomeBottom/HomeBottom";
import HomeText from "../../components/HomeText/HomeText";
import Video from "../../components/Video/Video";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="home-video">
          <Video />
        </div>
        <div className="home-t">
          <HomeTop />
        </div>
        <div className="home-b">
          <HomeBottom />
        </div>
        <div className="home-tex">
          <HomeText />
        </div>
      </div>
    </>
  )
}

export default Home;
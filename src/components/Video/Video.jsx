import bgVideo from "../../assets/web_vd.mp4";
import "./Video.css";

const Video = () => {
  return (
    <>
      <div className="video-container">
        <video loop autoPlay muted src={bgVideo}></video>
      </div>
    </>
  )
}

export default Video;
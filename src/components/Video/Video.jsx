import bgVideo from "../../assets/web_vd.mp4";
import "./Video.css";

const Video = () => {
  return (
    <>
      <video loop autoPlay muted src={bgVideo}></video>
    </>
  );
};

export default Video;

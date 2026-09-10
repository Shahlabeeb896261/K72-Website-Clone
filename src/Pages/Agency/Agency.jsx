import { useRef } from "react";
import gsap from "gsap";
import img_1 from "../../assets/img_1.jpg";
import img_2 from "../../assets/img_2.jpg";
import img_3 from "../../assets/img_3.jpg";
import img_4 from "../../assets/img_4.jpg";
import img_5 from "../../assets/img_5.jpg";
import img_6 from "../../assets/img_6.jpg";
import img_7 from "../../assets/img_7.jpg";
import img_8 from "../../assets/img_8.jpg";
import "./Agency.css";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

const Agency = () => {
  const imgArr = [img_1, img_2, img_3, img_4, img_5, img_6, img_7, img_8];
  const imgRef = useRef();
  const imgContRef = useRef();

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.to(
      imgContRef.current,
      {
        scrollTrigger: {
          trigger: imgContRef.current,
          markers: true,
          start: "top 28%",
          end: "+=1090",
          pin: true,
          scrub: 2,
          pinSpacing: true,
          onUpdate: (element) => {
            let value = Math.floor(element.progress * imgArr.length);
            console.log(value);
            if(value >= 0 && value < imgArr.length) {
              imgRef.current.src = imgArr[value];
            } else {
              imgRef.current.src = imgArr[7];
            }
          },
        },
      },
      { scope: imgContRef },
    );
  });

  return (
    <>
      <div className="agency-container">
        <div className="agency-images" ref={imgContRef}>
          <img src={imgArr[0]} alt="" ref={imgRef} />
        </div>
        <div className="agency-content">
          <div className="agency-heading">
            <h1>SEVEN7Y</h1>
            <h1>TWO</h1>
          </div>
          <div className="agency-para">
            <p>
              We're inquisitive and open-minded, and we make sure creativity
              crowds out ego from every corner. A brand is a living thing, with
              values, a personality and a story. If we ignore that, we can
              achieve short-term success, but not influence that goes the
              distance. We bring that perspective to every brand story we help
              tell.
            </p>
          </div>
        </div>
      </div>
      <div className="agency-middle">
        <div>
          <h2>Expertise</h2>
          <p>
            Our Work_ Born in curiosity, raised by dedication and fed with a
            steady diet of creativity.
          </p>
        </div>
        <div>
          <ul>
            <li>Strategy</li>
            <li>Advertising</li>
            <li>Branding</li>
            <li>Design</li>
            <li>Content</li>
          </ul>
          <p>
            Our Work_ Born in curiosity, raised by dedication and fed with a
            steady diet of creativity.
          </p>
        </div>
        <div>
          <p>
            Our Culture_ We're open to each other. Period. The team works
            together to create a space that makes us proud.
          </p>
        </div>
      </div>
    </>
  );
};

export default Agency;

import { useRef } from "react";
import img_1 from "../../assets/img_1.jpg";
import img_2 from "../../assets/img_2.jpg";
import img_3 from "../../assets/img_3.jpg";
import img_4 from "../../assets/img_4.jpg";
import img_5 from "../../assets/img_5.jpg";
import img_6 from "../../assets/img_6.jpg";
import img_7 from "../../assets/img_7.jpg";
import img_8 from "../../assets/img_8.jpg";
import "./AgencyTop.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

const AgencyTop = () => {
  const containerRef = useRef();
  const imgRef = useRef();
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.to(imgRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 23%",
        markers: true,
        end: "+=1200",
        pin: true,
        scrub: 1,
        pinSpacing: true,
        onUpdate: (e) => {
            let value = Math.floor(e.progress * imgArr.length);
            if(value >= 0 && value < 8) {
                imgRef.current.src = imgArr[value];
                console.log(value);
            } 
            if(value === 8) {
                imgRef.current.src = imgArr[imgArr.length - 1];
            }
        }
      },
    });
  });
  const imgArr = [img_1, img_2, img_3, img_4, img_5, img_6, img_7, img_8];
  return (
    <>
      <div className="agency-container">
        <div ref={containerRef} className="agency-image">
          <img ref={imgRef} src={imgArr[0]} alt="Image" />
        </div>
        <div className="agency-heading">
          <h1>Soixan7e</h1>
          <h1>Douze</h1>
        </div>
        <div className="agency-para">
          <p>
            Notre curiosité nourrit notre créativité. On reste humbles et on dit
            non aux gros egos, même le vôtre. Une marque est vivante. Elle a des
            valeurs, une personnalité, une histoire. Si on oublie ça, on peut
            faire de bons chiffres à court terme, mais on la tue à long terme.
            C’est pour ça qu’on s’engage à donner de la perspective, pour bâtir
            des marques influentes.
          </p>
        </div>
      </div>
      <div className="ab-bottom">
        <div className="ab-bottom-f">
            <h3>Expertise</h3>
        </div>
        <div className="ab-bottom-s">
            <ul className="ab-bottom-s-ul">
                <li>Stratégie</li>
                <li>Publicité</li>
                <li>Branding</li>
                <li>Design </li>
                <li>Contenu</li>
            </ul>
        </div>
      </div>
      <div className="ld-f">
        <div className="ld-ffirst">
            <p>Nos projets_ naissent dans l’humilité, grandissent dans la curiosité et vivent grâce à la créativité sous toutes ses formes.</p>
        </div>
        <div className="ld-fsecond">
            <p>Notre création_ bouillonne dans un environnement où le talent a le goût d’exploser. Où on se sent libre d’être la meilleure version de soi-même.</p>
        </div>
        <div className="ld-fthird">
            <p>Notre culture_ c’est l’ouverture aux autres. Point. Tout l’équipage participe à bâtir une agence dont on est fiers. </p>
        </div>
      </div>
    </>
  );
};

export default AgencyTop;

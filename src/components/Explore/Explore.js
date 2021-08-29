import React from "react";
import style from "./explore.module.scss";

//img
import img1 from "../../img/explore/explore-1.jpg";
import img2 from "../../img/explore/explore-2.jpg";
import img3 from "../../img/explore/explore-3.jpg";
//icon
import icon from "../../img/icon/icon-1.svg";
import icon2 from "../../img/icon/icon-2.svg";
import icon3 from "../../img/icon/icon-3.svg";
import icon4 from "../../img/icon/icon-4.svg";

export default function Explore() {
  return (
    <article className="container">
      {/* article 1 */}
      <div className={style["explore-wrapper"]}>
        <div className={style["img-wrapper"]}>
          <img src={img1} alt="explore 1" />
        </div>
        <div className={style["text-wrapper"]}>
          <img src={icon} alt="icon" />
          <div className={style["sub-heading"]}>Plug in to the</div>
          <h2>Next Gen FrameWork</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
            earum architecto dolore quos voluptate deleniti fuga saepe
            exercitationem, harum fugiat aliquam quibusdam ab odit eum.
          </p>
          <a href="http://#" target="_blank" rel="noopener noreferrer">
            Learn More
          </a>
        </div>
      </div>
      {/* article 2 */}
      <div className={style["explore-wrapper"]}>
        <div className={style["text-wrapper"]}>
          <img src={icon2} alt="icon" />
          <div className={style["sub-heading"]}>Retina Ready ~ 534 PPI</div>
          <h2>Stunning Graphicss</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
            earum architecto dolore quos voluptate deleniti fuga saepe
            exercitationem, harum fugiat aliquam quibusdam ab odit eum.
          </p>
          <a href="http://#" target="_blank" rel="noopener noreferrer">
            Learn More
          </a>
        </div>
        <div className={style["img-wrapper"]}>
          <img src={img2} alt="explore 2" />
        </div>
      </div>
      {/* article 3 */}
      <div className={style["explore-wrapper"]}>
        <div className={style["img-wrapper"]}>
          <img src={img3} alt="explore 3" />
        </div>
        <div className={style["text-wrapper"]}>
          <img src={icon3} alt="icon" />
          <div className={style["sub-heading"]}>Privacy Protected</div>
          <h2>Secured Solutions</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
            earum architecto dolore quos voluptate deleniti fuga saepe
            exercitationem, harum fugiat aliquam quibusdam ab odit eum.
          </p>
          <a href="http://#" target="_blank" rel="noopener noreferrer">
            Learn More
          </a>
        </div>
      </div>
      {/* article 4 */}
      <div className={style["explore-wrapper"]}>
        <div className={style["text-wrapper"]}>
          <img src={icon4} alt="icon" />
          <div className={style["sub-heading"]}>Plug in to the</div>
          <h2>Next Gen FrameWork</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
            earum architecto dolore quos voluptate deleniti fuga saepe
            exercitationem, harum fugiat aliquam quibusdam ab odit eum.
          </p>
          <a href="http://#" target="_blank" rel="noopener noreferrer">
            Learn More
          </a>
        </div>
        <div className={style["img-wrapper"]}>
          <img src={img1} alt="explore 1" />
        </div>
      </div>
    </article>
  );
}

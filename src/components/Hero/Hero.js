import React from "react";
import "../../style/main.scss";
import style from "./hero.module.scss";

export default function Hero() {
  return (
    <>
      <div className={style["hero-wrapper"]}>
        <h1 className={style["hero-text"]}>
          Beautiful Website <br /> Increased Conversion
        </h1>
      </div>
      <div className={style["cta-section"]}>
        <a
          className={"btn " + style.cta}
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        >
          Try It Free
        </a>
      </div>
    </>
  );
}

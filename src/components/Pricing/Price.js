import React from "react";
import style from "./price.module.scss";

export default function Price() {
  return (
    <div className="container">
      <div className={style.pricing}>
        <div className={style["price-card"]}>
          <h3 className={style["price-tier"]}>STARTER</h3>
        </div>
        <div className={style["price-card"]}>
          <h3 className={style["price-tier"]}>PROFESSIONAL</h3>
        </div>
        <div className={style["price-card"]}>
          <h3 className={style["price-tier"]}>BUSINESS</h3>
        </div>
      </div>
    </div>
  );
}

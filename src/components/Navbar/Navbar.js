import React from "react";
import style from "./Navbar.module.scss";

export default function Navbar() {
  return (
    <header>
      <nav className={style["navbar-position"]}>
        <div className={style.navbar + " container"}>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/#explore">Explore</a>
            </li>
            <li>
              <a href="/">Pricing</a>
            </li>
          </ul>
          <div className={style.logo}>
            <h1>
              <a href="/">Your Logo</a>
            </h1>
          </div>
          <ul>
            <li>
              <a href="/">Faqs</a>
            </li>
            <li>
              <a href="/">Gallery</a>
            </li>
            <li>
              <a className={"btn " + style.login} href="/">
                login
              </a>
            </li>
          </ul>
        </div>
        <hr className="container" />
      </nav>
    </header>
  );
}

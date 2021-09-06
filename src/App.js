import { Parallax } from "react-parallax";
import style from "./app.module.scss";
import Explore from "./components/Explore/Explore";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Price from "./components/Pricing/Price";
import bg from "./img/landing.jpg";
import "./style/main.scss";

function App() {
  return (
    <>
      <Navbar />
      <Parallax Parallax bgImage={bg} strength={400} blur={{ min: -1, max: 2 }}>
        <section className={style["hero-background"]}>
          <div className="container">
            <Hero />
          </div>
        </section>
      </Parallax>
      <section className="explore">
        <Explore />
      </section>
      <section className="pricing">
        <Price />
      </section>
    </>
  );
}

export default App;

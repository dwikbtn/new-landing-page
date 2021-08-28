import style from "./app.module.scss";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import "./style/main.scss";

function App() {
  return (
    <>
      <Navbar />
      <section className={style["hero-background"]}>
        <div className="container">
          <Hero />
        </div>
      </section>
    </>
  );
}

export default App;

import style from "./app.module.scss";
import Navbar from "./components/Navbar/Navbar";
import "./style/main.scss";

function App() {
  return (
    <>
      <section className={style["hero-background"]}>
        <Navbar />
      </section>
    </>
  );
}

export default App;
